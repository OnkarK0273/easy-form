const express = require("express")
const formModel = require("../model/modal")


const formRoute = express.Router()


// post req

formRoute.post("/",async (req,res)=>{
    try{

        let newForm = new formModel(req.body)

        await newForm.save()

        res.status(201).json({msg:"Form Submitted Successfully"})


    }catch(err){
        res.status(500).json({msg:err.message})
    }
})


module.exports = formRoute
