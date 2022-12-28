var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.post("/login", (req, res) => {
  req.session.email = req.body.email;
  /* req.session.is_logined = true;
  req.session.save((err) => {
    if (err) throw err;
    res.redirect("/");
  }); */
});
router.get("/logout", (req, res, next) => {
  //localhost/users/logout
  req.session.destroy();
  res.redirect("/login.html");
});
//유효시간이 있어서 세션이 끊어진다expires: null
module.exports = router;
