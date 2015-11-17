var mongoose = require("mongoose");
var Schema = mongoose.Schema;



var schema = new Schema({
  filename: {
    type: String,
    unique: true
  },
  mimetype: {
    type: String
  },
  encoding: {
    type: String
  },
  originalname: {
    type: String
  },
  created_at: {
    type: Date
  },
  updated_at: {
    type: Date
  },
  copyright: {
    type: String
  }
});

schema.pre('save', function(next){
  var now = new Date();
  this.updated_at = now;
  if ( !this.created_at ) {
    this.created_at = now;
  }
  next();
});


module.exports = mongoose.model("files", schema);
