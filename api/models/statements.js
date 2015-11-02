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
  var now = new Date();
  this.updated_at = now;
  if ( !this.created_at ) {
    this.created_at = now;
  }
  next();
});

schema.statics.random = function(next) {
  this.count(function(err, count) {
    if (err) return next(err);
    var rand = Math.floor(Math.random() * count);
    this.findOne().skip(rand).exec(next);
  }.bind(this));
};

module.exports = mongoose.model("statements", schema);
