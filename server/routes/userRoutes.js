const express = require('express');
var socket = require('../middleware/io').io();
var app = module.exports = express();

app.get('/user/:id', (req, res) => {
  var user = req.params.id;

  socket.emit('userName')
  res.status(200).send(user);

});