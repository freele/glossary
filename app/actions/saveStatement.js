function saveStatement (args, state, next) {

  var path = ['statements', args.ref];
  let statement = state.get(path);

  // fetch('/api').then(function(response) {
  //   return response.json();
  // }).then(function(json){
  //   console.log('request succeeded with JSON response', json)
  // });

  console.log('_DEBUG STATEMENT TO SAVE', statement);
  fetch('/api/statement', {
    method: 'post',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(statement)
  }).then(function(result){
    next.success({
      id: Date.now() + parseInt(Math.random() * 1000)
    });    
  }).catch(function(err){
    console.log(err);
  })


  // Simulating posting the statement.data and get an ID from
  // the server. We resolve with the new id

  // setTimeout(function () {

  //   next.success({
  //     id: Date.now() + parseInt(Math.random() * 1000)
  //   });

  //   // Or error

  // }, 2000);

};

export default saveStatement;
