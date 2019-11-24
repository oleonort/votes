import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import styled from 'styled-components';
import Header from './components/Header';
import Chat from './components/Chat';
import Login from './screens/authentication/Login';
import Register from './screens/authentication/Register';
import LoginOrRegister from './screens/authentication/LoginOrRegister';

const StyledApp = styled.div`
  color: #414042;
`;

const App = () => (
  <StyledApp>
    <BrowserRouter>
      <Header />
      <Route exact path="/chat">
        <Chat />
      </Route>
      <Route exact path="/login">
        <Login />
      </Route>
      <Route exact path="/register">
        <Register />
      </Route>
      <Route exact path="/">
        <LoginOrRegister />
      </Route>
    </BrowserRouter>
  </StyledApp>
);

export default App;
