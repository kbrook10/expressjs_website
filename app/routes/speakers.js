var express = require('express');
var router = express.Router();

//This creates route for the speakers summary page and declares variables to retrieve JSON data, build an empty array and access the speakers data.speakers object...
router.get('/speakers', function(req, res) {
    var data = req.app.get('appData');
    var pagePhotos = [];
    var pageSpeakers = data.speakers;

  data.speakers.forEach(function(item) {
    pagePhotos = pagePhotos.concat(item.artwork);
  });

  res.render('speakers', {
    pageTitle: 'Speakers',
    artwork: pagePhotos,
    speakers: pageSpeakers,
    pageID: 'speakerList'
  });

});

//This creates the route for all of the speakers in the array and displays their unique content...
router.get('/speakers/:speakerid', function(req, res) {
  var data = req.app.get('appData');
  var pagePhotos = [];
  var pageSpeakers = [];

  data.speakers.forEach(function(item) {
    if (item.shortname == req.params.speakerid) {
      pageSpeakers.push(item);
      pagePhotos = pagePhotos.concat(item.artwork);
    }
  });

  res.render('speakers', {
    pageTitle: 'Speaker Info',
    artwork: pagePhotos,
    speakers: pageSpeakers,
    pageID: 'speakerDetail'
  });
});

module.exports = router;
