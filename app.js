var http = require('http');
var fs = require('fs');

//server creation 

var server = http.createServer(function(req,res){
	console.log("request was made: " + req.url);
//creating  routing system  for the  server

if(req.url === '/home' || req.url === '/'){
	res.writeHead(200,{'Content-Type':'text/html'});
	fs.createReadStream(__dirname + '/index.html').pipe(res);
 }
});


//response call  
server.listen(3000,'127.0.0.1');
console.log("hi the result is shown and it is listening in port 3000");