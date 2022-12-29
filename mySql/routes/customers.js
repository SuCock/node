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
//단건조회
router.get("/:id", (req, res) => {
  let sql = "select * from customers where id = ?";
  const id = req.params.id;
  pool.query(sql, id, (err, results, fields) => {
    if (err) {
      console.log(err);
    }
    res.send(results[0]);
  });
});
//수정
router.put("/:id", (req, res) => {
  let sql = "update customers set ? where id = ?";
  let data = [req.body, req.params.id];
  pool.query(sql, data, (err, results, fields) => {
    if (err) {
      console.log(err);
    }
    res.send(results);
  });
});
//등록
router.post("/", (req, res) => {
  let sql = "insert into customers set ?";
  pool.query(sql, req.body, (err, results, fields) => {
    if (err) {
      console.log(err);
    }
    res.send(results);
  });
});
router.put("/:id", (req, res) => {});
//삭제
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
