const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const socketio = require('socket.io');

const ioRouter = require('./routes/io');

const app = express();

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Enable CORS
app.use(cors());

const port = 5000;

// Start server and save ref to const fot socket io
const server  = app.listen(process.env.PORT || port, () => (
  console.log(`Server started on port ${port}`
)));

if (process.env.NODE_ENV === 'production') {
  // Express will serve up production assets
  app.use(express.static('client/build'));

  // Express will serve up the index.html file
  // if it doesn't recognize the route (needed for client side routing)
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

// init socket io
const io = socketio(server);

// Using routes
app.use('/io', ioRouter(io));

// TODO: this is for test, remove once not needed
// app.use('/api/test', (req, res) => {
//   res.send('test');
// });