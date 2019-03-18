

var http = require('http');

var server = http.createServer(function(req, res){  
    res.writeHead(200, {'Content-Type':'text/plain'});  
    console.log('request was made: ' + req.url);
    res.end('Hey ninjas');
}).listen(3000, '127.0.0.1');

console.log('yo dawgs, no listening to port 3000');