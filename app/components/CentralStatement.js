import React from 'react';
import classNames from 'classnames';
import {Decorator as Cerebral} from 'cerebral-react';

@Cerebral({
  statement: ['centralStatementRef']
}, {})
class CentralStatement extends React.Component {

  componentDidMount() {
    console.log('CentralStatement did mount');
    console.log(this.props.statement);
    this.props.signals.centralStatementUpdated();

    // $.get(this.props.source, function(result) {
    //   var lastGist = result[0];
    //   if (this.isMounted()) {
    //     this.setState({
    //       username: lastGist.owner.login,
    //       lastGistUrl: lastGist.html_url
    //     });
    //   }
    // }.bind(this));
  }

  onStatementClick() {
    
    this.props.signals.centralStatementUpdated();
  }

  render() {
    console.log('CentralStatement render');
    console.log(this.props.statement);
    return (
      <div className="view">
        <label onClick={(e) => this.onStatementClick(e)}>
          {this.props.statement ? this.props.statement.text : ''}
        </label>
      </div>
    );

  }

}

export default CentralStatement;
