const mongoose = require('mongoose');
const { Schema } = mongoose;

const jobSchema = new mongoose.Schema({

  position: {type: String, required: true, trim: true},
  description: {type: String, required: true, trim: true},
  requiredSkills: {type: Array, required: true},
  orgId: {type: String, required: true, trim: true},
  orgName: {type: String, required: true, trim: true},
  city: {type: String, required: true, trim: true},
  state: {type: String, required: true, trim: true},
  contactFName: {type: String, required: true, trim: true},
  contactLName: {type: String, required: true, trim: true},
  email: {type: String, required: true, trim: true},
  match: {type: Number}
}, {timestamps: true});

mongoose.model('Job', jobSchema);
const Job = mongoose.model('Job');

module.exports = Job;