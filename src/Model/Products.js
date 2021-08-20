const {Schema, model}= require("mongoose");

const productsSchema= new Schema({
    name: String,
    photo: String,
    price: Number
})


module.exports= model("Product", productsSchema);