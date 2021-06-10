const mongoose = require('mongoose');
  const { Schema } = mongoose;

  const defination={
   
    image:{type:String,require:true},
    description:{type:String,require:true},
    likeCount:{type:Number,default:0},
    comment:[String],

    createdAt: {
      type: Date, 
      default: Date.now
    },

    updatedAt: {
      type: Date, 
      default: Date.now
    }
  }
  const post=new Schema(defination);
  module.exports = mongoose.model('post',post);