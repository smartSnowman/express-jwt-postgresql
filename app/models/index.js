const config = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  config.DB,
  config.USER,
  config.PASSWORD,
  {
    host: config.HOST,
    dialect: config.dialect,
    pool: {
      max: config.pool.max,
      min: config.pool.min,
      acquire: config.pool.acquire,
      idle: config.pool.idle
    }
  }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.rncLocusMember = require("./rnc.locus.member.model.js")(sequelize, Sequelize);
db.rncLocus = require("./rnc.locus.model.js")(sequelize, Sequelize);

db.rncLocus.hasMany(db.rncLocusMember, { foreignKey: 'locus_id' });
db.rncLocusMember.belongsTo(db.rncLocus, { foreignKey: 'id' });

module.exports = db;
