

function addInfoAboutFile (input, state, next) {
  console.log('RUN addInfoToFile');

  setTimeout(function () {

    next.success({
      id: Date.now() + parseInt(Math.random() * 1000)
    });

    // Or error

  }, 2000);

};

export default addInfoAboutFile;
