var mkdirp = require('mkdirp');
var randomstring = require('randomstring');
var fs = require('fs');

var model = require('../models/files.js');

var sharp = require('sharp');

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
        // console.log('REQ BODY0', req.body, req.file);
        var file = req.file;
        file.copyright = req.body.copyright;
        file.filename = randomstring.generate({
            length: 12,
            charset: 'alphabetic'
        });
       
        // console.log('FILE', file);
        sharp(file.buffer)
            .resize(800)
            .quality(80)
            .withoutEnlargement()
            .toFile('/var/glossary/uploads/' + file.filename, function(err) {
                // output.jpg is a 300 pixels wide and 200 pixels high image
                // containing a scaled and cropped version of input.jpg

                // console.log('REQ BODY1 err?', err);


                file.buffer = undefined;
                file = new model(file);
                file.save(function(err, file){
                    if(err) {
                        return res.status(500).json(500, {
                            message: 'Error saving file information in the database',
                            error: err
                        });
                    }
                    return res.json({
                        message: 'saved',
                        _id: file._id
                    });
                });

            });
    

    },
    list: function(req, res) {
        model.
        find().
        lean().
        exec(function(err, images){
            if(err) {
                return res.json(500, {
                    message: 'Error getting statement.'
                });
            }
            return res.json(images);
        });
    }
 
};