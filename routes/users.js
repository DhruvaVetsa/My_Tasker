let mongoose = require('mongoose');
// mongoose.connect('mongodb://127.0.0.1:27017/task');
// mongoose.connect('mongodb+srv://DhruvaV-123:Deens@2021@cluster0.yqf1n.mongodb.net/myTasker?retryWrites=true&w=majority');
mongoose.connect('mongodb+srv://Chandana:cvml462ccl4*@mytasker.wknnc.mongodb.net/myTasker0022?retryWrites=true&w=majority');

let schema = mongoose.Schema(
  {
    content : {
      type : "String",
      required : true
    }
  }
)
module.exports = mongoose.model('tasks', schema);