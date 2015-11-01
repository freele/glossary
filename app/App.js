// import React from 'react';
// import styles from './App.css';

// export default class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {test: 'foo'};
//   }
//   render() {
//     return (
//       <div className={styles.app}>
//         bar test
//       </div>
//     );
//   }
// }


import React from 'react';
import {Decorator as Cerebral} from 'cerebral-react';
import AddStatement from './components/AddStatement.js';
import StatementsList from './components/StatementsList.js';
// import TodosFooter from './components/TodosFooter.js';

@Cerebral({
  statements: ['statements'],
  isSaving: ['isSaving'] // for later usage
}, {
  visibleStatements: ['visibleStatements']
})
class App extends React.Component {
  render() {
    return (
      <section id="statementapp">
        <header id="header">
          <h1>statements</h1>
          <AddStatement/>
        </header>

        {this.props.visibleStatements.length ? <StatementsList/> : null}
        {/*Object.keys(this.props.todos).length ? <TodosFooter/> : null*/}
      </section>
    );
  }
}

export default App;
