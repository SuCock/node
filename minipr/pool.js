const mysql = require("mysql");

const conn = {
  host: "localhost",
  post: "3306",
  user: "dev01",
  password: "1234",
  database: "dev",
  connectionLimit: 10,
};

let pool = mysql.createPool(conn);
module.exports = pool;
