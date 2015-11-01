import React from 'react';
import classNames from 'classnames';
import {Decorator as Cerebral} from 'cerebral-react';

@Cerebral()
class Statement extends React.Component {
  // edit() {

  //   if (this.props.statement.$isSaving) {
  //     return;
  //   }

  //   this.props.signals.statementDoubleClicked({
  //     ref: this.props.statement.$ref
  //   });

  //   // FOCUS fix
  //   setTimeout(() => {
  //     var input = this.refs.edit.getDOMNode();
  //     input.focus();
  //     input.value = input.value;
  //   }, 0);

  // }
  // onStatementChange(event) {
  //   this.props.signals.newTitleChanged({
  //     ref: this.props.statement.$ref,
  //     title: event.target.value
  //   });
  // }
  // onNewTitleSubmit(event) {
  //   event.preventDefault();
  //   this.refs.edit.getDOMNode().blur();
  // }
  // onCompletedToggle() {
  //   this.props.signals.toggleCompletedChanged({
  //     ref: this.props.statement.$ref
  //   });
  // }
  // onRemoveClick() {
  //   this.props.signals.removeStatementClicked({
  //     ref: this.props.statement.$ref
  //   });
  // }
  // onNewTitleBlur() {
  //   this.props.signals.newTitleSubmitted({
  //     ref: this.props.statement.$ref
  //   });
  // }

  render() {

    // var className = classNames({
    //   completed: this.props.statement.completed,
    //   editing: this.props.statement.$isEditing
    // });
    return (
      <li className={null/*className*/}>
        <div className="view">
          {/*
            this.props.statement.$isSaving ?
            null :
            <input
              className="toggle"
              type="checkbox"
              disabled={this.props.statement.$isSaving}
              onChange={() => this.onCompletedToggle()}
              checked={this.props.statement.completed}/>
          */}
          <label onDoubleClick={null/*() => this.edit()*/}>
            {this.props.statement.text} {this.props.statement.$isSaving ?
              <small>(saving)</small> :
              null
            }
          </label>
          {/*
            this.props.statement.$isSaving ?
            null :
            <button
              className="destroy"
              onClick={() => this.onRemoveClick()}/>
          */}
        </div>
        {/*
        <form onSubmit={(e) => this.onNewTitleSubmit(e)}>
          <input
            ref="edit"
            className="edit"
            value={this.props.statement.$newTitle || this.props.statement.title}
            onBlur={() => this.onNewTitleBlur()}
            onChange={(e) => this.onNewTitleChange(e)}
          />
        </form>
      */}
      </li>
    );

  }

}

export default Statement;
