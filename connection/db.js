const mysql = require("mysql2/promise");
require("dotenv").config();

// Create a connection to the database
const mysqlPool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_ROOT,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

module.exports = mysqlPool;
