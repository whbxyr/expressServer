var express = require('express');
var request = require('request');
var path = require('path');
var host = 'http://api.haibian.com';
var app = express();

app.use(express.static(path.join(__dirname, './src')));
app.get('/', function (req, res) {
});

app.get('/courseList/getLatest24HourChapterList', function (req, res) {
  request({
    url: host + '/courseList/getLatest24HourChapterList'
  }, function (error, response, body) {
    res.send(body);
  });
});
var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
