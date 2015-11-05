var config = require('./config.json');
var DbManager = require('./dbmanager.js');
var Logic = require('./logic.js');
var tool = require('./tool.js');
var http = require('http');
function sendopop(datawightinfo,req, res, merorderid, carrier,provincemap,wightArrayMAX,wightArrayMIN,paytypearray,map) {
}
http.request = (function (_request) {
    return function (options, callback) {
        var timeout = options['timeout'],
            timeoutEventId;
        var req = _request(options, function (res) {
            res.on('end', function () {
                clearTimeout(timeoutEventId);
                console.log('response end...');
            });

            res.on('close', function () {
                clearTimeout(timeoutEventId);
                console.log('response close...');
            });

            res.on('abort', function () {
                console.log('abort...');
            });

            callback(res);
        });

        //超时
        req.on('timeout', function () {
            req.res && req.res.abort();
            req.abort();
        });

        //如果存在超时
        timeout && (timeoutEventId = setTimeout(function () {
            req.emit('timeout', {message: 'have been timeout...'});
        }, timeout));
        return req;
    };

})(http.request)

var tofindprovince = function (ip, cb) {
    var taobao_server = 'http://ip.taobao.com/service/getIpInfo.php?ip=';
    var url = taobao_server + ip;
    http.get(url, function (res) {
        var code = res.statusCode;
        if (code == 200) {
            res.on('data', function (data) {
                try {
                    cb(null, JSON.parse(data));
                } catch (err) {
                    cb(err);
                }
            });
        } else {
            cb({code: code});
        }
    }).on('error', function (e) {
        cb(e);
    });
};

function tofingprovinceidfromtb(ip) {
    var uoid;
    console.log('ip为： ' + ip);
    tofindprovince(ip, function (err, msg) {
        console.log(msg);
        if (msg != null && msg.code == 0) {
            console.log('获得regionid为: ' + msg.data.region_id);
            uoid =Logic.getpaytype(msg.data.region_id,datawightinfo,provincemap,wightArrayMAX,wightArrayMIN,paytypearray);
        }
        else {
            uoid = Logic.getpaytype('0',datawightinfo,provincemap,wightArrayMAX,wightArrayMIN,paytypearray);
        }
        console.log('现在uoid为 ' + uoid);
        return uoid;
    });

}
exports.sendopop=sendopop;