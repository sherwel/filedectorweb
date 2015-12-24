var os = require("os");
var osUtils = require("os-utils");
var interval = -1;
var currCPU = 0;




    if (interval < 0) {
        interval = setInterval(function () {
            var freeMem = os.freemem();
            var totalMem = os.totalmem();
            
              var  cpuUsage=currCPU * 100.0;
               var freeMem=freeMem;
               var totalMem=totalMem;
              var  usedMem=totalMem - freeMem;
           console.log(freeMem,cpuUsage,totalMem,usedMem);
        }, 10);//每隔10ms取系统数据
        console.log('interval is '+interval);
    }


function updateCPU() {
    setTimeout(function () {
        osUtils.cpuUsage(function (value) {
            currCPU = value;
            
            updateCPU();
        });
    }, 0);
}
updateCPU();
console.log("服务器已启动");