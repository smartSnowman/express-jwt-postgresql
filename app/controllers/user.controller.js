const { Op, literal } = require('sequelize');

const { Role } = require("../helper/auth.helper");
const db = require("../models");

const RNCLocusMember = db.rncLocusMember;
const RNCLocus = db.rncLocus;

const sortList = ["id", "assembly_id"]
const regionIdList = [86118093,86696489,88186467]

exports.getLocus = async (req, res) => {
  try {
    const { role } = req;

    const roleIsValid = Role.includes(role)
    if (!roleIsValid) {
      return res.status(500).send({ message: "Invalid Role" });
    }
    const { id, assembly_id, membership_status, region_id } = req.query;
    const { sideloading = false } = req.query;
    const { page = 1, limit = 1000 } = req.query;
    const { sort = "id", order = "ASC" } = req.query;
    const sortIsValid = sortList.includes(sort);

    let filter = {};
    if (id) { filter = { ...filter, id: id } }
    if (assembly_id) { filter = { ...filter, assembly_id: assembly_id }}

    let locusMemberFilter = {};
    if (role == "limited") { 
      locusMemberFilter = {
        ...locusMemberFilter,
        region_id: {
          [Op.in]: regionIdList
        }
      }
    }
    if (membership_status) {locusMemberFilter = {...locusMemberFilter, membership_status: membership_status}}
    if (region_id) {
      locusMemberFilter = {...locusMemberFilter, region_id: parseInt(region_id)}
    }

    RNCLocus.findAll({
      where: filter,
      include: {
          model: RNCLocusMember,
          where: locusMemberFilter,
          required: false
      },
      order: [[sortIsValid?sort:"id", order]],
      limit: limit,
      offset: (page - 1) * limit,
    })
      .then(data => {
        const jsonData = JSON.parse(JSON.stringify(data));
        console.log("jsonData", jsonData);
        let filteredData = jsonData;
        if(!sideloading || role != "admin"){
          filteredData = filteredData.map(row => {
            const { rnc_locus_members, ...locus } = row;
            return locus;
          })
        }

        if (role == "limited"){
          filteredData = filteredData.filter(row => 
            row.rnc_locus_members?.some(member => regionIdList.includes(member.region_id))
          );
        }

        return res.status(200).send({ data: filteredData });
      })
      .catch(err => {
        return res.status(400).send({ message: err.message });
      });
  }
  catch (err) {
    console.log("error", err)
    return res.status(400).send({ message: err.message });
  }
};