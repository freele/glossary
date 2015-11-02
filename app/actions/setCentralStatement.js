function setCentralStatement (args, state) {

  let fetchedStatements = state.get('fetchedStatements');

  let centralStatementRef = fetchedStatements[0];
  
  state.set(['centralStatementRef'], centralStatementRef);

};

export default setCentralStatement;
