import React from 'react';
import axios from 'axios';
import './app.css';

const App = () => {
  const fetchTest = () => {
    axios.get('/test').then(res => console.log(res));
  };

  return (
    <div className="app">
      <header className="app-header">
        <button onClick={fetchTest}>Fetch /test</button>
      </header>
    </div>
  );
};

export default App;
