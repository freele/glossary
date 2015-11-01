function updateStatement (args, state) {

  var path = ['statements', args.ref];

  let statement = state.get(path);

  console.log('Update statement');
  state.merge(path, {
    id: args.id,
    $isSaving: false
  });

};

export default updateStatement;
