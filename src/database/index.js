const Sequelize = require('sequelize');
const dbconfig = require('../config/database');
const User = require('../models/User');

const connection = new Sequelize(dbconfig);

User.init(connection);

module.exports = connection;