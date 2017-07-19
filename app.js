var express = require('express');
var request = require('request');
var path = require('path');
var url = require('url');
var bodyParser = require('body-parser');
var fs = require('fs');
var router = express.Router();

var app = express();
var host = 'http://api.haibian.com';

app.use(express.static(path.join(__dirname, './src')));
app.use(bodyParser.urlencoded({
  extended: true
}));

// app.all('*', function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
//   res.header("Access-Control-Allow-Headers", "X-Requested-With");
//   res.header('Access-Control-Allow-Headers', 'Content-Type');
//   next();
// });

app.get('/', function (req, res) {
  // console.log(req);
  // res.send('Hello World');
});

app.get('/courseList/getLatest24HourChapterList', function (req, res) {
  // console.log(req);
  request({
    url: host + url.parse(req.url).pathname
  }, function (error, response, body) {
    res.send(body);
  });
});

fs.readdirSync(__dirname + '/routes').forEach(function (name) {
  console.log(name);
});

router.get('/*/test', function (req, res, next) {
  var obj = {
    name: 'test',
    age: 21
  };
  res.send(obj);
});

app.use('/name', router);

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});

// var testObj = {
//   'locals.title': app.locals.title,
//   'locals.email': app.locals.email
// };
// console.log(testObj);