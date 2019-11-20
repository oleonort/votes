import React, { useEffect, useState, useRef } from 'react';
import uuidv1 from 'uuid/v1';
import styled from 'styled-components';
import io from 'socket.io-client';

const StyledChat = styled.div`
  margin-bottom: 66px;
  width: 100%;
`;

const StyledForm = styled.form`
  position: fixed;
  bottom: 0;
  background: powderblue;
  padding: 10px 0;
  width: 100%;
  
  .controls {
    max-width: 1280px;
    margin: 0 auto;
    display: flex;
    
    input.message {
      margin: 0 30px;
    }
    
    button {
      align-self: center;
      margin-right: 20px;
    }
  }
`;

const StyledList = styled.ul`
  margin: 0 auto;
  list-style-type: none;
  margin: 0 auto;
  padding: 0;
  max-width: 1280px;
  
  li {
    padding: 5px 20px;
    word-break: break-word;
  }
`;

const Chat = () => {
  const [socketInstance, setSocket] = useState(undefined);
  const [inputValue, setInputValue] = useState(undefined);
  const [messages, setMessages] = useState([]);
  const messagesRef = useRef(null);

  useEffect(() => {
    if (socketInstance) return;
    const socket = io('/chat');
    setSocket(socket);
    const setMessage = msg => setMessages(prev => [...prev, msg]);
    socket.on('messageAdded', setMessage);
    socket.on('userConnected', () => setMessage('User connected..'));
    socket.on('userDisconnected', () => setMessage('User left..'));
    socket.on('getUser', () => socket.emit('setUser', 'test'));
  }, [socketInstance]);

  useEffect(() => {
    window.scrollTo(0, document.body.scrollHeight);
  }, [messages]);

  const addMessage = event => {
    event.preventDefault();

    if (!inputValue) return;
    socketInstance.emit('newMessage', inputValue);
    setMessages(prev => [...prev, inputValue]);
    setInputValue('');
  };

  return (
    <StyledChat>
      <StyledList ref={messagesRef} id="messages">
        {messages.map(message => <li key={uuidv1()}>{message}</li>)}
      </StyledList>
      <StyledForm onSubmit={addMessage}>
        <div className="controls">
          <input
            type="text"
            className="message"
            onChange={({ target }) => setInputValue(target.value)}
            value={inputValue}
            autoComplete="off"
          />
          <button className="btn" type="submit">Send</button>
        </div>
      </StyledForm>
    </StyledChat>
  )
};

export default Chat;
