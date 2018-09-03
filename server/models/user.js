const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new mongoose.Schema({

    // common properties
    accountType: {type: String, required: true, trim: true},
    fname: {type: String, required: true, trim: true},
    lname: {type: String, required: true, trim: true},
    email: {type: String, required: true, trim: true},
    pw: {type: String, required: true, trim: true},
    address: {type: String, required: true, trim: true},
    city: {type: String, required: true, trim: true},
    state: {type: String, required: true, trim: true},
    zip: {type: String, required: true, trim: true},

    // dev properties
    devBio: {type: String, trim: true},
    devSkills: {type: Array},
    devLanguages: {type: Array},
    devFrameworks: {type: Array},

    // org properties
    orgName: {type: String, trim: true},
    orgJobs: {type: Array}

}, {timestamps: true});

mongoose.model('User', userSchema);
const User = mongoose.model('User');

module.exports = User;