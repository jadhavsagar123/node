const express=require("express");
const router=express.Router();
const {getData,saveData,getDataPagination,getFileData,updateData,updateOneData,deleteData,deleteOneData}=require("../controllers/crud.controller");


router.get("/file",getFileData);
router.get("/",getData);
router.post("/save",saveData);
router.get("/pagination",getDataPagination);
router.put("/update",updateData);
router.put("/updateOne",updateOneData);
router.delete("/deleteMany",deleteData);
router.delete("/deleteOne/:id",deleteOneData);


module.exports=router;