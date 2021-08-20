const {Schema, model}= require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema= new Schema({
    user: {type: String,
        required: true,
        unique: true},
    password: String
})

userSchema.statics.encrypt= async(password)=>{
  const salt = await bcrypt.genSalt(10);
  const pass= await bcrypt.hash(password, salt);
  return pass;
}

userSchema.statics.compare= async(password, hash)=>{
   const resultado=  await bcrypt.compare(password,hash);
   return resultado;
}

module.exports= model("User", userSchema);