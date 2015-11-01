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

@Cerebral({
  title: ['title']
})
class App extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <input
          type="text"
          value={this.props.title}
          onChange={(e) => this.props.signals.titleChanged({title: e.target.value})}
        />
      </div>
    );
  }
}

export default App;
