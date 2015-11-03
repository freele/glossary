var mongoose = require("mongoose");
var Schema = mongoose.Schema;



var schema = new Schema({
  filename: {
    type: String,
    unique: true
  },
  mimetype: {
    String
  },
  encoding: {
    String
  },
  originalname: {
    String
  },
  created_at: {
    Date
  },
  updated_at: {
    Date
  },
  copyright: {
    String
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
