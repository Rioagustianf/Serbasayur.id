const mysql = require('mysql2');
require('dotenv').config();

const {
  DB_HOST, DB_PORT, DB_USER, DB_PASS, DB_NAME,
} = process.env;

const db = mysql.createConnection({
  host: DB_HOST,
  port: (DB_PORT || 3306),
  user: DB_USER,
  password: DB_PASS,
  database: DB_NAME,
});

db.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.info('Database terhubung');
  }
});

module.exports = db;
