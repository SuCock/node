const mysql = require("./pool_async");

sql1 = "SELECT * FROM customers";
sql2 = "SELECT * FROM board";
//mysql.query(sql1).then((results) => console.log(results));
async function get() {
  let results1 = await mysql.query(sql1);
  let results2 = await mysql.query(sql2, results1[0].id);
  console.log({ cust: results1, board: results2 });
}

get();
console.log("end");
