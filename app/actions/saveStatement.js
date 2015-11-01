function saveStatement (args, state, next) {

  let statement = state.get('statements', args.ref);

  // Simulating posting the statement.data and get an ID from
  // the server. We resolve with the new id
  setTimeout(function () {

    next.success({
      id: Date.now() + parseInt(Math.random() * 1000)
    });

    // Or error

  }, 2000);

};

export default saveStatement;
