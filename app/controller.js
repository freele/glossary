import Controller from 'cerebral';
import Model from 'cerebral-baobab';

const model = Model({
  nextRef: 0,
  url: '/',
  statements: {},
  newStatementText: '',
  isSaving: false
});

const services = {};

const computed = {
  // visibleTodos: function (get) {
  //   const todos = get(['todos']);
  //   const filter = get(['filter']);

  //   return Object.keys(todos).filter(function(key) {

  //     let todo = todos[key];
  //     return (
  //       filter === 'all' ||
  //       (filter === 'completed' && todo.completed) ||
  //       (filter === 'active' && !todo.completed)
  //     );

  //   }).map(function (key) {
  //     return todos[key];
  //   });
  // },
  // isAllChecked: function (get, getComputed) {
  //   let todos = getComputed(['visibleTodos']);

  //   return todos.filter(function(todo) {
  //     return !todo.completed;
  //   }).length === 0 && todos.length !== 0;
  // },
  // counts: function (get) {
  //   let todos = get(['todos']);
  //   let counts = Object.keys(todos).reduce(function(counts, key) {

  //     let todo = todos[key];

  //     if (todo.completed) {
  //       counts.completedCount++;
  //     } else if (!todo.completed) {
  //       counts.remainingCount++;
  //     }

  //     return counts;

  //   }, {
  //     completedCount: 0,
  //     remainingCount: 0
  //   });

  //   return {
  //     remainingCount: counts.remainingCount,
  //     completedCount: counts.completedCount
  //   };

  // }
};

export default Controller(model, services, computed);
