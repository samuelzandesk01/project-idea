var http = require('http');

http.createServer(function (req, res) {
    res.writeHand(200, {'Content-Type': 'text/html'});
    res.end('Hello World');
}).listen(8080);
