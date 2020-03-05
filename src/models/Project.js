const mongoose = require('mongoose');

const { Schema } = mongoose;
const ProjectSchema = new Schema({
  date: { type: String, required: true },
  company: { type: String, required: true },
  position: { type: String, required: true },
  goals: { type: String, required: true },
}, { collection: 'projects' });

module.exports = mongoose.model('Project', ProjectSchema);
