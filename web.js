var express = require('express');
//var morgan = require('morgan');

//var app = express.createServer();
var app = express();

//app.use(morgan('dev'));

app.get('/', function(request, response) {
  response.send("Hello World2222!");
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
}); 
