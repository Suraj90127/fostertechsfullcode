const nodeMailer = require("nodemailer");
const dotenv = require("dotenv");
dotenv.config();

const sendEmail = async (data) => {
  const transporter = nodeMailer.createTransport({
    host: process.env.GSMTP_HOST,
    port: process.env.GSMTP_PORT,
    // secure: true,
    service: process.env.SMTP_SERVICE,
    auth: {
      user: process.env.SMTP_MAIL,
      pass: process.env.SMTP_PASSWORD,
    },
  });
  const mailOptions = {
    to: "jitendrakumar04445@gmail.com",
    from: ` ${data.email}`,
    subject: `You have recieved query`,
    html: `       
       <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<style>
*{
    margin: 0;
    padding: 0;
}
    h3 {
        font-size: 22px;
        margin: 9px;
    }
   
 
</style>
<body>
    <div class="container">
            <div class="shipping-section" style="margin-top: 70px;">
            <h3>First Name: ${data.fname}</h3>
            <h3>Last Name: ${data.lname}</h3>
            <h3>Email: ${data.email}</h3>
            <h3>Phone Number: ${data.message}</h3>
        </div>
        
    </div>
</body>

</html>
       
        `,
  };
  const tran = await transporter.sendMail(mailOptions);
};
module.exports = { sendEmail };
