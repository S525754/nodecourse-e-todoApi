var mongoose = require('mongoose');

var Todo = mongoose.model('Todo', {
   text: {
       type: String,
       required: true,
       minlength: 1,
       trim: true
   },
    completed: {
       type: Boolean,
        default: false
    },
    completedAt: {
       type: Number,
        default: null
    }
});

var newTodo = new Todo({
    text: 'Cook dinner'
});

var otherTodo = new Todo({
    text: 'Vinod Kumar Reddy'
});

newTodo.save().then((doc) => {
    console.log('Saved todo', doc);
}, (err) => {
    console.log('Unable to save todo', err);
});

otherTodo.save().then((doc) => {
    console.log(JSON.stringify(doc, undefined, 2));
}, (err) => {
    console.log('Unable to add save otherTodo', err);
});

module.exports = {Todo};
