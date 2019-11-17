const express = require('express');
const router = express.Router();

function ioRouter(io) {
  io.on('connection', socket => {
    console.log(socket);
    io.emit('userConnected');

    socket.on('disconnect', () => {
      console.log('user disconnected');
    });

    socket.on('newMessage', msg => {
      io.emit('messageAdded', msg);
    });
  });

  return router;
}

module.exports = ioRouter;
