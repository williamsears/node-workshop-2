var http = require('http');

var server = http.createServer(function (req, response) {
  response.writeHead(200);
  response.end("hello world!");
  
  
  
});
server.listen(process.env.PORT, process.env.IP);