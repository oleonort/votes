(function() {
  var socket = io();

  document.querySelector('form').onsubmit = function(event) {
    event.preventDefault();
    var input = document.getElementById('m');
    if (input.value) socket.emit('newMessage', input.value);
    input.value = '';
    return false;
  };

  socket.on('messageAdded', function(msg) {
    var messages = document.getElementById('messages');
    messages.innerHTML = messages.innerHTML + '<li>' + msg + '</li>'
  });

  socket.on('userConnected', function() {
    var messages = document.getElementById('messages');
    messages.innerHTML = messages.innerHTML + '<li>User connected..</li>'
  })
})();
