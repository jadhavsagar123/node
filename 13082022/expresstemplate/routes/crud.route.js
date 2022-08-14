const express=require("express");
const router=express.Router();
const {getData,saveData}=require("../controllers/crud.controller");



router.get("/",getData);
router.post("/save",saveData);


module.exports=router;
