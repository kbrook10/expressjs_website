//<-------Example: How to create server with Express.js ----------->
//<---------------------------------------------------------------->
var express = require('express');
var reload = require('reload');
var app = express();

var dataFile = require('./data/data.json');

app.set('port', process.env.PORT || 3000 );
app.set('appData', dataFile);
app.set('view engine', 'ejs');
app.set('views', 'app/views');

app.locals.siteTitle = 'Roux Meetups';

app.use(express.static('app/public'));
app.use(require('./routes/index'));
app.use(require('./routes/speakers'));

var server = app.listen(app.get('port'), function() {
  console.log('Listening on port ' + app.get('port'));
});

reload(server, app);

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

app.get('/', function(request, response){
    response.send('<h1>First Website with Express</h1>');
});

var server = app.listen(3000, function(){
    console.log('Listening in on port 3000');
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

// var http = require('http');
//
// //This creates the server that will return a 200 code for successful response while rendering text to the page via the response.write method...The response.end lets the server know that is all to send...
// var myServer = http.createServer(function(request, response) {
//     response.writeHead('200', {'Content-Type' : 'text/html'});
//     response.write('<h1>False Prophets Website, Keith Brooks...</h1>');
//     response.end();
// });
//
//
// //This provides the server the port to listen in on to render the response.
// myServer.listen(3000);
//
// //This allows use to know what is going on once the node command targeting the file is committed...
// console.log('Go to http://localhost:3000 on your browser');
