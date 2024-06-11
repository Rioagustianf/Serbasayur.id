const mysql = require('mysql');
require('dotenv').config();

const {
  DB_HOST, DB_USER, DB_PASS, DB_NAME,
} = process.env;

const db = mysql.createConnection({
  host: DB_HOST,
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
