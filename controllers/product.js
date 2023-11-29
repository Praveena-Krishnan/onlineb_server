import Product from "../models/createproduct.js"




export const productAdd=(req,res)=>{
    console.log(req.file)
    console.log(req.body)
    new Product({
        name:req.body.name,
        category:req.body.category,
        prise:req.body.price,
        img:req.file.filename
    }).save()
    .then(()=>res.status(201).json({success: true, message:"Product add successfully"}))
    .catch((err)=>console.log(err))
}
export const productList=(req,res)=>{
    
}