var mongoose = require('mongoose');

var todoSchema = mongoose.Schema({
  completed: {
    type: Boolean,
    default: false
  },
  description: {
    type: String,
    required: true,
  }
});

// Mongoose Model
var Todo =mongoose.model('Todo', todoSchema);
module.exports = Todo;


// Mongoose Schema
// var todoSchema = mongoose.Schema({
//    ListItemOne: String,
//    ListItemTwo: String,
//    ListItemThree: String,
//    ListItemFour: Number
// });

// Testing database
// var listItem = new Todo({
//   ListItemOne: 'meow',
//   ListItemTwo:'woof',
//   ListItemThree:'chirp',
//   ListItemFour: 55
// });
// listItem.save(function(err, data){
//   if(err){
//     console.log(err);
//   } else {
//     console.log(data);
//   }
// });
