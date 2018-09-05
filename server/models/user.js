const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new mongoose.Schema({

  // common properties
  accountType: {type: String, required: true, trim: true},
  fname: {type: String, required: true, trim: true},
  lname: {type: String, required: true, trim: true},
  email: {type: String, required: true, trim: true},
  pw: {type: String, required: true, trim: true},
  address: {type: String, trim: true},
  city: {type: String, trim: true},
  state: {type: String, trim: true},
  zip: {type: String, trim: true},
  bio: {type: String, trim: true},

  // dev properties
  devSkills: {type: Array},

  // org properties
  orgName: {type: String, trim: true},

}, {timestamps: true});

mongoose.model('User', userSchema);
const User = mongoose.model('User');

module.exports = User;