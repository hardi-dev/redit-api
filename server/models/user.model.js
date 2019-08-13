const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema({
  username: { 
    type : String, 
    required: true, 
    minlength: [5, 'Username must be 5 character or more'] 
  },
  password: { 
    type : String, 
    required: true, 
    minlength: [5, 'Password must be 8 character or more'] 
  },
  isDeleted: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
});

// Write some encryption for Password

const User = mongoose.model('User', userSchema);

module.exports = User;