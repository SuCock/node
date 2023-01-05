var express = require("express");
const pool = require("../pool");
var router = express.Router();

//영화조회
router.get("/", (req, res) => {
  sql =
    "select no, title,date_format(wrdate, '%Y-%m-%d')wrdate,nickname,category,content, media from home";
  pool.query(sql, (err, home, fields) => {
    if (err) {
      console.log(err);
    }
    res.render("home.ejs", {
      home: home,
      islogin: req.session.islogin,
      id: req.session.userid,
    });
  });
});
router.post("/search", (req, res) => {
  let find = req.body.search_input;
  console.log(find);
  sql = "SELECT * FROM home where title like  CONCAT('%',?,'%')";
  pool.query(sql, find, (err, home, fields) => {
    if (err) {
      console.log(err);
    }
    if (home) {
      res.render("home", {
        home: home,
        islogin: req.session.islogin,
        id: req.session.userid,
      }); //보낼페이지, 보낼데이터
    } else {
      res.send("검색한 제목이 없습니다.");
    }
  });
});
//로그아웃
router.post("/", (req, res, next) => {
  req.session.destroy();
  res.redirect("/login");
});

module.exports = router;
