const express = require('express');
const userRoutes = require('./routes/userRoutes');
var http = require('http');
const socketIO = require('socket.io');
var path = require('path');

var app = express()


const publicPath = path.join(__dirname, '../public');
app.use(express.static(publicPath));
var server = require('http').createServer(app)

var ioModule = require('./middleware/io');
ioModule.initialize(server);
var io = ioModule.io();

app.use(userRoutes);


var PORT = process.env.PORT || '80';

server.listen(PORT, () => {
  console.log('Started on port: ' + PORT);
});

module.exports = {
  app
};