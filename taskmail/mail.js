
var nodemailer = require("nodemailer");
var http = require('http');
var querystring = require('querystring');       //用于发送post请求
//var smtpTransport = require('nodemailer-smtp-transport');
var transport = nodemailer.createTransport({
    service: 'hotmail',

    auth: {
        user: 'nanshihui11@hotmail.com',
        pass: 'Sywtz111'
    }
});

// 设置邮件内容


// 发送邮件
var detail="";
function dosendmail(){

    showweekreportmail();

}
function showweekreportmail() {
                            var create_time = new Date().Format("yyyy-MM-dd hh:mm:ss");
                            var mailOptions = {
                                from: "Fred Foo <nanshihui11@hotmail.com>", // 发件地址
                                to: "nanshihui@qq.com", // 收件列表
                                subject: "文件监视系统---安全提醒", // 标题
                                html: "<p>尊敬的用户</p> <p><br /> </p>  <p><strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;您的账号近期发生频繁变动，如有异常，请及时修改密码。</strong>"+
                                 " </p> <p><strong><br /> </strong> </p> <p> --- 文件检测系统."+create_time+ "</p>"
                            }
                                 transport.sendMail(mailOptions, function(error, response){
                                if(error){
                                    console.log(error);
                                }else{
                                    console.log("Message sent: " + response.message);
                                }
                                     transport.close(); // 如果没用，关闭连接池
                            });






}
exports.dosendmail =dosendmail;                                        //发送周报邮件
