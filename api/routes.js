module.exports = function(app) {
  // Closed API (distribut developers only) ////////////////////////////
  // Admin account Routes
    console.log('USE ROUTES');


    var mongoose = require('mongoose');
    var host = 'localhost';
    var dbName = 'glossary';
    mongoose.connect('mongodb://' + host + '/' + dbName);
    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function (callback) {
    // yay!
       console.log('connected to mongodb at ' + host + ' , DB: ' + dbName);
    });

    var bodyParser = require('body-parser');
    app.use(bodyParser.json()); // for parsing application/json

    var ctrlStatements = require('./controllers/statements.js');

    app.route('/api')
       .get(function(req, res, next) {
         console.log('TEST API');
         res.json({response: 'TEST API'});
    });

    app.get('/api/statement/random', ctrlStatements.random);
    app.get('/api/statement/', ctrlStatements.list);
    app.get('/api/statement/:id', ctrlStatements.show);
    app.post('/api/statement/', ctrlStatements.create);
    // app.put('/api/statement/:id', ctrlStatements.update(req, res));
    app.delete('/api/statement/:id', ctrlStatements.remove);


}