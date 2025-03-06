const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  fullName: { type: String , required: true, minLength: 3,
  maxLength: 60,},
  phone :{type:String,required: true, },
  department: { type: String, required: true },
  gender: { type: String, required: true },
  age: { type: Number, required: true },
  Sheikh : { type: String, required: true , minLength: 3,
    maxLength: 60 },
  message: { type: String, minLength: 0,maxLength: 300,},
});

module.exports = mongoose.model('userForm', userSchema);
