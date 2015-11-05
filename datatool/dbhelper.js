var config = require('./config.json');
var tool = require('./tool.js');
var mysql = require('mysql');
var client;
var requestConnectMySqlTime = 0;
tool.time_init();
var option = {
    host : config.mysql[0].host,
    port :  config.mysql[0].port,
    user :  config.mysql[0].user,
    password :  config.mysql[0].password,
    database :  config.mysql[0].database
}

var File_Item_TABLE = 'file_item';

function init()  {
    console.log('option.host = ' + option.host);
    client = mysql.createConnection(option);

    //connect error，retry on 5 seconds
    client.connect(function (err) {
        if (err) {
            console.log('error when connecting to db:requestConnectMySqlTime = ' + requestConnectMySqlTime + ';err = ', err);
            requestConnectMySqlTime++;
            setTimeout(init, 5*1000);
            // TODO :  if retry time over 3, need send mail
        }else {
            requestConnectMySqlTime = 0;
            console.log('连接成功');
        }
    });

    client.on('error', function (err) {
        console.log('db error', err);
        // 如果是连接断开，自动重新连接
        if (err.code === 'PROTOCOL_CONNECTION_LOST') {
            init();
        } else {
            console.log('db error70', err);
        }
    });
     return client;

}

var clientinstance =init();





exports.init=init;


		


