var http = require('http');
var fs = require('fs');

//server creation 

var server = http.createServer(function(req,res){
	console.log("request was made: " + req.url);
//creating  routing system  for the  server

if(req.url === '/home' || req.url === '/'){
	res.writeHead(200,{'Content-Type':'text/html'});
	fs.createReadStream(__dirname + '/index.html').pipe(res);
 }else if (req.url === '/contact'){
    res.writeHead(200,{'Content-Type':'text/html'});
	fs.createReadStream(__dirname + '/contact.html').pipe(res);
 }else if(req.url === '/api/ninjas'){
 	var ninjas = [{name:'rushdi',age:22},{name :'kader',age:34}];
 	res.writeHead(200,{'Content-Type':'application/json'});
 	res.end(JSON.stringify(ninjas));
 }else{
 	res.writeHead(404,{'Content-Type':'text/html'});
	fs.createReadStream(__dirname + '/404.html').pipe(res);
 }
});


//response call  
server.listen(3000,'127.0.0.1');
console.log("hi the result is shown and it is listening in port 3000");