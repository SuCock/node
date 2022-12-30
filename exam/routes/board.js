var express = require("express");
const pool = require("../test/pool");
var router = express.Router();

sql = {
  select: "SELECT * FROM board order by title", //제목순
  insert: "insert into board set ?",
  update: "update board set? where no = ?",
  delete: "delete from board where no = ?",
};
//조회
router.get("/", (req, res) => {
  pool.query(sql.select, (err, results, fields) => {
    res.send(results);
  });
});
//등록
router.post("/", (req, res) => {
  pool.query(sql.insert, req.body, (err, results, fields) => {
    res.json(results);
  });
});
//수정
router.put("/:no", (req, res) => {
  let data = [req.body, req.params.no];
  pool.query(sql.update, data, (err, results, fields) => {
    res.json(results);
  });
});
//삭제
router.delete("/:no", (req, res) => {
  let id = req.params.no;
  pool.query(sql.delete, id, (err, results, fields) => {
    res.json(results);
  });
});
module.exports = router;
