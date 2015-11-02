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


  render() {
    console.log('CentralStatement render');
    console.log(this.props.statement);
    return (
      <li className={null/*className*/}>
        <div className="view">
          <label onClick={null/*() => this.edit()*/}>
            {/*this.props.statement.text*/}
          </label>
        </div>
      </li>
    );

  }

}

export default CentralStatement;
