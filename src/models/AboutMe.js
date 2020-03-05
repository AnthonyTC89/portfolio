const mongoose = require('mongoose');

const { Schema } = mongoose;
const AboutMeSchema = new Schema({
  fullText: { type: String, required: true },
  techSkills: { type: Array, required: true },
}, { collection: 'aboutMe' });

module.exports = mongoose.model('AboutMe', AboutMeSchema);
