var http = require('http')
var fs = require('fs')
var server = http.createServer(function (request, response){
  if(request.url === "/cars"){
    fs.readFile('views/cars.html', 'utf8', function (errors, contents){
        response.writeHead(200, {'Content-Type': 'text/html'});
        response.write(contents);
        response.end();
    });
  }else if(request.url === '/cats') {
    fs.readFile('views/cats.html', 'utf8', function (errors, contents){
        response.writeHead(200, {'Content-Type': 'text/html'});
        response.write(contents);
        response.end();
    });
  }else if (request.url === "/cars/new") {
    fs.readFile('views/new.html', 'utf8', function (errors, contents){
        response.writeHead(200, {'Content-Type': 'text/html'});
        response.write(contents);
        response.end();
    });
  }else if (request.url === "/black") {
    fs.readFile('images/cars/black.jpg', function (errors, contents){
        response.writeHead(200, {'Content-Type': 'image/jpg'});
        response.write(contents);
        response.end();
    });
  }else if (request.url === "/green") {
    fs.readFile('images/cars/green.jpg', function (errors, contents){
        response.writeHead(200, {'Content-Type': 'image/jpg'});
        response.write(contents);
        response.end();
    });
  }else if (request.url === "/red") {
    fs.readFile('images/cars/red.jpg', function (errors, contents){
        response.writeHead(200, {'Content-Type': 'image/jpg'});
        response.write(contents);
        response.end();
    });
  }else if (request.url === "/white") {
    fs.readFile('images/cars/white.jpg', function (errors, contents){
        response.writeHead(200, {'Content-Type': 'image/jpg'});
        response.write(contents);
        response.end();
    });
  }else if (request.url === "/buisness") {
    fs.readFile('images/cats/buisness.jpg', function (errors, contents){
        response.writeHead(200, {'Content-Type': 'image/jpg'});
        response.write(contents);
        response.end();
    });
  }else if (request.url === "/meow") {
    fs.readFile('images/cats/meow.jpg', function (errors, contents){
        response.writeHead(200, {'Content-Type': 'image/jpg'});
        response.write(contents);
        response.end();
    });
  }else if (request.url === "/rainbow") {
    fs.readFile('images/cats/rainbow.jpg', function (errors, contents){
        response.writeHead(200, {'Content-Type': 'image/jpg'});
        response.write(contents);
        response.end();
    });
  }else if (request.url === "/split") {
    fs.readFile('images/cats/split.png', function (errors, contents){
        response.writeHead(200, {'Content-Type': 'image/png'});
        response.write(contents);
        response.end();
    });
  }else{
    response.writeHead(404);
    response.end('File not found!!!');
  };
});
server.listen(7077);
console.log("Server running at port 7077")
