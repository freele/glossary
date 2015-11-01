var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var schema = new Schema({
  text: {
    type: String,
    unique: true
  },
  created_at: {
    type: Date
  }
});

module.exports = mongoose.model("statements", schema);
