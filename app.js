var express = require('express');
var request = require('request');
var path = require('path');
var url = require('url');
var bodyParser = require('body-parser');
var router = express.Router();

var app = express();
var host = 'http://api.haibian.com';

app.use(express.static(path.join(__dirname, './static')));
app.use(bodyParser.urlencoded({
  extended: true
}));
app.set('views', './views');
app.set('view engine', 'jade');

// app.all('*', function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
//   res.header("Access-Control-Allow-Headers", "X-Requested-With");
//   res.header('Access-Control-Allow-Headers', 'Content-Type');
//   next();
// });

function reqPromise(url, ) {
  return new Promise()
}

app.get('/', function (req, res) {
  request({
    url: host + url.parse(req.url).pathname
  }, function (error, response, body) {
    res.send(body);
  });
});

app.get('/courseList/getLatest24HourChapterList', function (req, res) {
  // console.log(req);
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
