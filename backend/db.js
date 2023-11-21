const mysql = require('mysql');

const pool = mysql.createPool({
  connectionLimit: 10,
  host: '172.23.0.3',
  user: 'root',
  password: 'root',
  database: 'myapp',
});

exports.pool = pool