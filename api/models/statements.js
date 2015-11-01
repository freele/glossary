var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var schema = new Schema({
  text: {
    type: String,
    unique: true
  },
  created_at: {
    type: Date
  },
  updated_at: {
    type: Date
  }
});

schema.pre('save', function(next){
  now = new Date();
  this.updated_at = now;
  if ( !this.created_at ) {
    this.created_at = now;
  }
  next();
});

module.exports = mongoose.model("statements", schema);
