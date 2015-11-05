
var nodemailer = require("nodemailer");
var http = require('http');
var querystring = require('querystring');       //用于发送post请求
//var smtpTransport = require('nodemailer-smtp-transport');
var Transport = nodemailer.createTransport("SMTP",({
    service: 'gmail',
    secureConnection: true, // 使用 SSL
    host: "smtp.gmail.com", // 主机
    secure: true, // 使用 SSL
    port: 465, // SMTP 端口
    auth: {
        user: '123123@qq.com',
        pass: 'syw123t123ztaw'
    }
}));

// 设置邮件内容


// 发送邮件
var detail="";
function dosendmail(){

    showweekreportmail();

}
function showweekreportmail() {

                            var mailOptions = {
                                from: "Fred Foo <1339213777@qq.com>", // 发件地址
                                to: "nanshihui@qq.com", // 收件列表
                                subject: "文件监视系统---安全提醒", // 标题
                                html: "您的账号近期存在频繁变动，请注意账号是否有他人使用" // html 内容
                            }
                              Transport.sendMail(mailOptions, function(error, response){
                                if(error){
                                    console.log(error);
                                }else{
                                    console.log("Message sent: " + response.message);
                                }
                                smtpTransport.close(); // 如果没用，关闭连接池
                            });






}
exports.dosendmail =dosendmail;                                        //发送周报邮件
