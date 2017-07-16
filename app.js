var express = require('express');
var request = require('request');
var path = require('path');
var url = require('url');

var app = express();
var host = 'http://api.haibian.com';

app.use(express.static(path.join(__dirname, './src')));

app.get('/', function (req, res) {
});

app['get']('/courseList/getLatest24HourChapterList', function (req, res) {
  request({
    url: host + url.parse(req.url).pathname
  }, function (error, response, body) {
    res.send(body);
  });
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});

var testObj = {
  'locals.title': app.locals.title,
  'locals.email': app.locals.email
};
console.log(testObj);