const express = require('express');
const morgan = require('morgan');
const informationRoutes = require('./routes/information');
const experienceRoutes = require('./routes/experience');
const educationRoutes = require('./routes/education');
const projectsRoutes = require('./routes/projects');

const path = require('path');

const { mongoose } = require('./database');

const app = express();

// Settings
app.set('port', process.env.PORT || 3000 );

// MiddleWares
app.use(morgan('dev'));
app.use(express.json());

// Routes
app.use(informationRoutes);
app.use(experienceRoutes);
app.use(educationRoutes);
app.use(projectsRoutes);

// Static Files
const public = path.join(__dirname, '../build');
console.log(public);
app.use(express.static(public));

// Stating Server 
app.listen(app.get('port'), () => {
  console.log(`Server on Port ${app.get('port')}`);
});