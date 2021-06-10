const mongoose = require('mongoose');
  const { Schema } = mongoose;

  const defination={
    firstName:{
      type: String, 
      required: true
    },

    lastName:{
      type: String, 
      required: true
    },

    email: {type: String, 
      required: true
    },

    DOB: {type: String
    },

    password: {
      type: String, 
      required: true,
    },

    phoneNo: {
      type: Number
    },

    address: {
      type: String
    },

    createdAt: {
      type: Date, 
      default: Date.now
    },

    updatedAt: {
      type: Date, 
      default: Date.now
    }
  }
  const user=new Schema(defination);
  module.exports = mongoose.model('user',user);