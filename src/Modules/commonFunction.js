var constants = require ('./constant');
var async = require ('async');
var _ = require ('lodash');
var FCM = require('fcm-node');
var config = require ('../Config/development');
var twilio = require('twilio');
var jwt = require('jsonwebtoken');

/*
------------------------------------------------
              Send OTP
------------------------------------------------      
*/

exports.sendotp = function(varification_code, mobile_number) {
    // var accountSid = ''; // Your Account SID from www.twilio.com/console
    //     var authToken = '';   // Your Auth Token from www.twilio.com/console

    var twilio = require('twilio');
    var client = new twilio(config.accountSid, config.authToken);
    client.messages.create({
            body: "your test one time password(OTP) is  " + varification_code + "  valid for 3 minutes do not disclose it",
            to: mobile_number, // Text this number
            from: 'no insert' // From a valid Twilio number
        })
        .then((message) => console.log(message.sid));

}


/*
-------------------------------------------------
    send mail
-------------------------------------------------
*/

exports.sendmail = function(link, email_id) {
    console.log(" process.env.sendgridKey",  process.env.sendgridKey)
    var nodemailer = require("nodemailer");
    var smtpTransport = require("nodemailer-smtp-transport");
    var config = {
        "SMTP_HOST": "smtp.sendgrid.net",
        "SMTP_PORT": 587,
        "SMTP_USER": "apikey", //default
        "SMTP_PASS": process.env.sendgridKey
        //"SMTP_PASS" : config.SMTP_PASS
    }
    var mailer = nodemailer.createTransport(smtpTransport({
        host: config.SMTP_HOST,
        port: config.SMTP_PORT,
        auth: {
            user: config.SMTP_USER,
            pass: config.SMTP_PASS
        }
    }));
    mailer.sendMail({
        from: "aalsaeed@list.sa",
        to: email_id,
        subject: "Password reset link",
        template: "text",
        html: `
        <!DOCTYPE html>
        <html lang="en">
        
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            
        </head>
        
        <body style="margin: 0px;padding: 0px;box-sizing: border-box;">
            <section style="max-width:100%;">
                <div
                    style="max-width:600px;margin: auto;background-color:#1e1c1c;color:#fff;font-family:Arial, Helvetica, sans-serif;border-radius:10px">
                    <div style="padding: 20px 50px 0px 50px;">
                        <h1 style="font-weight:600;font-size:28px;">Reset Password Link!</h1>
                    </div>
                    <!--------header------->
                    <div style="font-size: 16px;line-height:22px;padding: 20px 50px 0px 50px;">
                        <p>Hey,</p>
                        <p>Click here to reset your password :  <a style="color:red" href=${link}> click here</a> 
                        </p>
                        <p style="margin-top:30px;font-style: italic;">
                        <p> All the best, </p>
                        <strong> List Team</strong>
                        </p>
                    </div>
                    <!--------content-------->
                    <div style="padding: 20px 50px 0px 50px;margin-bottom:40px;">
                    </div>
                    <!------btn------->
                    <footer style=" background-color:#1b1818;padding: 20px 50px 20px 50px;border-radius:10px">
                        <div style="display: flex;justify-content:space-between;">
                            <div style="font-size:8px;line-height: 20px;width:50%;">
                                
                            </div>
                            <!------col-1------>
                            <!------col-1------>
                        </div>
                        <!--------row-->
                    </footer>
                </div>
                <!------content---body-->
        
            </section>
        
        </body>
        
        </html>

        `
    }, (error, response) => {
        if (error) {
            console.log(error);
            // resolve({ message: "Email not send " });
        } else {
            console.log(response);
            // resolve({ message: "Email send successfully" });
        }
        mailer.close();
        //res.send("Response send successfully");
    });
}




exports.verifyData = (data = {}) => {
    var result = {};
    var count = 0;
    _.map(data, (val, key) => {
        if (val && val.length || _.isInteger(val)) {
            result[key] = val;
        }
    })
    return result;
}
// Android push notification

exports.sendPushNotification = function (serverKey, token, device_type, payload, notify) {
    //console.log({payload});
console.log("send notification Android calling")
     //console.log(serverKey, token, device_type, payload, notify);
        var fcm = new FCM(serverKey);
        var message = {
            to: token,
            collapse_key: 'your_collapse_key',
            //notification: notify,
            data: payload,
         };
         // console.log(message)
         console.log(' a => ');
        fcm.send(message, function(err, response) {
            if (err) {

                console.log("=======================Android error comming===================")
                console.log(null, err);
                console.log('Vishal')
            } else {
                console.log("=======================Android===================")
                console.log(null, response)
            }
        });        
}

//Ios push notification

 exports.sendPushNotificationForIos = function (serverKey, token, device_type, payload, notify) {
    var fcm = new FCM(serverKey);
    var message = {
        to: token,
        collapse_key: 'your_collapse_key',
        notification: notify,
        data: payload,
     };
     //console.log(message)
    fcm.send(message, function(err, response) {
        if (err) {
            console.log("=======================IOS===================")
            console.log(null, err);
        } else {
            console.log("=======================IOS===================")
            console.log(null, response)
        }
    });
}

exports.createJWT =  (id) => {
    console.log("create jwt")
    let token = jwt.sign({ userId: id }, '4548957744ss54sq66e63134d1d8ed9768');
    return token
}
