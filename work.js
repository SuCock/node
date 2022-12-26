/*work.js
 */
const http = require("http");
const { markAsUntransferable } = require("worker_threads");
let todoList = [
  { content: "test1", completed: false },
  { content: "test2", completed: false },
  { content: "test3", completed: false },
  { content: "test4", completed: false },
];

const server = http.createServer((req, res) => {
  const myUrl = new URL("http://127.0.0.1:3000" + req.url);
  if (myUrl.pathname == "/todoList") {
    res.end(JSON.stringify(todoList));
  }
});
server.listen(3000, () => {
  console.log("server running http://127.0.0.1:3000");
});
