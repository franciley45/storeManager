const mysql = require('mysql2/promise');

require('dotenv').config();

const connection = mysql.createPool({
  host: process.env.MYSQLHOST,
  user: process.env.MYSQLUSER,
  password: process.env.MYSQLPASSWORD,
  database: process.env.MYSQLDATABASE,
  connectionLimit: 15,
  queueLimit: 30,
});

module.exports = connection;