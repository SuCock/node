const mysql = require("mysql"); //mysql 모듈 로드(내장되어있지 않음으로 npm install mysql 다운로드)

//mysql 접속 정보
const conn = {
  host: "localhost",
  post: "3306", //url주소 제일 뒤에있는 숫자
  user: "dev01",
  password: "1234",
  database: "dev",
  connectionLimit: 10,
};

let pool = mysql.createPool(conn); //DB 커넥션 생성
sql = "SELECT * FROM customers";
pool.query(sql, (err, results, fields) => {
  if (err) {
    console.log(err);
  }
  console.log(results);
});

//cd test(현재 폴더위치로 이동)
//node mysql_select.js(파일이름)
