import addStatement from './../actions/addStatement.js';
import saveStatement from './../actions/saveStatement.js';
import setSaving from './../actions/setSaving.js';
import unsetSaving from './../actions/unsetSaving.js';
import updateStatement from './../actions/updateStatement.js';
import setStatementError from './../actions/setStatementError.js';

export default [
  addStatement,
  setSaving,
  [
    saveStatement, {
      success: [updateStatement],
      error: [setStatementError]
    }
  ],
  unsetSaving
];