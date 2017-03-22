const express = require('express');
const userRoutes = require('./routes/userRoutes');
var ioModule = require('./middleware/io');
var socket_io = require('socket.io');
var path = require('path');
var PORT = process.env.PORT || '3000';
var app = express();


const publicPath = path.join(__dirname, '../public');
app.use(express.static(publicPath));
var server = app.listen(PORT, () => {
  console.log('Started on port: ' + PORT);
});


io = socket_io.listen(server);


ioModule.initialize(io);
userRoutes(app, io);