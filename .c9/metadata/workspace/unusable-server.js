{"filter":false,"title":"unusable-server.js","tooltip":"/unusable-server.js","undoManager":{"mark":27,"position":27,"stack":[[{"start":{"row":0,"column":0},"end":{"row":1,"column":47},"action":"insert","lines":["  var start = new Date().getTime();","  while (new Date().getTime() - start < 10000);"],"id":1}],[{"start":{"row":1,"column":47},"end":{"row":2,"column":0},"action":"insert","lines":["",""],"id":2},{"start":{"row":2,"column":0},"end":{"row":2,"column":2},"action":"insert","lines":["  "]}],[{"start":{"row":2,"column":2},"end":{"row":3,"column":0},"action":"insert","lines":["",""],"id":5},{"start":{"row":3,"column":0},"end":{"row":3,"column":2},"action":"insert","lines":["  "]}],[{"start":{"row":3,"column":2},"end":{"row":12,"column":48},"action":"insert","lines":[" var http = require('http');","","var server = http.createServer(function (req, response) {","  response.writeHead(200);","  setTimeout(function(){response.end(\"hello world!\"); }, 10000);","  ","  ","  ","});","server.listen(process.env.PORT, process.env.IP);"],"id":6}],[{"start":{"row":0,"column":1},"end":{"row":0,"column":2},"action":"remove","lines":[" "],"id":7}],[{"start":{"row":1,"column":0},"end":{"row":1,"column":47},"action":"remove","lines":["  while (new Date().getTime() - start < 10000);"],"id":8}],[{"start":{"row":0,"column":34},"end":{"row":1,"column":0},"action":"remove","lines":["",""],"id":9}],[{"start":{"row":5,"column":26},"end":{"row":6,"column":0},"action":"insert","lines":["",""],"id":10},{"start":{"row":6,"column":0},"end":{"row":6,"column":2},"action":"insert","lines":["  "]}],[{"start":{"row":6,"column":2},"end":{"row":6,"column":47},"action":"insert","lines":["while (new Date().getTime() - start < 10000);"],"id":11}],[{"start":{"row":5,"column":26},"end":{"row":6,"column":0},"action":"insert","lines":["",""],"id":12},{"start":{"row":6,"column":0},"end":{"row":6,"column":2},"action":"insert","lines":["  "]}],[{"start":{"row":6,"column":2},"end":{"row":6,"column":36},"action":"insert","lines":[" var start = new Date().getTime();"],"id":13}],[{"start":{"row":6,"column":2},"end":{"row":6,"column":3},"action":"remove","lines":[" "],"id":14}],[{"start":{"row":8,"column":0},"end":{"row":8,"column":24},"action":"remove","lines":["  setTimeout(function(){"],"id":15}],[{"start":{"row":8,"column":0},"end":{"row":8,"column":1},"action":"insert","lines":[" "],"id":16}],[{"start":{"row":8,"column":1},"end":{"row":8,"column":2},"action":"insert","lines":[" "],"id":17}],[{"start":{"row":8,"column":41},"end":{"row":8,"column":42},"action":"remove","lines":[";"],"id":18}],[{"start":{"row":8,"column":40},"end":{"row":8,"column":41},"action":"remove","lines":[")"],"id":19}],[{"start":{"row":8,"column":39},"end":{"row":8,"column":40},"action":"remove","lines":["0"],"id":20}],[{"start":{"row":8,"column":38},"end":{"row":8,"column":39},"action":"remove","lines":["0"],"id":21}],[{"start":{"row":8,"column":37},"end":{"row":8,"column":38},"action":"remove","lines":["0"],"id":22}],[{"start":{"row":8,"column":36},"end":{"row":8,"column":37},"action":"remove","lines":["0"],"id":23}],[{"start":{"row":8,"column":35},"end":{"row":8,"column":36},"action":"remove","lines":["1"],"id":24}],[{"start":{"row":8,"column":34},"end":{"row":8,"column":35},"action":"remove","lines":[" "],"id":25}],[{"start":{"row":8,"column":33},"end":{"row":8,"column":34},"action":"remove","lines":[","],"id":26}],[{"start":{"row":8,"column":32},"end":{"row":8,"column":33},"action":"remove","lines":["}"],"id":27}],[{"start":{"row":8,"column":31},"end":{"row":8,"column":32},"action":"remove","lines":[" "],"id":28}],[{"start":{"row":8,"column":30},"end":{"row":8,"column":31},"action":"remove","lines":[";"],"id":29}],[{"start":{"row":8,"column":30},"end":{"row":8,"column":31},"action":"insert","lines":[";"],"id":30}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":0,"column":0},"end":{"row":13,"column":48},"isBackwards":true},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1447882181039,"hash":"0a894a5c1ce78d6f72028049ae0c13c45c9ac39c"}