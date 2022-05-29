let mongoose = require('mongoose');
let schema = mongoose.Schema(
  {
    content : {
      type : "String",
      required : true
    }
  }
)
module.exports = mongoose.model('tasks', schema);