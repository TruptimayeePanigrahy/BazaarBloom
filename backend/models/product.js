const mongoose=require("mongoose")
const productSchema=mongoose.Schema({

})

const productmodel=mongoose.model("products",productSchema)


module.exports={productmodel}