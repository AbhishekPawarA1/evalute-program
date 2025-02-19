const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  username: { type: String },
  description: {type:String},
  price: {type:Number},
});


const User = mongoose.model("user", userSchema)
module.exports = User;