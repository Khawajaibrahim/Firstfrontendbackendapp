const mongoose = require("mongoose")
const Schema = mongoose.Schema


const studentSchema = new Schema({

name:{
    type:String,
    required : true
},
password:{
    type:String,
    required : true
},

email:{
    type:String,
    required : true
},
gender:{
    type:String,
    required : true
},
date:{
    type:String,
    required : true
},


is_active:{
    type:Boolean,
    default:true
}

},{timestamps:true})

module.exports = mongoose.model('student',studentSchema)