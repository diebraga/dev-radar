const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

// var app to connect app
const app = express();

// connect mongo server
mongoose.connect('mongodb+srv://omnistack10:omnistack10@cluster0-pceji.mongodb.net/week10?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
});

app.use(express.json()); // app can use JSON
app.use(routes); // app can use routes imported

app.listen(3333);