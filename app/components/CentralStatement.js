import React from 'react';
import classNames from 'classnames';
import {Decorator as Cerebral} from 'cerebral-react';

@Cerebral({
  statement: ['centralStatementRef']
}, {})
class CentralStatement extends React.Component {

  componentDidMount() {
    this.props.signals.centralStatementUpdated();
    this.props.signals.pageInited();

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

  onStatementClick(word) {
    console.log('Click info', word);
    this.props.signals.centralStatementUpdated();
  }

  renderWord(word, index) {
    return (
      <span>
        <span className="statement-word" key={index} onClick={() => this.onStatementClick(word)}>
          {word}
        </span>
        <span>
          {' '}
        </span>
      </span>
    );
  }

  render() {
    return (
      <div className="statement">
        <label>
          {this.props.statement ? this.props.statement.text.split(' ').map(this.renderWord.bind(this)) : ''}
        </label>
      </div>
    );

  }

}

export default CentralStatement;
