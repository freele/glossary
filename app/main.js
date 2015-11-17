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
import newFileInfoDialogSubmitted from './signals/newFileInfoDialogSubmitted.js';
import newFileInfoDialogClosed from './signals/newFileInfoDialogClosed.js';
import newFileInfoChanged from './signals/newFileInfoChanged.js';
import pageInited from './signals/pageInited.js';
import imageWasClicked from './signals/imageWasClicked.js';

controller.signal('newStatementChanged', newStatementChanged);
controller.signal('newStatementSubmitted', newStatementSubmitted);
controller.signal('centralStatementUpdated', centralStatementUpdated);
controller.signal('newFileWasDropped', newFileWasDropped);
controller.signal('newFileInfoDialogSubmitted', newFileInfoDialogSubmitted);
controller.signal('newFileInfoDialogClosed', newFileInfoDialogClosed);
controller.signal('newFileInfoChanged', newFileInfoChanged);
controller.signal('pageInited', pageInited);
controller.signal('imageWasClicked', imageWasClicked);

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
