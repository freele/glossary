import React from 'react';
import {Decorator as Cerebral} from 'cerebral-react';

@Cerebral({
  isSaving: ['isSaving'],
  newStatementText: ['newStatementText']
})
class AddStatement extends React.Component {
  onFormSubmit(event) {
    event.preventDefault();
    this.props.signals.newStatementSubmitted();
  }

  onNewStatementChange(event) {
    this.props.signals.newStatementChanged(true, {
      title: event.target.value
    });
  }

  render() {
    return (
      <form id="statement-form" onSubmit={(e) => this.onFormSubmit(e)}>
        <input
          id="new-statement"
          autoComplete="off"
          placeholder="Enter new statement"
          disabled={this.props.isSaving}
          value={this.props.newStatementText}
          onChange={(e) => this.onNewStatementChange(e)}
        />
      </form>
    );
  }

}

export default AddStatement;
