module.exports = (sequelize, Sequelize) => {
    const RNCLocus = sequelize.define("rnc_locus", {
        id: {
            type: Sequelize.BIGINT,
            allowNull: false,
            primaryKey: true
        },
        assembly_id: {
            type: Sequelize.TEXT,
            allowNull: false
        },
        locus_name: {
            type: Sequelize.TEXT,
            allowNull: false
        },
        public_locus_name: {
            type: Sequelize.TEXT,
            allowNull: false
        },
        chromosome: {
            type: Sequelize.TEXT,
            allowNull: false
        },
        strand: {
            type: Sequelize.TEXT,
            allowNull: false
        },
        locus_start: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        locus_stop: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        member_count: {
            type: Sequelize.INTEGER,
            allowNull: false
        }
    },
    {
        timestamps: false
    });
  
    return RNCLocus;
  };