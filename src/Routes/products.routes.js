const {Router}= require("express");
const Products = require("../Model/Products");
const productCtrl= require("../Controller/products.controller");

const router=Router();

router.get("/products", productCtrl.getProducts)
router.post("/products", productCtrl.createProducts);

module.exports=router;