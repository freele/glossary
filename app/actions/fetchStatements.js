function fetchStatements (args, state, next) {


  fetch('/api/statement')
  .then(function(response){
    return response.json();  
  }).then(function(response){
    console.log('FETCHED STATEMENTS', response);
    next.success(response);
  }).catch(function(err){
    console.log(err);
  })

};

export default fetchStatements;
