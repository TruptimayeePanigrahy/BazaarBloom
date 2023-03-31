const express=require('express')
const cors=require("cors")
const {connection}=require("./db")
const {userRoute}=require("./routes/userroute")
const {Router}=require("./routes/productroute")
const {auth}=require("./middlware/auth")
require("dotenv").config()
const app=express()
app.use(express.json())
app.use(cors())

app.use("/user",userRoute)
// app.use(auth)
app.use("/product",Router)






app.listen(process.env.port,async()=>{
    try {
        await connection
        console.log("Server connected to DB..")
    } catch (error) {
        
    }
    console.log("server is running...")
})