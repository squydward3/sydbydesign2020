var http = require('http'),
    express = require('express'),
    server = express(),
    PORT = 3000;

server.use(express.static(__dirname + '/dist'));

server.listen(PORT, function() {
  console.log('Server listening on port ' + PORT);
});
