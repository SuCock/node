const http = require("http");
const cookie = require("cookie");
http
  .createServer((req, res) => {
    let cookies;
    if (req.headers.cookie) {
      cookies = cookie.parse(req.headers.cookie);
      console.log(cookies.username);
    }

    console.log(cookies);
    res.writeHead(200, {
      "Set-Cookie": [
        "yummy_cookie= choco",
        `username=hong;Max-Age=${5 * 60};HttpOnly;Path=/user`, //HttpOnly는 자바스크립트(console)에서는 볼수없다     Path는 지정된 경로로 가야지 쿠키에 접근가능
      ], //쿠키이름=쿠키값
    });
    res.end("hello");
  })
  .listen(3000, () => {
    //선언문 없이 메서드 체인
    console.log("server running http://localhost:3000");
  });
