var express = require('express');
var multer  = require('multer')
var upload = multer()

module.exports = function(app) {
  // Closed API (distribut developers only) ////////////////////////////
  // Admin account Routes
    console.log('USE ROUTES');


    var mongoose = require('mongoose');
    var host = process.env.MONGO_PORT_27017_TCP_ADDR || 'localhost';
    var port = process.env.MONGO_PORT_27017_TCP_PORT || 27017;
    var dbName = 'glossary';
    mongoose.connect('mongodb://' + host + ':' + port + '/' + dbName);

    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function (callback) {
    // yay!
       console.log('connected to mongodb at ' + host + ' , DB: ' + dbName);
    });

    app.use(express.static('/var/glossary/uploads'));

    var bodyParser = require('body-parser');
    app.use(bodyParser.json()); // for parsing application/json

    var ctrlStatements = require('./controllers/statements.js');
    var ctrlFiles = require('./controllers/files.js');

    app.route('/api')
       .get(function(req, res, next) {
         console.log('TEST API');
         res.json({response: 'TEST API'});
    });

    // var cpUpload = upload.fields([{ name: 'file', maxCount: 1 }])
    app.post('/api/file', upload.single('file'), ctrlFiles.save);
    app.get('/api/file', ctrlFiles.list);

    app.get('/api/statement/random', ctrlStatements.random);
    app.get('/api/statement/', ctrlStatements.list);
    app.get('/api/statement/:id', ctrlStatements.show);
    app.post('/api/statement/', ctrlStatements.create);
    // app.put('/api/statement/:id', ctrlStatements.update(req, res));
    app.delete('/api/statement/:id', ctrlStatements.remove);


}