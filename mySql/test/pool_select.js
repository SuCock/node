const pool = require("./pool");

sql = "SELECT * FROM customers";
pool.query(sql, (err, results, fields) => {
  if (err) {
    console.log(err);
  }
  console.log(results);
});
