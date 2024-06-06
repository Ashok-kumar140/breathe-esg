const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },

  email: {
    type: String,
    require: true,
    trim: true
  },
  password: {
    type: String,
    require: true,

  },
  image: {
    type: String,
    trim: true
  },
  token: {
    type: String
  },
  tokenExpires: {
    type: Date,
  },

});

module.exports = mongoose.model("User", UserSchema);