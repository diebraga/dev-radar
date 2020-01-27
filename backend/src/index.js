const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http');


const routes = require('./routes');
const { setupWebsocket } = require('./websocket');

// var app to connect app
const app = express();
const server = http.Server(app);

setupWebsocket(server);

// connect mongo server
mongoose.connect('mongodb+srv://omnistack10:omnistack10@cluster0-pceji.mongodb.net/week10?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
});

app.use(cors(/* {origin: 'http://localhost:3000'} */));
app.use(express.json()); // app can use JSON
app.use(routes); // app can use routes imported

server.listen(3333);