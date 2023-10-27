const router = require("express").Router();
const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const SendmailTransport = require("nodemailer/lib/sendmail-transport");

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

router.get("/", (req, res) => {
  res.send(
    `<h1 style = 'text-align:center; color:blue;'>Welcome to my Home page`
  );
});

router.post("/sendEmail", (req, res) => {
  res.send("Yes i got");
  let data = req.body;
  console.log(data);
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "dharshan8088@gmail.com",
      pass: "urbcnyzuiannngvu",
    },
  });
  const mailOptions = {
    from: "dharshan8088@gmail.com",
    to: "dharshanss.20cse@kongu.edu,aadishn.20cse@kongu.edu,gokulk.20cse@kongu.edu",
    subject: "Message From Client",
    html: `
        <ul>
            <li><h1 style = 'color :green ';>Name : ${data.fname}</h1></li>
            <li><h1 style = 'color :blue ';>Phone_Number  : ${data.phonenumber}</h1></li>
            <li><h1 style = 'color :red ';>Email  : ${data.email}</h1></li>
            <li><h1 style = 'color :pink ';>Message  : ${data.message}</h1></li>
        </ul>
        `,
  };
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log(`Email Sent : ${info.response}`);
    }
  });
  transporter.close();
});

module.exports = router;
