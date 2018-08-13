const mongoose = require('mongoose');
const { Schema } = mongoose;

const devSchema = new mongoose.Schema({

    fname: {type: String, required: true, trim: true},
    lname: {type: String, required: true, trim: true},
    address: {type: String, required: true, trim: true},
    city: {type: String, required: true, trim: true},
    state: {type: String, required: true, trim: true},
    zip: {type: String, required: true, trim: true},
    email: {type: String, required: true, trim: true},
    pw: {type: String, required: true, trim: true},
    bio: {type: String, trim: true},
    skills: {type: Array, required: true},
    languages: {type: Array, required: true},
    frameworks: {type: Array, required: true},
    accountType: {type: String, required: true, trim: true},
    match: {type: Number}
}, {timestamps: true});

mongoose.model('Dev', devSchema);
const Dev = mongoose.model('Dev');

module.exports = Dev;