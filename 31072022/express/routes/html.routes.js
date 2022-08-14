const express=require("express");
const router=express.Router();
const path =require('path')


router.get("/home",function(req,res){

    // you cant use the relative path in sending the html file //C\folder\folder
    let pathFile = path.join(__dirname,"../html/index.html")
    res.sendFile(pathFile);
    //res.sendFile("F:/nodejs/31072022/express/views/index.html")
    // task is to render from html folder ----

})

router.get("/pdf",function(req,res){

    // you cant use the relative path in sending the html file //C\folder\folder
    let pathFile = path.join(__dirname,"../views/go.pdf")

    res.sendFile(pathFile);

    // task is to render from html folder ----

})


module.exports=router;