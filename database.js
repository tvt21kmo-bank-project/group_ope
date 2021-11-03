const mysql = require('mysql');

const connection = mysql.createConnection(process.env.MYSQL);
module.exports = connection;