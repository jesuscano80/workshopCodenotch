const User = require("../Model/User");

const signup= async(req,res,next)=>{
    try{
    const {user, password}= req.body;
   const newUser= new User({user,password: await User.encrypt(password)})
   const userSaved=await newUser.save();
   res.status(201).json({message: userSaved})
    }
    catch(err){
        next(err)
    }    

}


const signin= async (req, res, next)=>{
    try{
        const {user,password}=req.body;
        const userFound= await User.find({user});
        if(!userFound) return res.status(400).json({message:"user doesnt exist"})
        const result= await User.compare(password, userFound[0].password);
        if(!result) return res.status(400).json({message: "passwork not correct"})
        res.status(200).json({message: "access to web"});
    }
    catch(err){
        next(err);
    }
}

module.exports= {signup, signin};