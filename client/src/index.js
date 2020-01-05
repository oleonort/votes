import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import 'font-awesome/css/font-awesome.min.css';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min';
import './index.css';

console.log('wass here');
window.renderClient = (containerId, history) => {
    ReactDOM.render(<App history={history} />, document.getElementById(containerId));
};

window.unmountClient = containerId => {
    ReactDOM.unmountComponentAtNode(document.getElementById(containerId));
};
