const Sequelize = require('sequelize');
const dbconfig = require('../config/database');

const sequelize = new Sequelize(dbconfig);

module.exports = sequelize;