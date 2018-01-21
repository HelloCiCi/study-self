/**
 * Created by GYX on 18/1/19.
 */
var http = require('http');
http.createServer(function(req,res){
    res.writeHead(200,{
        'Content-Type':'text/html'
    });
    res.write('<h1>nodejs</h1>');
    res.end('<p>hello world</p>');
}).listen(3000);
console.log("HTTP server is listening at port 3000.");


//一定要以end结尾