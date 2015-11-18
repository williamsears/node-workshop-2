 var http = require('http');

var server = http.createServer(function (req, response) {
  response.writeHead(200);
  setTimeout(function(){response.end("hello world!"); }, 10000);
  
  
  
});
server.listen(process.env.PORT, process.env.IP);