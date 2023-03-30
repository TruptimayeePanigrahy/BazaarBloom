const express=require("express")
const userRoute=express.Router()
const {usermodel}=require("../models/user")
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")
require("dotenv").config()

userRoute.post("/register",async(req,res)=>{

    try {
        const payload=req.body
        const user= await usermodel.findOne({email:payload.email})
        if(user){
            return res.send({'msg':"User already exist, please login"})
        }else{
            const hashpassword=await bcrypt.hashSync(payload.password,8)
            payload.password=hashpassword
            const newuser=new usermodel(payload)
            await newuser.save()
            return res.status(200).json({msg:"User register successfull",user:payload})
        }
    } catch (error) {
        res.status(400).send({"msg":"failed"})
    }



})

userRoute.post("/login",async(req,res)=>{
    try {
        const payload=req.body
        const user=await usermodel.findOne({email:payload.email})
        if(!user)  return res.send({"msg":"please signup first"})
           const psswordcorrect=await bcrypt.compareSync(payload.password,user.password)
           if(psswordcorrect){
            const token=await jwt.sign({email:user.email,userid:user._id},process.env.secrete_key,{expiresIn:"1hr"})
            res.status(200).json({msg:"Login success",token,user})
           }
        else{
            res.status(400).json({msg:"invalid credentials"})
        }

}
     catch (error) {
        console.log(error)
    }
})









module.exports={userRoute}