var express = require("express");
const pool = require("../test/pool");
var router = express.Router();

//전체조회
router.get("/", (req, res) => {
  sql = "SELECT * FROM customers";
  pool.query(sql, (err, results, fields) => {
    if (err) {
      console.log(err);
    }
    res.json(results);
  });
});
router.get("/:id", (req, res) => {});
//등록
router.post("/", (req, res) => {
  /* req.body.sql; */
  let sql = "insert into customers set ?";
  pool.query(sql, req.body, (err, results, fields) => {
    if (err) {
      console.log(err);
    }
    res.send(results);
  });
});
router.put("/:id", (req, res) => {});
router.delete("/:id", (req, res) => {
  const id = req.params.id;
  let sql = "delete from customers where id = ?";
  //fields = DB의 테이블 정보
  pool.query(sql, id, (err, results, fields) => {
    if (err) {
      console.log(err);
    }
    console.log(results);
    res.statusCode = 200;
    res.end();
  });
});

module.exports = router;
