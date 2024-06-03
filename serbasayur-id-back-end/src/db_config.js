const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'serbasayur_id',
});

db.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.info('Database terhubung');
  }
});

module.exports = db;
