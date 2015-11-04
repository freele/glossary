function shuffle(o){
    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
}

function fetchStatements (input, state, next) {
  fetch('/api/statement' + (input.search ? ('?search=' + input.search) : '') )
  .then(function(response){
    return response.json();  
  }).then(function(response){
    console.log('FETCHED STATEMENTS', response);
    if (Array.isArray(response)) {
      next.success(shuffle(response));
    } else {
      next.success([response]);
    }
    
  }).catch(function(err){
    console.log(err);
  })

};

export default fetchStatements;
