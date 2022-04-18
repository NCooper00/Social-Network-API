const {Schema, model} = require('mongoose');

var validateEmail = function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};

const userSchema = new Schema({
    id: Schema.Types.ObjectId,
    username: { 
        type: String, 
        required: true,
        trim: true, 
        unique: true,
    },
    email: { 
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: true,
        validate: [validateEmail, 'Please fill a valid email address'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please enter a valid email address']
    },
    thoughts: [
        {
            type: Schema.Types.Array,
            ref: 'thought',
        }
    ],
    friends: [
        {
            type: Schema.Types.ObjectId,
            ref: 'user',
        }
    ]
},
{
    toJSON: {
      virtuals: true,
      getters: true
    },
    id: false,
},
);

userSchema 
    .virtual('friendCount')
    .get(function () {
        return this.friends.length;
    }) 

const User = model('User', userSchema);

module.exports = User;