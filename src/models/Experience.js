const mongoose = require('mongoose');
const { Schema } = mongoose;

const ExperienceSchema = new Schema({
  date: { type: String, required: true },
  company: { type: String, required: true },
  position: { type: String, required: true },
  goals: { type: String, required: true }
}, { collection: 'experience' });

module.exports = mongoose.model('Experience', ExperienceSchema);
