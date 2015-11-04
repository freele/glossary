function setFile (input, state, output) {
  console.log('SET FILE', input);
  state.set(['files', input.index], {url: input.file.preview});
};

export default setFile;
