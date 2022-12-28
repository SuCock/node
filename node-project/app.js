import express from "express";
import boardRouter from "./routes/board.js";
import boardCustmer from "./routes/custmer.js";
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
//public이라는 경로를 알려주는?
//정적
app.use(express.static("public"));
//동적
app.get("/login", (req, res) => {
  console.log(req.query.email);
  console.log(req.query.pw);
  res.send("로그인 완료");
});

app.use("/board", boardRouter);
app.use("/custmer", boardCustmer);
app.use((err, req, res, next) => {
  res.status(500).json({ code: res.statusCode, msg: err.message });
});
app.get(
  "/example",
  (req, res, next) => {
    throw new Error("에러발생");
    console.log("첫번째 콜백");
    next();
  },
  (req, res) => {
    res.send("두번째 콜백");
  }
);

app.get("/", (req, res) => {
  res.send("hello world!");
});

app.get("/ab*cd", (req, res) => {
  res.send("정규표현식");
});

app.listen(port, () => {
  console.log(`server runing http://localhost:${port}`);
});
