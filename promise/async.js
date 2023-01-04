function greet() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("hello");
    }, 3000);
  });
}

async function callgreet() {
  var result = await greet(); //async안에서만 await를 쓸 수 있다
  console.log(result);
  console.log(result.length);
}

callgreet(); //non-블록킹
console.log("end");
