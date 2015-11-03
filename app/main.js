import './App.css';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import controller from './controller.js';
import {Container} from 'cerebral-react';
import CerebralRouter from 'cerebral-router';

import newStatementChanged from './signals/newStatementChanged.js';
import newStatementSubmitted from './signals/newStatementSubmitted.js';
import centralStatementUpdated from './signals/centralStatementUpdated.js';
import newFileWasDropped from './signals/newFileWasDropped.js';

controller.signal('newStatementChanged', newStatementChanged);
controller.signal('newStatementSubmitted', newStatementSubmitted);
controller.signal('centralStatementUpdated', centralStatementUpdated);
controller.signal('newFileWasDropped', newFileWasDropped);

// ROUTER
// const router = CerebralRouter(controller, {
//   '/': 'allTodosClicked',
//   '/:filter': 'filterClicked'
// }, {
//   baseUrl: '/todomvc'
// }).trigger();

// RENDER
ReactDOM.render(
  <Container controller={controller}>
    <App/>
  </Container>, document.querySelector('#app'));
