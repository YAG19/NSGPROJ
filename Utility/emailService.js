var nodemailer = require("nodemailer");
var xoauth2 = require("xoauth2");

var smtpTransport = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
      type: 'OAuth2',
      user: "yagnesh.patel9898@gmail.com", // Your gmail address.
      clientId: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      refreshToken: process.env.CLIENT_REFRESH,
      accessToken: process.env.CLIENT_ACCESS_TOKEN
  }
}); 

async function sendEmail(recieverId,subject,text){

var mailOptions = {
  from: "yagnesh.patel9898@gmail.com",
  to: recieverId,
  subject: subject,
  generateTextFromHTML: true,
  html: `<b>${text}</b>`
};

// console.log(recieverId,subject,text)
// smtpTransport.sendMail(mailOptions, function(error, response) {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log(response);
//   }
//   smtpTransport.close();
// });

    let response = await smtpTransport.sendMail(mailOptions);
    smtpTransport.close();
    return response;

}


module.exports = {
    sendEmail
}
