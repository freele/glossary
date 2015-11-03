var mkdirp = require('mkdirp');
var fs = require('fs');

var model = require('../models/files.js');

/**
 * carController.js
 *
 * @description :: Server-side logic for managing cars.
 */
module.exports = {
    save: function(req, res) {
        // var file = req.files[0];
/*
{   fieldname: 'file',
    originalname: 'Screen Shot 2015-09-02 at 13.37.22.png',
    encoding: '7bit',
    mimetype: 'image/png',
    destination: '/var/glossary/uploads',
    filename: '6941d37b7a7d1952fd9de666f024bba1',
    path: '/var/glossary/uploads/6941d37b7a7d1952fd9de666f024bba1',
    size: 10228 }
*/
        // console.log('REQ BODY', req.body, req.file);
        file = req.file;
        file.copyright = req.body.copyright;
        var file = new model(file);
    
        file.save(function(err, file){
            if(err) {
                return res.status(500).json(500, {
                    message: 'Error saving file',
                    error: err
                });
            }
            return res.json({
                message: 'saved',
                _id: file._id
            });
        });
    },
 
};