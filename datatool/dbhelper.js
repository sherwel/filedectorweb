var config = require('./config.json');
var tool = require('./tool.js');
var mysql = require('mysql');
var mailtool=require('../taskmail/mail.js')
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

function showall(req, res,next){
    client.query('select * from file_item  ',

        function (err, results) {
            if (err) {
                console.log(err);
                return;
            }

            else {
                var count = results.length;
                console.log('广告条数为' + count);
                if (count == 0)
                    pagecount = 0;
                else if (count % 15 > 0)
                    pagecount = Math.ceil(count / 15);
                else
                    pagecount = count / 15;

                var data1 = JSON.stringify(results);
             //   data1 = '{"result":' + data1 +  ',"length":' + pagecount+'}';
                console.log(data1);

                res.write(data1);
                res.end();

                return;



            }
        });
}
function showtimes(){
    client.query('select * from file_item  ',

        function (err, results) {
            if (err) {
                console.log(err);
                return;
            }

            else {
                var count = results.length;
               if(count>1)
                   mailtool.dosendmail();
                return;



            }
        });
}
function insert_by_params(req,res,next,table,select_params,real_params){
    var sql='insert into '+table+'(';

    for(var i=0;i<select_params.length-1;i++){
        sql+=select_params[i]+',';
    }
    sql+=select_params[select_params.length-1]+')'+'  values(';
    for(var i=0;i<real_params.length-1;i++){
        sql+='?,';
    }
    sql+='?)';
    console.log(sql);
    client.query(sql,real_params,  function (err, results) {
        if (err) {
            console.log(err);
            return;
        }
        else{
            res.send('插入成功');
        }
        }
        )
    showtimes();
}

exports.showall=showall;

exports.init=init;

exports.insert_by_params=insert_by_params;
		


