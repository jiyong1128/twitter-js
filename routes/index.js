
const express = require('express');
const router = express.Router();
// could use one line instead: const router = require('express').Router();
const tweetBank = require('../tweetBank');

router.get('/', function (req, res) {
  let tweets = tweetBank.list();
  res.render( 'index', { tweets: tweets } );
});

router.get('/users/:name', function (req, res) {
  console.log(req.params.name);
  let tweets = tweetBank.find(function(obj){return obj.name === req.params.name;});
  console.log(tweets.tweets);
  res.render( 'index', { tweets: tweets } );
});

router.get('/stylesheets/style.css', function(req, res, next) {
  res.sendFile('/stylesheets/style.css', {root: __dirname + '/../public/' });
});

module.exports = router;
