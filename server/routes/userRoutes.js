
module.exports = function (app, socketio) {
  app.get('/user/:id', (req, res) => {
      var user = req.params.id;

    socketio.emit('hello', 'hi! guys');
    res.status(200).send(user);

  });
}