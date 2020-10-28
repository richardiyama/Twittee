const db = require("../models");
const config = require("../config/auth.config");
const User = db.user;
require("dotenv").config();
const nodemailer = require("nodemailer");
let transporter = nodemailer.createTransport({
service: 'gmail',
auth:{
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
    }

});




var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

exports.signup =  async(req, res) => {
  // Save User to Database
  await User.create({
    name: req.body.email.substring(0, req.body.email.lastIndexOf("@")),
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 8),
    date_created: new Date()
  }).
  then(user => {
    let mailOptions = {
      from: 'iyamarichard@gmail.com',
      to: user.email,
      subject:'Welcome',
      text: 'Welcome onboard to Twitte..Your number one social media platform'
   };
   
   transporter.sendMail(mailOptions,function(err, data){
   if(err){
     console.log("There is an error", err);
   }else{
     console.log("Email sent to new user!!")
   }
   });
    res.send({ user,message: "User was registered successfully!" });
  })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};


exports.signin = async(req, res) => {
  await  User.findOne({
    where: {
      email: req.body.email
    }
  })
    .then(user => {
      if (!user) {
        return res.status(404).send({ message: "User Not found." });
      }

      var passwordIsValid = bcrypt.compareSync(
        req.body.password,
        user.password
      );

      if (!passwordIsValid) {
        return res.status(401).send({
          accessToken: null,
          message: "Invalid Password!"
        });
      }

      var token = jwt.sign({ id: user.id }, config.secret, {
        expiresIn: 86400 // 24 hours
      });
      if (user) {
      res.status(200).send({
        id: user.id,
        username: user.name,
        email: user.email,
        accessToken: token
      });
    }
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};