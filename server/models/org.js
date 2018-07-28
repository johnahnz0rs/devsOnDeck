const mongoose = require('mongoose');
const { Schema } = mongoose;

const orgSchema = new mongoose.Schema({

    _id: {type: String, required: true, trim: true},
    orgName: {type: String, required: true, trim: true},
    fname: {type: String, required: true, trim: true},
    lname: {type: String, required: true, trim: true},
    address: {type: String, required: true, trim: true},
    city: {type: String, required: true, trim: true},
    state: {type: String, required: true, trim: true},
    zip: {type: Number, required: true, trim: true},
    email: {type: String, required: true, trim: true},
    pw: {type: String, required: true, trim: true},
    accountType: {type: String, required: true, trim: true},
    jobs: {type: Array}
});

mongoose.model('Org', orgSchema);
const Org = mongoose.model('Org');

module.exports = Org;