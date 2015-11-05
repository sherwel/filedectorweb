var schedule = require('node-schedule');
var Logic = require('./logic.js');
var rule = new schedule.RecurrenceRule();
var limitrule = new schedule.RecurrenceRule();
var rule1 = new schedule.RecurrenceRule();

function dohold(taskarray) {
    //rule.minute = 56;

    rule.dayOfWeek = [0, new schedule.Range(1, 6)];

    rule.hour = 0;
    rule.minute = 1;

    // rule.minute =[21,7,19,27,30,36,39,48,51,55,59];
    // rule.dayOfWeek = [0, new schedule.Range(1, 6)];
    // rule.hour = 0;

    //　rule.minute =[0,5,10,15,20,25,30,35,40,45,50,55];
    var pp = schedule.scheduleJob(rule, function () {

        console.log('定时任务');
        var i = 0;
        Logic.countable(i, taskarray);


    });




}
exports.dohold=dohold  ; //统计数据  