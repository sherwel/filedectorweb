var express = require('express');
var router = express.Router();
var os = require("os");
var osUtils = require("os-utils");
var interval = -1;
var currCPU = 0;
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express',username:'',password:'' });
});
router.get('/test', function(req, res, next) {
  res.render('test', { title: 'Express',username:'',password:'' });
});
router.get('/systeminfo', function(req, res, next) {
	
  res.render('cpu', { title: 'Express',username:'',password:'' });
})
router.get('/cpuinfo',function(req,res,next){
			var freeMem = os.freemem();
            var totalMem = os.totalmem();
           res.send({
                cpuUsage: currCPU * 100.0,
                freeMem: freeMem,
                totalMem: totalMem,
                usedMem: totalMem - freeMem
            });

})
module.exports = router;
function updateCPU() {
    setTimeout(function () {
        osUtils.cpuUsage(function (value) {
            currCPU = value;
            
            updateCPU();
        });
    }, 0);
}
updateCPU();