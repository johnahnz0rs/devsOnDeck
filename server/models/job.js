const mongoose = require('mongoose');
const { Schema } = mongoose;

const jobSchema = new mongoose.Schema({

    orgId: {type: String, require: true, trim: true},
    position: {type: String, required: true, trim: true},
    description: {type: String, required: true, trim: true},
    skills: {type: Array, required: true},
    match: {type: Number}
}, {timestamps: true});

mongoose.model('Job', jobSchema);
const Job = mongoose.model('Job');

module.exports = Job;