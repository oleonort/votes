(function() {
  var socket = io('/chat');
  var messages = document.getElementById('messages');

  document.querySelector('form').onsubmit = function(event) {
    event.preventDefault();
    var input = document.getElementById('m');
    if (input.value) {
      socket.emit('newMessage', input.value);
      messages.innerHTML = messages.innerHTML + '<li>' + input.value + '</li>'
    }
    input.value = '';
    return false;
  };

  socket.on('messageAdded', function(msg) {
    messages.innerHTML = messages.innerHTML + '<li>' + msg + '</li>'
  });

  socket.on('userConnected', function() {
    var messages = document.getElementById('messages');
    messages.innerHTML = messages.innerHTML + '<li>User connected..</li>'
  });

  socket.on('getUser', function() {
    socket.emit('setUser', 'test');
  });

  socket.on('userDisconnected', function() {
    var messages = document.getElementById('messages');
    messages.innerHTML = messages.innerHTML + '<li>User left..</li>'
  });
})();
