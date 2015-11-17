import setFile from './../actions/setFile.js';
import uploadFile from './../actions/uploadFile.js';
import addInfoAboutFile from './../actions/addInfoAboutFile.js';

export default [
  setFile,
  [addInfoAboutFile, { // _TODO handle success (add loader) and error
    success: [],
    error: []
  }],
  [uploadFile, { // _TODO handle success (add loader) and error
    success: [],
    error: []
  }]
];
