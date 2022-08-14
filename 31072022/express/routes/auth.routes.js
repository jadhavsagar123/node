const express=require("express");
const router=express.Router();
const {loggingMiddleware,loggingMiddleware2,routesLevelMiddleware}=require("../middlewares/middleware");

// the flow is from top to bottom ,just like a pipeline
router.use(routesLevelMiddleware);  //routes level middleware

//route level middleware
router.post("/login",loggingMiddleware,loggingMiddleware2,function(req,res){

    res.send("hey i am coming from routes");

})

router.post("/signup",function(req,res){

    res.send("hey i am signup route");

})


router.get("/data",function(req,res){

    res.send("hey i am data route");

})



module.exports=router;