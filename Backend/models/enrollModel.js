const mongoose = require("mongoose")
const Schema = mongoose.Schema


const enrollSchema = new Schema({

course:{
    type:String,
    required : true
},


email:{
    type:String,
    required : true
},


is_active:{
    type:Boolean,
    default:true
}

},{timestamps:true})

module.exports = mongoose.model('course_enrollement',enrollSchema)