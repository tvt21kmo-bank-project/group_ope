const mysql = require('mysql');

const connection = mysql.createPool(process.env.MYSQL);
module.exports = connection;