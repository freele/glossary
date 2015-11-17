import Controller from 'cerebral';
import Model from 'cerebral-baobab';

const model = Model({
  nextRef: 0,
  url: '/',
  statements: {},
  fetchedStatements: {},
  centralStatement: {},
  files: {},
  newStatementText: '',
  images: {},
  isSaving: false,
  showFileInfoDialog: false,
  newFileInfoText: '',
  dialogInput: {}
});

const services = {
};

const computed = {
  visibleStatements: function (get) {
    const statements = get(['statements']);
    return Object.keys(statements).map(function (key) {
      return statements[key];
    });

    // return statements.map(function (key) {
    //   return statements[key];
    // }; // for debug and test purposes a bit simplified
    // const filter = get(['filter']);

    // return Object.keys(todos).filter(function(key) {

    //   let todo = todos[key];
    //   return (
    //     filter === 'all' ||
    //     (filter === 'completed' && todo.completed) ||
    //     (filter === 'active' && !todo.completed)
    //   );

    // }).map(function (key) {
    //   return todos[key];
    // });
  },
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
