const express = require("express")
//const s = require("../models/sModel")
const mongoose = require("mongoose")
const router = express.Router()
const student = require("../models/studentModel")


router.get("/",async(req,res)=>{

  
    const s= await student.find({})

    if(!s){
        return res.status(404).json({error:"No ss in a list"})
    }
    res.status(200).json(s)
})
router.get("/:id",async(req,res)=>{
    const {id} = req.params
  if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(404).json({error:"no such s"})
  }
    const s= await student.findById(id)

    if(!s){
        return res.status(404).json({error:"No such s"})
    }
    res.status(200).json(s)
})
router.post("/",async(req,res)=>{
const {name,email,gender,date,password}= req.body
const is_active = true

try{
const s = await student.create({name,email,date,gender,password,is_active})
//const s = asait student.create({name,is_active})
res.status(200).json(s)
}
catch(error){
    res.status(400).json({error:error.message})

}

    //res.json({msg:"post a nes s"})
})



router.post("/get",async(req,res)=>{
    const {email,password}= req.body
    const is_active = true
    
   
        const s= await student.findOne({email:email,password:password})
    
        if(!s || s===[]){
            return res.status(404).json({error:"No such student"})
        }
        res.status(200).json(s)
    })

router.patch("/:id",async(req,res)=>{
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
      return res.status(404).json({error:"no such s"})
    }
      const s= await student.findOneAndUpdate({_id:id},{
        ...req.body
      })
      if(!s){
        return res.status(404).json({error:"No such s"})
    }
    res.status(200).json(s)
  

    //res.json({msg:"update a  s"})
})
router.delete("/:id",(req,res)=>{
    res.json({msg:"delte a  s"})
})

module.exports = router