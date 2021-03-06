function setInitialImages (input, state, output) {
  console.log('SET INITIAL IMAGES', input);

  let images = state.get('images');

  Array.from(Array(4).keys()).map(function(index){
    if (images[index]){
      if (!state.get(['files', index, 'url'])){
        state.set(['files', index], {url: images[index].filename});
      }
    }
  });
  
};

export default setInitialImages;
