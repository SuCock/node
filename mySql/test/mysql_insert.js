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

let sql = "insert into customers set ?";
let data = {
  name: "Kim",
  email: "Kim@mail.com",
  phone: "010-3333-3333",
  address: "",
};
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
