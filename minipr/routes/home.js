var express = require("express");
const pool = require("../pool");
var router = express.Router();

//전체조회
router.get("/", (req, res) => {
  sql = "SELECT * FROM home";
  pool.query(sql, (err, home, fields) => {
    if (err) {
      console.log(err);
    }
    res.render("home.ejs", { home: home });
  });
});
router.post("/search/:no", (req, res) => {
  let find = req.body.search_input;
  console.log(find);
  sql = "SELECT * FROM home where title like  CONCAT('%',?,'%')";
  pool.query(sql, find, (err, home, fields) => {
    if (err) {
      console.log(err);
    }
    if (home) {
      res.render("home", { home: home });
    } else {
      res.send("검색한 제목이 없습니다.");
    }
  });
});

module.exports = router;
