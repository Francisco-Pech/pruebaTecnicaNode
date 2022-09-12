'use strict';
const Sequelize     = require('sequelize');
require('dotenv').config();

let sequelize       = new Sequelize( process.env.DB_DATABASE, process.env.DB_USERNAME , process.env.DB_PASSWORD , {
    host:           process.env.DB_HOST,
    dialect:        process.env.DB_CONNECTION, 
    port:           3306,
    logging:        false
});

module.exports = sequelize;