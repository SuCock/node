var express = require("express");
const pool = require("../pool");
var router = express.Router();

router.post("/", (req, res) => {
  let sql = "insert into  set ?";
});

module.exports = router;
