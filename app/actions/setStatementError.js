function setStatementError (input, state) {

  console.log('setStatementError', setStatementError);
  var path = ['statements', input.ref];

  let statement = state.get(path);

  state.merge(path, {
    id: args.id,
    $isSaving: false,
    $error: input.error
  });

};

export default setStatementError;
