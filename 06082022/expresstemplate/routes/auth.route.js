const express=require("express");
const router=express.Router();
const {Logincontroller,Signupcontroller,Tablecontroller}=require("../controllers/auth.controller");


router.get("/",Logincontroller);

router.get("/signup",Signupcontroller);
router.get("/table",Tablecontroller);
module.exports=router;
