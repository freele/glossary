

function showDialog (input, state, next) {
  console.log('RUN addInfoToFile');

  state.set('dialogInput', input);
  state.set('showFileInfoDialog', true);

};

export default showDialog;
