function greet() {
  return new Promise((resolve, reject) => {
    //비동기식으로 값을 받아오기를 기다림
    setTimeout(() => {
      resolve("hello");
    }, 3000); //function(실행할 내용), 설정한 시간후에 실행
  });
}

greet()
  .then((res) => {
    console.log(res);
    return res.length;
  })
  .then((res) => {
    console.log(res);
  });
console.log("end");
//비동기식(async)result값을 기다릴때 값을 못받아 오고 end가 먼저 찍힌다
