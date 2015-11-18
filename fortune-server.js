var http = require('http');
var fortune = require('./library/fortune').getFortune;

var server = http.createServer(function (req, response) {
  response.writeHead(200);
  response.end(fortune());
  
  
  
});
server.listen(process.env.PORT, process.env.IP);