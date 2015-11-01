import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import controller from './controller.js';
import {Container} from 'cerebral-react';
import CerebralRouter from 'cerebral-router';

// import allTodosClicked from './signals/allTodosClicked.js';
// import newTodoTitleChanged from './signals/newTodoTitleChanged.js';
// import newTodoSubmitted from './signals/newTodoSubmitted.js';
// import removeTodoClicked from './signals/removeTodoClicked.js';
// import toggleCompletedChanged from './signals/toggleCompletedChanged.js';
// import toggleAllChanged from './signals/toggleAllChanged.js';
// import filterClicked from './signals/filterClicked.js';
// import clearCompletedClicked from './signals/clearCompletedClicked.js';
// import todoDoubleClicked from './signals/todoDoubleClicked.js';
import newStatementChanged from './signals/newStatementChanged.js';
import newStatementSubmitted from './signals/newStatementSubmitted.js';
// import recordClicked from './signals/recordClicked.js';
// import playClicked from './signals/playClicked.js';
// import stopClicked from './signals/stopClicked.js';

// controller.signal('allTodosClicked', allTodosClicked);
// controller.signal('newTodoTitleChanged', newTodoTitleChanged);
// controller.signal('newTodoSubmitted', newTodoSubmitted);
// controller.signal('removeTodoClicked', removeTodoClicked);
// controller.signal('toggleCompletedChanged', toggleCompletedChanged);
// controller.signal('toggleAllChanged', toggleAllChanged);
// controller.signal('filterClicked', filterClicked);
// controller.signal('clearCompletedClicked', clearCompletedClicked);
// controller.signal('todoDoubleClicked', todoDoubleClicked);
controller.signal('newStatementChanged', newStatementChanged);
controller.signal('newStatementSubmitted', newStatementSubmitted);
// controller.signal('recordClicked', recordClicked);
// controller.signal('playClicked', playClicked);
// controller.signal('stopClicked', stopClicked);

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
