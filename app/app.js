//<-------Example: How to create server with Express.js ----------->
//<---------------------------------------------------------------->
var express = require('express');
var app = express();
//This path needs to be relative to the current file...
var dataFile = require('./data/data.json');

app.set('port', process.env.PORT || 3000);

app.get('/', function(req, res) {
  var info = '';
  dataFile.speakers.forEach(function(item){
    info += `
      <li>
        <h2>${item.name}</h2>
        <p>${item.summary}</h2>
      </li>
    `;
  });
  res.send(`
    <h1>Roux Academy Meetups</h1>
    ${info}
    `
  );
});

var server = app.listen(app.get('port'), function() {
  console.log('Listening on port ' + app.get('port'));
});

//<-------Example: How to create server with Node.js -------------->
//<---------------------------------------------------------------->
// var http = require('http');
//
// var myServer = http.createServer(function(request, response) {
//   response.writeHead(200, {"Content-Type" : "text/html"});
//   response.write('<h1>Roux Meetups</h1>');
//   response.end();
// });
//
// myServer.listen(3000);
// console.log('Go to http://localhost:3000 on your browser');
