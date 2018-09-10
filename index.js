var basePath = __dirname;
var http = require('http');
var fs = require('fs');
var path = require('path');
http.createServer(function (req, res) {
  var stream = fs.createReadStream(path.join(basePath, req.url));
  stream.on('error', function () {
    res.writeHead(404);
    res.end();
  });
  stream.pipe(res);
}).listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');