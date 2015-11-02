function shuffle(o){
    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
}

function fetchStatements (args, state, next) {
  fetch('/api/statement')
  .then(function(response){
    return response.json();  
  }).then(function(response){
    console.log('FETCHED STATEMENTS', response);
    next.success(shuffle(response));
  }).catch(function(err){
    console.log(err);
  })

};

export default fetchStatements;
