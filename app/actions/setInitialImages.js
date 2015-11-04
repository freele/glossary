function setInitialImages (input, state, output) {
  console.log('SET INITIAL IMAGES', input);

  let images = state.get('images');

  state.set(['files', 0], {url: images[0].filename});
};

export default setInitialImages;
