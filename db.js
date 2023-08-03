const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Luccaporto@123',
  database: 'banco'
});

module.exports = connection;
