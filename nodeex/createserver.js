var http = require('http')

http.createServer(function(req,res){

    res.writeHead(300, {'Content-Type':'text/html'})
    res.end("welcome back solo!!!")

}).listen(6468)