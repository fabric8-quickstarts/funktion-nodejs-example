var http = require('http');
var url = require('url');
http.createServer(function (req, res) {
  var query = url.parse(req.url, true).query;
  var name = query.name;
  var message = 'Please pass ?name=foo to specify your name!\n';
  if (name) {
    message = 'Hello ' + name + ' from a nodejs funktion!\n';
  }
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end(message + 'I am running on host ' + process.env.HOSTNAME);
}).listen(8080);
console.log('Server running at http://localhost:9090/');
