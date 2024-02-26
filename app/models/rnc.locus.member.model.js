module.exports = (sequelize, Sequelize) => {
    const RNCLocusMember = sequelize.define("rnc_locus_members", {
        id: {
            type: Sequelize.BIGINT,
            allowNull: false,
            primaryKey: true
        },
        urs_taxid: {
            type: Sequelize.TEXT,
            allowNull: false
        },
        region_id: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        locus_id: {
            type: Sequelize.BIGINT,
            allowNull: false
        },
        membership_status: {
            type: Sequelize.TEXT,
            allowNull: false
        }
    },
    {
        timestamps: false
    });
  
    return RNCLocusMember;
  };