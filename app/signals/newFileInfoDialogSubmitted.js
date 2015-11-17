import setFile from './../actions/setFile.js';
import uploadFile from './../actions/uploadFile.js';
import hideDialog from './../actions/hideDialog.js';

export default [
  hideDialog,
  setFile,
  [uploadFile, { // _TODO handle success (add loader) and error
    success: [],
    error: []
  }]
];
