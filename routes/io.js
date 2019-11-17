const express = require('express');
const router = express.Router();

function ioRouter(io) {
  io.on('connection', socket => {
    console.log('io connected');

    socket.on('disconnect', () => {
      console.log('user disconnected');
    });

    socket.on('newMessage', msg => {
      console.log('message: ' + msg);
    });
  });

  return router;
}

module.exports = ioRouter;
