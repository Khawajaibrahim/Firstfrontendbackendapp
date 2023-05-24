const express = require("express")
//const s = require("../models/sModel")
const mongoose = require("mongoose")
var request = require('request');
const router = express.Router()
const course_enrollement = require("../models/enrollModel")


router.get("/",async(req,res)=>{
// const {course,email =req.body
// var username = "Ruqia.code@gmail.com";
// var password = "ATATT3xFfGF0KRwVELdFnkeTeZ1teF7U03--nP0A2iVNzSj74vIxbig-c4wRml6qafK1vwrvkbN3WdIjAUrNvahbBTLP2XM9j7OCiySuuYoDhno4VtD8bBo5KZNwRW5rJ9l6GbWRyVSH9YgEZUCR7Yy5Bs6dPxwMHO42IyKPjpBDXX4DdiiyCZw=158BF949";
// var auth = "Basic " + new Buffer.alloc(username + ":" + password).toString("base64");
  
    // const s= await course_enrollement.find({})

    // if(!s){
    //     return res.status(404).json({error:"No enrollements"})
    // }
    // res.status(200).json(s)
    try{
        // var options = {
        //     url: 'https://ruqiahussain.atlassian.net/rest/api/3/users/search?',
        //     auth: {
        //       Username: "Ruqia.code@gmail.com",
        //       Password: "ATATT3xFfGF0KRwVELdFnkeTeZ1teF7U03--nP0A2iVNzSj74vIxbig-c4wRml6qafK1vwrvkbN3WdIjAUrNvahbBTLP2XM9j7OCiySuuYoDhno4VtD8bBo5KZNwRW5rJ9l6GbWRyVSH9YgEZUCR7Yy5Bs6dPxwMHO42IyKPjpBDXX4DdiiyCZw=158BF949"
        //     }
        //   }
        //  'https://ruqiahussain.atlassian.net/rest/api/3/user/search?accountId=712020:ab45fef9-7ae3-410b-8737-f36ce7e00f6a'
    // request({url:'https://ruqiahussain.atlassian.net/rest/api/3/users/search?', headers : {
    //     "Authorization" : auth
    // }}, function(error, response, body) {
    //   //  res.json(body)
    //     res.status(200).json(body)
    //res.status(200).json({msg:"code"})
    
    // });
}catch(error){
    return res.status(404).json({error:"No enrollements"})   
}


})
// router.get("/:id",async(req,res)=>{
//     const {id} = req.params
//   if(!mongoose.Types.ObjectId.isValid(id)){
//     return res.status(404).json({error:"no such s"})
//   }
//     const s= await student.findById(id)

//     if(!s){
//         return res.status(404).json({error:"No such s"})
//     }
//     res.status(200).json(s)
// })


router.post("/get",async(req,res)=>{
    const {email}= req.body
    const is_active = true
    
   
        const s= await course_enrollement.find({email:email})
    
        if(!s || s===[]){
            return res.status(404).json({error:"No such student"})
        }
        res.status(200).json(s)
    })

router.post("/",async(req,res)=>{
const {email,course}= req.body
const is_active = true

try{
const s = await course_enrollement.create({email,course,is_active})
//const s = asait student.create({name,is_active})
res.status(200).json(s)
}
catch(error){
    res.status(400).json({error:error.message})

}

    //res.json({msg:"post a nes s"})
})



// router.post("/get",async(req,res)=>{
//     const {email,password}= req.body
//     const is_active = true
    
   
//         const s= await student.findOne({email:email,password:password})
    
//         if(!s || s===[]){
//             return res.status(404).json({error:"No such student"})
//         }
//         res.status(200).json(s)
//     })

// router.patch("/:id",async(req,res)=>{
//     const {id} = req.params
//     if(!mongoose.Types.ObjectId.isValid(id)){
//       return res.status(404).json({error:"no such s"})
//     }
//       const s= await student.findOneAndUpdate({_id:id},{
//         ...req.body
//       })
//       if(!s){
//         return res.status(404).json({error:"No such s"})
//     }
//     res.status(200).json(s)
  

//     //res.json({msg:"update a  s"})
// })
// router.delete("/:id",(req,res)=>{
//     res.json({msg:"delte a  s"})
// })

module.exports = router