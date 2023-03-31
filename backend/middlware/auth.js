const jwt=require("jsonwebtoken")

const auth=((req,res,next)=>{
    const token=req.headers.authorization
    if(token){
        const decoded=jwt.verify(token,"trupti")
        if(decoded){
            req.body.userid=decoded.userid
            next()
        }else{
            res.status(400).send("please login")
        }
    }else{
        res.status(400).send("something went wrong")
    }
})


module.exports={auth}