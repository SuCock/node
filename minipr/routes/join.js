var express = require("express");
const pool = require("../pool");
var router = express.Router();

router.get("/", (req, res, next) => {
  res.render("join.ejs"); //fetch 없어도 됨
});

router.post("/", (req, res) => {
  let sql = "insert into login set ?";
  pool.query(sql, req.body, (err, results, fields) => {
    if (err) {
      res.send(err);
    } else {
      res.send(results);
    }
  });
});
module.exports = router;
