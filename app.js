var express = require('express');
var request = require('request');
var path = require('path');
var url = require('url');
var bodyParser = require('body-parser');
var router = express.Router();

var app = express();
var host = 'http://api.haibian.com';

app.use(express.static(path.join(__dirname, './assets')));
app.use(bodyParser.urlencoded({
  extended: true
}));
app.engine('html', require('ejs').renderFile);
app.set('views', './views');
app.set('view engine', 'html');

app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

// function reqPromise(url, type, params) {
//   return new Promise(function (resolve, reject) {
//     request.
//   });
// }

app.get('/', function (req, res) {
  request({
    // url: host + url.parse(req.url).pathname
    url: host + '/courseList/getLatest24HourChapterList',
  }, function (error, response, body) {
    body = JSON.parse(body);
    var data = [];
    if (body && body.message === 'success') {
      data = body.data;
    }
    res.render('index', {
      data: data
    });
  });
  
  // request
  //   .get(host + '/courseList/getLatest24HourChapterList')
  //   .on('response', function (response) {
  //     response.on('data', function (data) {
  //       res.render('index', {
  //         message: JSON.stringify(data)
  //       });
  //     });
  //   });
    // .on('data', function (data) {
    //   res.render('index', {
    //     message: JSON.stringify(data)
    //   });
    // });
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
