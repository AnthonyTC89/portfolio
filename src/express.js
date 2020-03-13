/* eslint-disable no-console */
const express = require('express');
const morgan = require('morgan');
const path = require('path');

const iconsRoutes = require('./routes/icons');
const informationRoutes = require('./routes/information');
const aboutMeRoutes = require('./routes/aboutMe');
const experienceRoutes = require('./routes/experience');
const educationRoutes = require('./routes/education');
const projectsRoutes = require('./routes/projects');
const sendEmailRoutes = require('./routes/sendEmail');

// eslint-disable-next-line
const { mongoose } = require('./database');

const app = express();

// Settings
app.set('port', process.env.PORT || 3000);

// MiddleWares
app.use(morgan('dev'));
app.use(express.json());

// Routes
app.use(sendEmailRoutes);
app.use(iconsRoutes);
app.use(informationRoutes);
app.use(aboutMeRoutes);
app.use(experienceRoutes);
app.use(educationRoutes);
app.use(projectsRoutes);

// Static Files
const index = path.join(__dirname, '../build');
app.use(express.static(index));

// Stating Server
app.listen(app.get('port'), () => {
  console.log(`Server on Port ${app.get('port')}`);
});
