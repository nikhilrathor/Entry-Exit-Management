const Visitor = require('../../db').Visitor
const Host = require('../../db').Host
const route = require('express').Router()
const nodemailer = require('nodemailer')
const Nexmo = require('nexmo')



require('dotenv').config()


route.post('/validate', (req, res) => {
  Visitor.findOne({
    where: {
      phoneno: req.body.phoneno,
      name: req.body.name,
      email: req.body.email,
      host: req.body.host
    }
  }).then((user) => {
    if (!user) {
      return res.send("No such user")
    }
    return res.send("Hello")
  })
})


route.post('/checkin', (req, res) => {

  Visitor.create({
    name: req.body.name,
    phoneno: req.body.phoneno,
    email: req.body.email,
    host: req.body.host,
    checkintime: req.body.checkintime
  }).then((visitors) => {

    Host.findOne({
      where: {
        phoneno: req.body.host
      }
    }).then((host) => {

      var txt = "New Checkin :\n\n" + "Name : " + req.body.name + "\n" + "Email : " + req.body.email + "\n" + "Phone : " + req.body.phoneno + "\n" + "CheckIn  : " + req.body.checkintime

      const nexmo = new Nexmo({
        apiKey: process.env.NEXMOKEY,
        apiSecret: process.env.NEXMOSECRET ,
      });

      const from = 'Nexmo';
      const to = '91' + parseInt(host.phoneno)
      const text = txt

      nexmo.message.sendSms(from, to, text, (err, info) =>{
        if(err){
          console.log(err)
        }else{
          if(info.messages[0].status === '0'){
            console.log("Message sent successfully.")
          }else{
            console.log(`Message failed with error: ${info.messages[0]['error-text']}`)
          }
        }
      })     
      var transporter = nodemailer.createTransport({
        service: 'gmail',
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
          user: process.env.EMAIL,
          pass: process.env.PASS
        }
      }); 
      var mailOptions = {
        from: process.env.EMAIL,
        to: host.email,
        subject: 'Mail Sent using Entry-Exit Management',
        text: txt
      };

      transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
    })
    res.status(201).send(visitors)
  }).catch((err) => {
    res.status(201).send({
      error: "Could not add new visitor"
    })
  })
})


var name, phoneno, email, checkintime, checkouttime, host
route.post('/checkoutemail', (req, res) => {
  Visitor.findOne({
    where: {
      name: req.body.name,
      phoneno: req.body.phoneno,
      email: req.body.email,
      host: req.body.host
    }
  }).then((visitor) => {
    name = visitor.name
    phoneno = visitor.phoneno
    email = visitor.email
    checkintime = visitor.checkintime
    Host.findOne({
      where: {
        phoneno: req.body.host
      }
    }).then((hosts) => {
      host = hosts.name
      checkouttime = new Date().toLocaleTimeString()

      Visitor.destroy({
        where: {
          name: req.body.name,
          phoneno: req.body.phoneno,
          email: req.body.email,
          host: req.body.host
        }
      }).then((visitors) => {
        res.status(201).send((visitors).toString())
        if ((visitors).toString() === "1") {

          var txt = "You have successfully checked out: \n\n" + "Name : " + name + "\n" + "Phone : " + phoneno + "\n" + "Check-in time : " + checkintime + "\n" + "Check-out time : " + checkouttime + "\n" + "Host name : " + host +"\nAddress: Block B, Industrial Area, Sector 62, Noida, Uttar Pradesh 201309"
          
          var transporter = nodemailer.createTransport({
            service: 'gmail',
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {
              user: process.env.EMAIL,
              pass: process.env.PASS
            }
          });
          var mailOptions = {
            from: process.env.EMAIL,
            to: email,
            subject: 'Mail Sent using Entry-Exit Management',
            text: txt
          };

          transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
              console.log(error);
            } else {
              console.log('Email sent: ' + info.response);
            }
          })

        }

      }).catch((err) => {
        res.status(501).send({
          error: "Could not remove visitor"
        })
      })

    })
  })

})

exports = module.exports = route