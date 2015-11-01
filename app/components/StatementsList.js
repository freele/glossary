import React from 'react';
import Statement from './Statement.js';
import {Decorator as Cerebral} from 'cerebral-react';

@Cerebral({}, {
  statements: ['visibleStatements']
})
class StatementsList extends React.Component {
  renderStatement(statement, index) {
    return <Statement key={index} index={index} statement={statement}/>
  }

  render() {
    return (
      <section id="main">
        <ul id="statement-list">
          {this.props.statements.map(this.renderStatement.bind(this))}
        </ul>
      </section>
    );
  }

}

export default StatementsList;
