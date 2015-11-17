
function addInfoAboutFile (input, state, next) {

  var dialogInput = state.get('dialogInput');
  var newFileInfoText = state.get('newFileInfoText');
  dialogInput.file.copyright = newFileInfoText;
  // dialogInput.
  next(dialogInput);


};

export default addInfoAboutFile;
