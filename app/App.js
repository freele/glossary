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

var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();

const Dialog = require('material-ui/lib/Dialog');
const FlatButton = require('material-ui/lib/flat-button');

const TextField = require('material-ui/lib/text-field');



@Cerebral({
  showFileInfoDialog: ['showFileInfoDialog'],
  statements: ['statements'],
  newFileInfoText: ['newFileInfoText'],
  isSaving: ['isSaving'] // for later usage
}, {
  visibleStatements: ['visibleStatements']
})

class App extends React.Component {
  constructor() {
    console.log('constructor');
    super();
    this.handleDialogClose = this.handleDialogClose.bind(this);
    this.handleDialogSubmit = this.handleDialogSubmit.bind(this);

  }


  onClick(e) {
    return false;
  }

  renderImageDropZone(index) {
    return <ImageAndDropZone key={index} index={index}/>
  }

  handleDialogClose() {
    this.props.signals.newFileInfoDialogClosed();
  }
  handleDialogSubmit() {
    this.props.signals.newFileInfoDialogSubmitted();
  }

  onFileInfoChange(event) {
    this.props.signals.newFileInfoChanged(true, {
      text: event.target.value
    });
  }

  render() {

    let standardActions = [
      <FlatButton
        key={0}
        label="Cancel"
        secondary={true}
        onTouchTap={this.handleDialogClose} />,
      <FlatButton
        key={1}
        label="Submit"
        primary={true}
        onTouchTap={this.handleDialogSubmit} />
    ];

    return (
      <div className="u_h100">

        <div className="centralElements" onClick={this.onClick} >
          <CentralStatement/>
          <AddStatement/>
        </div>

          <Dialog
            ref="standardDialog"
            title="Source"
            actions={standardActions}
            actionFocus="submit"
            open={this.props.showFileInfoDialog}
            onRequestClose={this.handleDialogClose}>

            <TextField
              autoComplete="off"
              value={this.props.newFileInfoText}
              hintText="Source or author of the file"
              fullWidth={true}
              onChange={(e) => this.onFileInfoChange(e)}
            />
            
          </Dialog>


        <div className="imagesLayer">
          { Array.from(Array(4).keys()).map(this.renderImageDropZone) }
        </div>
      </div>
    );
  }
}

export default App;
