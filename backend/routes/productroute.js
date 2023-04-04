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
        let data=await productmodel.find(req.query)
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

Router.get("/price1",async(req,res)=>{
    

    try {
        let data=await productmodel.find().sort({price:1})
        res.status(200).send(data)
    } catch (error) {
        console.log(error)
    }
})

Router.get("/price2",async(req,res)=>{
    

    try {
        let data=await productmodel.find().sort({price:-1})
        res.status(200).send(data)
    } catch (error) {
        console.log(error)
    }
})
Router.get("/desc1",async(req,res)=>{
    

    try {
        let data=await productmodel.find().sort({description:1})
        res.status(200).send(data)
    } catch (error) {
        console.log(error)
    }
})

Router.get("/desc2",async(req,res)=>{
    

    try {
        let data=await productmodel.find().sort({description:-1})
        res.status(200).send(data)
    } catch (error) {
        console.log(error)
    }
})

Router.get('/page', async (req, res) => {
    // destructure page and limit and set default values
    const { page = 1, limit = 7 } = req.query;
  
    try {
      // execute query with page and limit values
      const posts = await productmodel.find()
        .limit(limit * 1)
        .skip((page - 1) * limit)
        .exec();
  
      // get total documents in the Posts collection 
      const count = await productmodel.countDocuments();
  
      // return response with posts, total pages, and current page
      res.json({
        posts,
        totalPages: Math.ceil(count / limit),
        currentPage: page
      });
    } catch (err) {
      console.error(err.message);
    }
  });

Router.get("/pagination/:id",async(req,res)=>{
    try {
        let {id}=req.params
        console.log(id)
        let ans=(id-1)*7
        let data=await productmodel.find().skip(ans).limit(7)
        res.send(data)

        
    } catch (error) {
        console.log(error)
    }
})



module.exports={Router}