var mongoose = require('mongoose');


var User = mongoose.model('User', {
    email: {
        type: String,
        required: true,
        trim: true,
        minlength: 1
    },

});

var newUser = new User({
    email: 'p.vinod445@gmail.com'
});

// newUser.save().then((doc) => {
//     console.log('User saved suceesfully', JSON.stringify(doc, undefined, 2));
// }, (err) => {
//     console.log('Unable to save user')
// });


module.exports = {User};