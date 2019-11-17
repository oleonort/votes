const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const socketio = require('socket.io');

const ioRouter = require('./routes/io');
const chatRouter = require('./routes/chat');
const votesRouter = require('./routes/votes');

const app = express();

// Set public folder
const clientPublicPath = path.join(__dirname, 'client/public');
app.use(express.static(clientPublicPath));

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Enable CORS
app.use(cors());

const port = 3000;

// Start server and save ref to const fot socket io
const server  = app.listen(process.env.PORT || port, () => (
  console.log(`Server started on port ${port}`
)));

// init socket io
const io = socketio(server);

app.set('clientPublicPath', clientPublicPath);
// Using routes
app.use('/io', ioRouter(io));
app.use('/chat', chatRouter);
app.use('/votes', votesRouter);