var http = require('http');

//This creates the server that will return a 200 code for successful response while rendering text to the page via the response.write method...The response.end lets the server know that is all to send...
var myServer = http.createServer(function(request, response) {
    response.writeHead('200', {'Content-Type' : 'text/html'});
    response.write('<h1>False Prophets Website, Keith Brooks...</h1>');
    response.end();
});


//This provides the server the port to listen in on to render the response.
myServer.listen(3000);

//This allows use to know what is going on once the node command targeting the file is committed...
console.log('Go to http://localhost:3000 on your browser');
