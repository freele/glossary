

function showDialog (input, state, next) {
  console.log('RUN addInfoToFile');

  state.set('showFileInfoDialog', true);

};

export default showDialog;
