;; This buffer is for notes you don't want to save, and for Lisp evaluation.
;; If you want to create a file, visit that file with C-x C-f,
;; then enter the text in that file's own buffer.

var express = require('express');

var app = express.createServer(express.logger());

app.get('/a', function(request, response) {
  response.send("Hello World2222!);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
}); 
