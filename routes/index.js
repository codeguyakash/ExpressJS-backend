var express = require('express');
const User = require("./Database/schema")
var router = express.Router();
require("./Database/database");

/* GET home page. */
router.post('/', function(req, res) {
  var name = req.body.name
  var email = req.body.email;
  var phone = req.body.phone;
  var password = req.body.password;

  var new_user = new User({
    name: name,
    email: email,
    phone: phone,
    password: password
  })

  new_user.save(function (err, result) {
    if (err) {
      console.log(err);
    } else {
      console.log(result);
    }
  });
  res.json({ "name": name , "email": email , "phone": phone ,"password":password });
});

module.exports = router;


