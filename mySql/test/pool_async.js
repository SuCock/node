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

function query(sql, data = null) {
  return new Promise((resolve, reject) => {
    pool.query(sql, data, (err, results, fields) => {
      resolve(results);
    });
  });
}
module.exports = { pool: pool, query }; //필드명 : 변수명(일치하면 변수명만 적어도 된다)
