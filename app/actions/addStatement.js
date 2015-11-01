function addStatement (args, state, output) {

  var ref = state.get('nextRef');
  let statement = {
    $ref: ref,
    $isSaving: true,
    title: state.get('newStatementText'),
    completed: false
  };

  state.set(['statements', ref], statement);
  state.set('newStatementText', '');
  state.set('nextRef', ref + 1);

  output({
    ref: ref
  });

};

export default addStatement;
