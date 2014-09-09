var http = require("http");
var express = require("express");
var morgan = require("morgan")

//var app = express.createServer(express.logger());
var app = express();
app.use(morgan('dev'));

app.use(function(request, response, next) {
 response.send("Hello World2222!");
});

//var port = process.env.PORT || 5000;
//app.listen(port, function() {
//  console.log("Listening on " + port);

http.createServer(app).listen(5000, function() {
  console.log("Server Running at ...");
}); 
