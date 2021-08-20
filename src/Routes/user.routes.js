const {Router}=require("express");
const User = require("../Model/User");
const userCtrl = require("../Controller/user.controller");
const router=Router();

router.post("/signup", userCtrl.signup);

router.put("/signin", userCtrl.signin);


module.exports= router;