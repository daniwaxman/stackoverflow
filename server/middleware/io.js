var socketIO = require('socket.io');
var io = null;

exports.io = function() {
  return io;
};

exports.initialize = function(server) {
  io = socketIO(server);

  io.on('connection', (socket) => {
    console.log('user connected')

    socket.emit('userName');

    socket.on('hello', (msg) => {
      console.log('message: ' + msg);
    });

    socket.on('disconnect', () => {
      console.log('user disconnected');
    });

  });
};