var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello from a nodes funktion\n');
}).listen(8080);
console.log('Server running at http://localhost:9090/');
