var express = require('express');
var router = express.Router();

var charset = require('../../config/charset');

var configfile = require("../../config.js")

var config = {
    api:configfile.api[configfile.using],
    aliyun:configfile.aliyun[configfile.using],
    pptDbUrl:configfile.pptDbUrl[configfile.using]
} 

console.log(config)

router.get('/', function(req, res, next) {
    res.render('index', { 
        lan: charset.zh,
        timeStamp:new Date().getTime(),
        data: config,
        position:'index'
    });
});

router.get('/en/*', function(req, res, next) {
    req.body.lan = charset.en;
    next();
});

router.get('/zh/*', function(req, res, next) {  
    req.body.lan = charset.zh;
    next();
});

router.get('/*/teacher',function(req,res,next){  
	var pageConfig = {
        lan :  req.body.lan,
        clientType :  "TCH" ,
        timeStamp : new Date().getTime(),
        data : config,
        position:'login'
    };
    
    res.render('./v1_3/login.html',pageConfig);
})

router.get('/*/student',function(req,res,next){ 
    var pageConfig = {
        lan : req.body.lan,
        clientType : "STU",
        timeStamp : new Date().getTime(),
        data : config,
        position:'login'
    };
    res.render('./v1_3/login.html',pageConfig);
})

router.get('/*/student/schedule',function(req,res,next){  
    var pageConfig = {
        lan :  req.body.lan,
        clientType :  "STU" ,
        timeStamp : new Date().getTime(),
        data : config,
        position:'stu_schedule'
    };
    res.render('./v1_3/stu_schedule.html',pageConfig);
})

router.get('/*/teacher/schedule',function(req,res,next){  
    var pageConfig = {
        lan :  req.body.lan,
        clientType :  "TCH" ,
        timeStamp : new Date().getTime(),
        data : config,
        position:'tch_schedule'
    };
    
    res.render('./v1_3/tch_schedule.html',pageConfig);
})

module.exports = router;
