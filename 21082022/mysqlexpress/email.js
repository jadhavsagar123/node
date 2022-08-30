const nodemailer=require("nodemailer");




const sendEmail=(data)=>{
    var transport = nodemailer.createTransport({
        host: "smtp.mailtrap.io",
        port: 2525,
        auth: {
          user: "30d0cde5f6d8d2",
          pass: "f931fc47572c2c"
        }
      });

      var mailOptions = {
        from: 'shubhamdixit863@gmail.com',
        to: 'shubhamdixit865@gmail.com',
        subject: 'Nice Nodemailer test',
        text: 'Hey there, it’s our first message sent with Nodemailer ;) ',
        html: '<b>Hey there! </b><br> This is our first message sent with Nodemailer'
    };

      transport.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
});


}

module.exports=sendEmail;