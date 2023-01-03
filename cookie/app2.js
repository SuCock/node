const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
app.use(cookieParser());

app.get("/", (req, res) => {
  //쿠키
  console.log("Cookies:", req.cookies);
  res.cookie("test", "test");
  res.send("express");
});

app.listen(3000, () => {
  console.log("server running http://localhost:3000");
});
