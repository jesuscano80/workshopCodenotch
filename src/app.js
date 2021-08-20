const express= require("express");
const app= express();
const productRoutes= require("./Routes/products.routes");
const userRoutes= require("./Routes/user.routes");
const errorHandling= require("./error/errorHandling");

//Config
app.set("port", process.env.PORT || 3000);
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use(productRoutes);
app.use(userRoutes);
app.use((req,res, next)=>{
    res.status(404).json({message: "endpoint doesnt found"})
}
)
app.use(errorHandling);

module.exports= app;