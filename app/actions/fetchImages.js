function shuffle(o){
    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
}

function fetchImages (input, state, next) {
  console.log('fetchImages', input);
  fetch('/api/file' )
  .then(function(response){
    return response.json();  
  }).then(function(response){
    console.log('FETCHED FILES DATA', response);
    next.success(shuffle(response));
  }).catch(function(err){
    console.log(err);
  })

};

export default fetchImages;
