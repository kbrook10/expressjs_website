var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var fs = require('fs');
var feedbackData = require('../data/feedback.json');

//This retrieves data in JSON format when accessing the route 'api'...
router.get('/api', function(req, res) {
  res.json(feedbackData);
});


//This allows us to leverage body-parser to handle the post data from the feedback form submit...
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));

//This pushes data to the JSON file when submiting a new feedback form...
router.post('/api', function(req, res) {
  feedbackData.unshift(req.body);
  fs.writeFile('app/data/feedback.json', JSON.stringify(feedbackData), 'utf8',
  function(err) {
    if(err) {
      console.log(err);
    }
  });
  res.json(feedbackData);
});

router.delete('/api/:id', function(req, res) {
  feedbackData.slice(req.params.id, 1);
  fs.writeFile('app/data/feedback.json', JSON.stringify(feedbackData), 'utf8',
  function(err) {
    if(err) {
      console.log(err);
    }

  });
  res.json(feedbackData);
});

module.exports = router;
