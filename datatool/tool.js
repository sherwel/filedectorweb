


function getip(req){
var ipAddress;
var headers = req.headers;
var forwardedIpsStr = headers['x-real-ip'] || headers['x-forwarded-for'];
forwardedIpsStr ? ipAddress = forwardedIpsStr : ipAddress = null;
if (!ipAddress) {
ipAddress = req.connection.remoteAddress;
}

return ipAddress.split(':').slice(-1).join('');
}

function time_init(){
	
	
	Date.prototype.Format = function (fmt) { 
    var o = {
        "M+": this.getMonth() + 1, //月份 
        "d+": this.getDate(), //日 
        "h+": this.getHours(), //小时 
        "m+": this.getMinutes(), //分 
        "s+": this.getSeconds(), //秒 
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度 
        "S": this.getMilliseconds() //毫秒 
    };
    if (/(y+)/.test(fmt)){
        fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    }
    for (var k in o) {
        if (new RegExp("(" + k + ")").test(fmt)){
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ?
                     (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
        } 
    }
    return fmt;
}
}




function getCarrierInfo( imsiInfo) {
		var carrier = 0;
		var operPrefix = imsiInfo.substring(0, 5);
        if (operPrefix=='46000' || operPrefix=='46002'
                || operPrefix=='46007') {
            // 因为移动网络编号46000下的IMSI已经用完，所以虚拟了一个46002编号，134/159号段使用了此编号 //中国移动
            carrier = 1;
        } else if (operPrefix=='46001' || operPrefix=='46006') {
            // 中国联通
            carrier = 2;
        } else if (operPrefix=='46003' || operPrefix=='46005') {
            // 中国电信
            carrier = 3;
        } else if (operPrefix=='46020') {
            // 中国铁通
            carrier = 4;
        }
		
		return carrier;
	}

function uuid(len, radix) {
    var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
    var uuid = [], i;
    radix = radix || chars.length;

    if (len) {
        // Compact form
        for (i = 0; i < len; i++) uuid[i] = chars[0 | Math.random() * radix];
    } else {
        // rfc4122, version 4 form
        var r;

        // rfc4122 requires these characters
        uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-';
        uuid[14] = '4';

        // Fill in random data.  At i==19 set the high bits of clock sequence as
        // per rfc4122, sec. 4.1.5
        for (i = 0; i < 36; i++) {
            if (!uuid[i]) {
                r = 0 | Math.random() * 16;
                uuid[i] = chars[(i == 19) ? (r & 0x3) | 0x8 : r];
            }
        }
    }

    return uuid.join('');
}
function randomInt(x1, x2) {
    var min_int = parseInt(x1);
    var max_int = parseInt(x2);
    if (isNaN(min_int) || isNaN(max_int)) {
        alert('parameter error');
        return false;
    }

    x1 = Math.min(min_int, max_int);
    x2 = Math.max(min_int, max_int);

    return x1 + Math.floor(Math.random() * (x2 - x1 + 1));
}

exports.getip=getip;
exports.getCarrierInfo=getCarrierInfo;
exports.time_init=time_init;
exports.uuid=uuid;
exports.randomInt=randomInt;
