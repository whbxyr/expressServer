module.exports = function(app) {	

    var charset = require('../config/charset');

    var v1_3 = require("./v1.3/index")

    var sign = require("./sign/index")

    app.use("/",sign);

    app.use('/v1.3', v1_3);

    app.use('/version', function(req, res){
        res.render('version.html');
    });
}
