const mongoose = require('mongoose');
const { Schema } = mongoose;

const InformationSchema = new Schema({
  name: { type: String, required: true },
  lastname: { type: String, required: true },
  email: { type: String, required: true },
  title: { type: String, required: true },
  subTitle: { type: String, required: true },
  phone: { type: String, required: true },
  location: { type: String, required: true },
  facebook: { type: String, required: true },
  twitter: { type: String, required: true },
  linkedin: { type: String, required: true },
  github: { type: String, required: true },
  aboutMe: { type: String, required: true },
  techSkills: { type: Array, required: true },
}, { collection: 'information' });

module.exports = mongoose.model('Information', InformationSchema);
