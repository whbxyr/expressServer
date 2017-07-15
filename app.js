var express = require('express');
// var http = require('http');
var request = require('request');
var path = require('path');
var app = express();

app.use(express.static(path.join(__dirname, './src')));
app.get('/', function (req, res) {
  // var options = {
  //   hostname: 'http://api.haibian.com',
  //   port: 80,
  //   path: '/courseList/getLatest24HourChapterList',
  //   method: 'get'
  // };
  // var request = http.request(options, function (response) {
  //   console.log('STATUS: ' + response.statusCode);
  //   console.log('HEADERS: ' + JSON.stringify(response.headers));
  //   response.setEncoding('utf8');
  //   response.on('data', function (chunk) {
  //     // console.log('BODY: ' + chunk);
  //     res.send(chunk);
  //   });
  // });
});

app.get('/getLatest24HourChapterList', function (req, res) {
  request({
    url: 'http://api.haibian.com/courseList/getLatest24HourChapterList'
  }, )
  // var options = {
  //   host: 'api.haibian.com',
  //   port: 80,
  //   path: '/courseList/getLatest24HourChapterList',
  //   method: 'get'
  // };
  // var request = http.request(options, function (response) {
  //   response.setEncoding('utf8');
  //   response.on('data', function (chunk) {
  //     console.log('BODY: ' + chunk);
  //     res.send(chunk);
  //   });
  // });
  // var obj = {
  //   name: 'ray',
  //   age: 200
  // };
  // res.send(obj);
});
var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
