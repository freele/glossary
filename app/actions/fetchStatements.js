function saveStatement (args, state, next) {


  console.log('_DEBUG FETCH STATEMENTS');
  fetch('/api/statements/list')
  .then(function(response){
    return response.json();  
  }).then(function(response){
    console.log('_DEBUG FETCHED STATEMENTS: ', response);
    state.set('fetchedStatements', response);
    next.success({});
  }).catch(function(err){
    // console.log(err);
    console.log('err');
  })

};

export default saveStatement;
