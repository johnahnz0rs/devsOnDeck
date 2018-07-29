const mongoose = require('mongoose');
const { Schema } = mongoose;

const jobSchema = new mongoose.Schema({

    _id: {type: String, required: true, trim: true},
    orgId: {type: String, require: true, trim: true},
    name: {type: String, required: true, trim: true},
    description: {type: String, required: true, trim: true},
    skills: {type: Array, required: true}
}, {timestamps: true});

mongoose.model('Job', jobSchema);
const Job = mongoose.model('Job');

module.exports = Job;