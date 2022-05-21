var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/test", { useNewUrlParser: true });
var conn = mongoose.connection;
conn.on("connected", function () {
  console.log("DB connected successfully");
});
conn.on("disconnected", function () {
  console.log("DB disconnected successfully");
});
conn.on("error", console.error.bind(console, "connection error:"));
module.exports = conn;
