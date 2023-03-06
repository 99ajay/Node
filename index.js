// const http=require('http');

// //console.log(http);
// const x=http.createServer();

// console.log(x);
const http = require('http');

const requestListener = function (req, res) {
  res.writeHead(200);
  res.end('Hello, World!');
}

const server = http.createServer((req,res)=>{
    res.writeHead(200);
    res.end('Hello, World!');
});
server.listen(8080);