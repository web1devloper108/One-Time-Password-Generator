const otpGen = require("otp-generator");

////Here 6 is the length of otp 
let otp = otpGen.generate(6, { digits: true, upperCaseAlphabets: false, lowerCaseAlphabets: false });

let sid = " "        //write a "Account SID" on here
let auth_token = " "   ////write a "Auth Token" on here


var twilio = require("twilio")(sid, auth_token);

twilio.messages.create({
  from: "  ",          //// write a "trial phone number" on here
  to: " ",          //// write a "Mobile Number" where we want to sand otp

  body: `this is testing otp is ${otp}`,
})

  .then(function (res) {
    console.log("Message haas send")
  })
  .catch(function (err) {
    console.log(err)
  })




  //////////////////////////////
  //////////run on terminal////
  ////node index.js

