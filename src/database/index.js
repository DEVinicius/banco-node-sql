const Sequelize = require('sequelize');
const dbconfig = require('../config/database');

const User = require('../models/User');
const Adress = require('../models/Adress');

const connection = new Sequelize(dbconfig);

User.init(connection);
Adress.init(connection);
Adress.associate(connection.models);

module.exports = connection;