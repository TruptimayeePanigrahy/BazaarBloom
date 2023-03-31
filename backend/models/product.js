const mongoose=require("mongoose")
const productSchema=mongoose.Schema({
image:String,
name:String,
price:String,
Ad_id:String,
condition:String,
Sellertype:String,
brand:String,
producttype:String,
description:String


})

const productmodel=mongoose.model("products",productSchema)


module.exports={productmodel}