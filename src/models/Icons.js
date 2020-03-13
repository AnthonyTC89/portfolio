const mongoose = require('mongoose');

const { Schema } = mongoose;
const IconsSchema = new Schema({
  fullText: { type: Object, required: true },
  techSkills: { type: Object, required: true },
}, { collection: 'icons' });

module.exports = mongoose.model('Icons', IconsSchema);
