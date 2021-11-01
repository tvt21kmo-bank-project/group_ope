const mysql = require('mysql');
const myConnectionString = "mysql://netuser:netpass@localhost:3306/netdb";
const connection = mysql.createConnection(myConnectionString);
module.exports = connection;