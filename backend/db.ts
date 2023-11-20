import mysql from 'mysql';

const db = mysql.createPool({
  connectionLimit: 10,
  host: 'mysql',
  user: 'root',
  password: 'root',
  database: 'myapp',
});

export default db;
