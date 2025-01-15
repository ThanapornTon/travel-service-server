const Sequelize = require("sequelize");
const db = require("./../db/db.js");

const Traveller = db.define("traveller_tb", {
    travellerId: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
        field: "travellerId"
    },
    travellerFullname: {
        type: Sequelize.STRING(50),
        allowNull: false,
        field: "travellerFullname"
    },
    travellerEmail: {
        type: Sequelize.STRING(50),
        allowNull: false,
        field: "travellerEmail"
    },
    travellerPassword: {
        type: Sequelize.STRING(50),
        allowNull: false,
        field: "travellerPassword"
    }

},
    {
        tableName: "traveller_tb",
        timestamps: false,
        freezeTableName: true
    });



module.exports = Traveller;
