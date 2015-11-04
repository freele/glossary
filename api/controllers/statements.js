var model = require('../models/statements.js');
 
/**
 * carController.js
 *
 * @description :: Server-side logic for managing cars.
 */

var moduleExports = module.exports = {
    list: function(req, res) {
        var query;
        if (req.query.search){
            query = { $text: {$search: req.query.search } };
        }

        var self = this;

        model.
        find(query).
        limit(req.query.limit/* || 10*/).
        exec(function(err, statements){
            if(err) {
                return res.json(500, {
                    message: 'Error getting statement.'
                });
            }
            if (statements.length === 0 || statements.length === 1) {
                return moduleExports.random(req, res);
            } else {
                return res.json(statements);
            }
        });
    },

    random: function(req, res) {
        model.random(function(err, statement){
            if(err) {
                return res.json(500, {
                    message: 'Error getting statement.'
                });
            }
            return res.json(statement);
        });
    },

    show: function(req, res) {
        var id = req.params.id;
        model.findOne({_id: id}, function(err, statements){
            if(err) {
                return res.json(500, {
                    message: 'Error getting statements.'
                });
            }
            if(!statements) {
                return res.json(404, {
                    message: 'No such statements'
                });
            }
            return res.json(statements);
        });
    },
 
    create: function(req, res) {
        var text = req.body.text;
        var statement = new model({
            text: text
        });
 
        statement.save(function(err, statement){
            if(err) {
                return res.json(500, {
                    message: 'Error saving statement',
                    error: err
                });
            }
            return res.json({
                message: 'saved',
                _id: statement._id
            });
        });
    },
 
    // update: function(req, res) {
    //     var id = req.params.id;
    //     model.findOne({_id: id}, function(err, statement){
    //         if(err) {
    //             return res.json(500, {
    //                 message: 'Error saving statement',
    //                 error: err
    //             });
    //         }
    //         if(!statement) {
    //             return res.json(404, {
    //                 message: 'No such statement'
    //             });
    //         }
 
    //         statement.color =  req.body.color ? req.body.color : statement.color;
    //         statement.door =  req.body.door ? req.body.door : statement.door;
            
    //         statement.save(function(err, statement){
    //             if(err) {
    //                 return res.json(500, {
    //                     message: 'Error getting statement.'
    //                 });
    //             }
    //             if(!statement) {
    //                 return res.json(404, {
    //                     message: 'No such statement'
    //                 });
    //             }
    //             return res.json(statement);
    //         });
    //     });
    // },

    remove: function(req, res) {
        var id = req.params.id;
        model.findByIdAndRemove(id, function(err, statement){
            if(err) {
                return res.json(500, {
                    message: 'Error getting statement.'
                });
            }
            return res.json(statement);
        });
    }
};