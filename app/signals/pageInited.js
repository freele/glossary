import fetchImages from './../actions/fetchImages.js';
import setImages from './../actions/setImages.js';
import setStatementError from './../actions/setStatementError.js';
import setInitialImages from './../actions/setInitialImages.js';

export default [
  [fetchImages, {
  	success: [setImages],
  	error: [setStatementError]
  }],
  setInitialImages
];

