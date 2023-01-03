var express = require("express");
const pool = require("../pool");
var router = express.Router();

router.get("/:home_no", (req, res) => {
  let sql_hm = "select * from home where no =?";
  let sql = "select * from post where home_no =?";
  pool.query(sql_hm, req.params.home_no, (err, home, fields) => {
    console.log(home);
    pool.query(sql, req.params.home_no, (err, post, fields) => {
      console.log(post);
      res.render("post", { home: home, post: post });
    });
  });
});

router.post("/", (req, res) => {
  let sql = "insert into post set ?";
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

module.exports = router;
