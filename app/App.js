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
  onDrop(e) {
    console.log('PREVENT DROP');
    return false;
    e.preventDefault();
  }
  onClick(e) {
    console.log('PREVENT CLICK');
    return false;
    e.preventDefault();
  }

  renderImageDropZone(index) {
    return <ImageAndDropZone key={index} index={index}/>
  }

  render() {
    return (
      <div className="u_h100">
        <div className="centralElements" onDrop={this.onDrop} onClick={this.onClick} >
          <CentralStatement/>
          <AddStatement/>
        </div>

        <div className="imagesLayer">
          { Array.from(Array(4).keys()).map(this.renderImageDropZone) }
        </div>
      </div>
    );
  }
}

export default App;
