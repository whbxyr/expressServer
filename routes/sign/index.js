var express = require('express');
var router = express.Router();

var charset = require('../../config/charset');

var configfile = require("../../config.js")

var config = {
    api:configfile.api[configfile.using],
    aliyun:configfile.aliyun[configfile.using],
    pptDbUrl:configfile.pptDbUrl[configfile.using]
} 

router.get("/",function(req,res,next){
    res.render('./v1_3/index.html',{
        lan:charset.zh,
        timeStamp:new Date().getTime(),
        data: config,
        position:"index"
    })    
})

router.get('/en/*', function(req, res, next) {
    req.body.lan = charset.en;
    next();
});

router.get('/zh/*', function(req, res, next) {  
    req.body.lan = charset.zh;
    next();
});

router.get("/*/reset",function(req,res,next){
    var pageConfig = {
        layout:'./sign/signLayout.html',
        lan :  req.body.lan,
        // clientType :  "TCH" ,
        timeStamp : new Date().getTime(),
        data : config,
        position:'reset'
    };

    res.render('./sign/reset.html',pageConfig)
})

router.get("/*/edit",function(req,res,next){
    var pageConfig = {
        layout:'./sign/signLayout.html',
        lan :  req.body.lan,
        // clientType :  "TCH" ,
        timeStamp : new Date().getTime(),
        data : config,
        position:'edit'
    };

    res.render('./sign/editInfo.html',pageConfig)
})

router.get("/*/changePwd",function(req,res,next){
    var pageConfig = {
        layout:'./sign/signLayout.html',
        lan :  req.body.lan,
        // clientType :  "TCH" ,
        timeStamp : new Date().getTime(),
        data : config,
        position:'changePwd'
    };

    res.render('./sign/changePwd.html',pageConfig)
})

router.get("/*/pan",function(req,res){
//	res.render('pan_IBL.html',{
    res.render('pan.html',{
        layout:false,
        timeStamp:new Date().getTime(),
        data:config,
        lan:req.body.lan
    })
})

/**
enum AppMode {
    APP_MODE_INVALID = 0, //无效模式
    APP_MODE_1vs1, //1对1模式
    APP_MODE_1vsN, //小组课模式
    APP_MODE_LARGE_CLASS, // 大班课模式
    APP_MODE_SMALL_CLASS, // 小班课模式，同小组课模式，只不过人数更多，最多20个
    APP_MODE_INTERACTIVE_LARGE_CLASS, //互动大班课
    APP_MODE_KL_INTERACTIVE_LARGE_CLASS, //口令互动大班课
    APP_MODE_FIRSTLEAP_IBL = 1000 //厉步模式的互动大班课(TODO: 太特化了，后面看是否能一般化)
};
 * */
router.get("/*/evaluate/1",function(req,res){
    res.render('./evaluate/evaluate.html',{
        layout:false,
        timeStamp:new Date().getTime(),
        data:config,
        lan:req.body.lan
    })
})

router.get("/*/evaluate/2",function(req,res){
    res.render('./evaluate/evaluate_group.html',{
        layout:false,
        timeStamp:new Date().getTime(),
        data:config,
        lan:req.body.lan
    })
})

router.get("/*/evaluate/3",function(req,res){
    res.render('./evaluate/evaluate.html',{
        layout:false,
        timeStamp:new Date().getTime(),
        data:config,
        lan:req.body.lan
    })
})

router.get("/*/evaluate/4",function(req,res){
    res.render('./evaluate/evaluate_group.html',{
        layout:false,
        timeStamp:new Date().getTime(),
        data:config,
        lan:req.body.lan
    })
})

router.get("/*/evaluate/5",function(req,res){
    res.render('./evaluate/evaluate.html',{
        layout:false,
        timeStamp:new Date().getTime(),
        data:config,
        lan:req.body.lan
    })
})

router.get("/*/evaluate/6",function(req,res){
	res.render('./evaluate/evaluate.html',{
		layout:false,
		timeStamp:new Date().getTime(),
		data:config,
		lan:req.body.lan
	})
})

module.exports = router;