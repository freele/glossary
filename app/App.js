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
// import StatementFooter from './components/StatementFooter.js';
import CentralStatement from './components/CentralStatement.js';
import ImageAndDropZone from './components/ImageAndDropZone.js';

@Cerebral({
  statements: ['statements'],
  isSaving: ['isSaving'] // for later usage
}, {
  visibleStatements: ['visibleStatements']
})
class App extends React.Component {
  renderImageDropZone(index) {
    return <ImageAndDropZone key={index} index={index}/>
  }


  render() {
    return (
      <section id="statementapp" className="app">
        <CentralStatement/>
        <AddStatement/>
        {this.props.visibleStatements.length ? <StatementsList/> : null}
        {this.renderImageDropZone(0)}
        {/*Object.keys(this.props.todos).length ? <TodosFooter/> : null*/}
      </section>
    );
  }
}

export default App;
