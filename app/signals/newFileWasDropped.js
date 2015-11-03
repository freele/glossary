import setFile from './../actions/setFile.js';
import uploadFile from './../actions/uploadFile.js';

export default [
  setFile,
  [uploadFile, { // _TODO handle success (add loader) and error
    success: [],
    error: []
  }]
];
