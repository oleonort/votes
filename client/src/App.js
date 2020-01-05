import React from 'react';
import { Router, Route } from 'react-router-dom';
import styled from 'styled-components';
import { createBrowserHistory } from 'history';
import Header from './components/Header';
import Chat from './components/Chat';
import Login from './screens/authentication/Login';
import Register from './screens/authentication/Register';
import LoginOrRegister from './screens/authentication/LoginOrRegister';

const defaultHistory = createBrowserHistory();

const StyledApp = styled.div`
  color: #414042;
`;

const App = ({ history = defaultHistory }) => (
  <StyledApp>
    <Router history={history}>
      <Header />
      <Route exact path="/chat">
        <Chat />
      </Route>
      <Route exact path="*/login">
        <Login />
      </Route>
      <Route exact path="/register">
        <Register />
      </Route>
      <Route exact path="/">
        <LoginOrRegister />
      </Route>
    </Router>
  </StyledApp>
);

export default App;
