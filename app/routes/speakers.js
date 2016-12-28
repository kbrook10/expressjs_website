var express = require('express');
var router = express.Router();

//This creates route for the speakers summary page and declares variables to retrieve JSON data, build an empty array and access the speakers data.speakers object...
router.get('/speakers', function(req, res) {
    var data = req.app.get('appData');
    var pagePhotos = [];
    var pageSpeakers = data.speakers;

//This loops through the various speakers and retrieves the artwork...
    data.speakers.forEach(function(item) {
      pagePhotos = pagePhotos.concat(item.artwork);
    });
//This creates global variables when using the speaker route to access pass variables to each view...
    res.render('speakers', {
      pageTitle: 'Speakers',
      artwork: pagePhotos,
      speakers: pageSpeakers,
      pageID: 'speakers'
    });

});

//This creates the route for all of the speakers in the array and displays their unique content...
router.get('/speakers/:speakerid', function(req, res) {
  var dataFile = req.app.get('appData');
  var speaker = dataFile.speakers[req.params.speakerid];
  res.send(`
      <link rel="stylesheet" type="text/css" href="/css/style.css">
      <h1>${speaker.title}</h1>
      <h2>with ${speaker.name}</h2>
      <img src="/images/speakers/${speaker.shortname}_tn.jpg" alt="speaker">
      <p>${speaker.summary}</p>
      <script src="/reload/reload.js"></script>
  `);
});

module.exports = router;
