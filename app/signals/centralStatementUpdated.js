import setCentralStatement from './../actions/setCentralStatement.js';
import fetchStatements from './../actions/fetchStatements.js';
import setStatementError from './../actions/setStatementError.js';
import setFetchedStatements from './../actions/setFetchedStatements.js';

export default [
  [fetchStatements, {
  	success: [setFetchedStatements],
  	error: [setStatementError]
  }],
  setCentralStatement
];
