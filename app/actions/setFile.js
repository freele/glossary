function setFile (input, state, output) {
  console.log('SET FILE', input);
  state.set(['files', input.index], input.file);
};

export default setFile;
