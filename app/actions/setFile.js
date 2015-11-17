function setFile (input, state, next) {

  state.set(['files', input.index], {url: input.file.preview});

};

export default setFile;
