const Products = require("../Model/Products");


const getProducts= async(req, res, next)=>{
    try{
const products= await Products.find()
res.send(200).json({message: products});
}
catch(err){
    next(err);
}
}

const createProducts= async (req, res, next)=>{
   const {name, photo, price} =req.body;
    try {
       const product =new Products({name,photo, price});
       const productSave=await product.save();
       res.send(201).json({message:productSave})
    } catch (err) {
        next(err)
    }
}



module.exports= {getProducts, createProducts};