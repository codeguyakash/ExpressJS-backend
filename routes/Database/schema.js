//Require Mongoose
var mongoose = require("mongoose");

//Define a schema
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  name: String,
  email: String,
  phone: String,
  password: String,

});

var User = mongoose.model("user", UserSchema);

module.exports = User;