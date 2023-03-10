var express = require("express");
const pool = require("../pool");
var router = express.Router();

router.get("/:home_no", (req, res) => {
  let sql_hm =
    "select no, title,date_format(wrdate, '%Y-%m-%d')wrdate,nickname,category,content, media from home where no =?";
  let sql = "select * from post where home_no =?";
  pool.query(sql_hm, req.params.home_no, (err, home, fields) => {
    console.log(home);
    pool.query(sql, req.params.home_no, (err, post, fields) => {
      console.log(post);
      res.render("post", {
        home: home,
        post: post,
        islogin: req.session.islogin,
        id: req.session.userid,
      });
    });
  });
});

router.post("/", (req, res) => {
  let sql = "insert into post set ?";
  req.body.nickname = req.session.userid;
  pool.query(sql, req.body, (err, post, fields) => {
    console.log(err);
    console.log(post);
    res.send(post);
  });
});
router.get("/", (req, res) => {
  sql = "SELECT * FROM post";
  pool.query(sql, (err, post, fields) => {
    if (err) {
      console.log(err);
    }
    res.render("post.ejs", { post: post });
  });
});
//단건조회
router.get("/one/:no", (req, res) => {
  let sql = "SELECT * from post where no = ?";
  const no = req.params.no;
  pool.query(sql, no, (err, post, fields) => {
    res.send(post[0]);
  });
});

//삭제
router.delete("/one/:no", (req, res) => {
  let sql = "delete from post where no = ?";
  let id = req.params.no;
  pool.query(sql, id, (err, post, fields) => {
    res.json(post);
  });
});
//수정
router.put("/one/:no", (req, res) => {
  let sql = "update post set? where no = ?";
  const data = [req.body, req.params.no];
  pool.query(sql, data, (err, post, fields) => {
    res.send(post);
  });
});
//로그아웃
router.post("/", (req, res, next) => {
  req.session.destroy();
  res.redirect("/login");
});

module.exports = router;
