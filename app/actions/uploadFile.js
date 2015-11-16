function uploadFile (input, state, next) {
  console.log('RUN uploadFile');
  var data = new FormData()
  data.append('file', input.file)
  data.append('copyright', 'empty')

  fetch('/api/file', {
    method: 'post',
    body: data
  }).then(function(result){
    next.success({
      id: Date.now() + parseInt(Math.random() * 1000)
    });    
  }).catch(function(err){
    console.log(err);
  })

};

export default uploadFile;
