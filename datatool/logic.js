
var tool = require('./tool.js');
var DBmanager=require('./dbhelper.js')
var config=require('./config.json')
var Logic=function(){
    this.init=function(){
        DBmanager.init();
    }
    this.insert_table_dector_item=function(req,res,next){
        var create_time = new Date().Format("yyyy-MM-dd hh:mm:ss:S");
        var ipaddress = tool.getip(req);
        var selectparams=['filename','daytime','path','status','username','declaration','drivename','ip'];
        var realparams=[req.body.File,create_time,req.body.Path,req.body.Event,req.body.Username,req.body.Declaration,req.body.Pan,ipaddress];
        DBmanager.insert_by_params(req,res,next,config.File_Item_TABLE,selectparams,realparams);
    }
    this.showdata=function(req,res,next){
        DBmanager.showall(req,res,next);
    }
}
module.exports = Logic;