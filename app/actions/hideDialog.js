

function hideDialog (input, state, next) {
  var dialogInput = state.get('dialogInput');
  
  state.set('showFileInfoDialog', false);

  next(dialogInput);
};

export default hideDialog;
