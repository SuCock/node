const mysql = require("mysql"); //mysql 모듈 로드(내장되어있지 않음으로 npm install mysql 다운로드)

//mysql 접속 정보
const conn = {
  host: "localhost",
  post: "3306", //url주소 제일 뒤에있는 숫자
  user: "dev01",
  password: "1234",
  database: "dev",
};

let connection = mysql.createConnection(conn); //DB 커넥션 생성
connection.connect(); //DB 접속

let sql = "update customers set ? where id = ?";
let data = [{ email: "park@gmail.com", name: "Park" }, 4];
//let sql = "update customers set email = ?, name = ? where id = ?";
//let data = ["park@gmail.com", "Park", 23];
connection.query(sql, data, (err, results, fields) => {
  if (err) {
    console.log(err);
  }
  console.log(results);
});

connection.end(); //DB 접속 종료

//cd test(현재 폴더위치로 이동)
//node mysql_select.js(파일이름)(오류검사)
//affectedRows: 1(데이터가 하나 달라졌다)
//changedRows: 1(데이터 하나가 변경됐다)
