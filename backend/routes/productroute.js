const express=require("express")
const mongoose=require("mongoose")
const {productmodel}=require("../models/product")
const Router=express.Router()
require("dotenv").config()


Router.get("/",(req,res)=>{
    res.send("data")
})
Router.get("/show",async(req,res)=>{
    // const token=req.header.authorization
    // const decoded=jwt.verify(token,process.env.secrete_key)

    try {
<<<<<<< Updated upstream
        let data=await productmodel.find()
=======
        let data=await productmodel.find(req.query)
>>>>>>> Stashed changes
        res.status(200).send(data)
    } catch (error) {
        console.log(error)
    }
})

Router.post("/add",async(req,res)=>{
    console.log(req.body)
    try {
        const data=req.body
        const newpost=new productmodel(data)
        await newpost.save()
        res.status(200).send({msg:"post added successfully"})

    } catch (error) {
        res.status(400).send({msg:"failed"})
    }
})






module.exports={Router}