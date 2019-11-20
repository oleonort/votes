import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import styled from 'styled-components';
import Header from './components/Header';
import Chat from './components/Chat';


const App = () => (
  <>
    <BrowserRouter>
      <Header />
      <Route exact path="/chat">
        <Chat />
      </Route>
    </BrowserRouter>
  </>
);

export default App;
