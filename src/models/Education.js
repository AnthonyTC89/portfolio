const mongoose = require('mongoose');
const { Schema } = mongoose;

const EducationSchema = new Schema({
  date: { type: String, required: true },
  institution: { type: String, required: true },
  grade: { type: String, required: true },
  goals: { type: String, required: true }
}, { collection: 'education' });

module.exports = mongoose.model('Education', EducationSchema);
