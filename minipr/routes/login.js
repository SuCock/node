var express = require("express");
const pool = require("../pool");
var router = express.Router();
//페이지 이동
router.get("/", (req, res) => {
  res.render("login");
});

router.post("/", (req, res) => {
  const id = req.body.id;
  const pw = req.body.pw;
  sql = "select * from login where id=?";
  pool.query(sql, id, (err, results, fields) => {
    if (results) {
      if (results[0].pw == pw) {
        console.log("로그인 완료", results);
        req.session.islogin = true;
        req.session.userid = id;
        res.send({ results: true });
      }
    } else {
      console.log("로그인 실패");
      res.send({ results: false });
    }
  });
});

module.exports = router;
