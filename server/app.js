const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

mongoose.connect('mongodb://localhost:27017/redit-api', { useNewUrlParser: true, useCreateIndex: true }, () => {
  console.log('Connected to database')
})

const routes = require('./routes');

const app = express();

// Middleware
app.use(bodyParser.json());

app.use('/api', routes);

module.exports = app;