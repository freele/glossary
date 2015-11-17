function setInitialImages (input, state, output) {

  let images = state.get('images');
  let imagesKeys = state.keys('images');
  let curImageUrl = state.get(['files', input.index, 'url']);

  // if (curImageUrl){
  //   let curImage = state.findWhere(['files'], {url: 'curImageUrl'});
  //   // images.shift()
  //   // Delete this image from images
  // }
  
  let randomImageKey = imagesKeys[Math.floor(Math.random()*imagesKeys.length)];
  let randomImage = state.get(['images', randomImageKey]);
  state.set(['files', input.index], {url: randomImage.filename});
};

export default setInitialImages;
