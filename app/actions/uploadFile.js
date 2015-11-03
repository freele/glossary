function uploadFile (input, state, next) {

  var path = ['statements', input.file];
  let statement = state.get(path);


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


};

export default uploadFile;
