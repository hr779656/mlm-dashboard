// IMPORT SATATEMENT ============
const config = require("../config/config");
const Sequelize = require("sequelize");
require('dotenv').config()

// Database Connectivity ========
const sequelize = new Sequelize(process.env.DATABASE, config.USER, config.PASSWORD, {
    host: config.HOST,
    dialect: config.DATABASE
});

// Veribale for database Methods and Schemas ================
const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.userRegister = require("./reg_schema")(sequelize, Sequelize);
db.usersCodes = require("./user_code_schema")(sequelize, Sequelize);

// Define Associations
db.userRegister.hasOne(db.usersCodes, { foreignKey: 'reg_id' });
db.usersCodes.belongsTo(db.userRegister, { foreignKey: 'reg_id' });

// Export Statement ========
module.exports = db;
