 var start = new Date().getTime();
  
   var http = require('http');

var server = http.createServer(function (req, response) {
  response.writeHead(200);
  var start = new Date().getTime();
  while (new Date().getTime() - start < 10000);
  response.end("hello world!");
  
  
  
});
server.listen(process.env.PORT, process.env.IP);