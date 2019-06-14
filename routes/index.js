const express = require('express');

const app = express();

const personRoutes = require('./person');

app.use('/person', personRoutes);

module.exports = app;