console.log("test")

var http = require("http");
var fs = require("fs");

var server = http.createServer()
    server.on('request', (request, response) => {
        fs.readFile("indefx.html", (err, data) => {
            if (err){
                response.writeHead(404)
                response.end("fichier introuvable")
            }
        response.writeHead(200, {
            "Content-Type": "text/html; charset=UTF-8"
        });
        response.end(data);
    })
});

server.listen(3000);
