require('dotenv').config();

const express=require("express");
const router=express.Router();
const {insertIntoDb,selectAllData, searchData,updateData,deleteData,findByEmail} =require("../db");
const {encryptPassword,} =require("../middlewares/bcrypt");
const  jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const checkJWt = require('../middlewares/checktoken');
const sendEmail = require('../email');



router.get("/email",function(req,res){
    sendEmail();

    res.send("Mail sendt")
})


router.post("/",encryptPassword,function(req,res){

    insertIntoDb(req.body).then(data=>{
        console.log(data);
        res.json({
            messsage:"User Created"
        })
    }).catch(err=>{
        console.log(err);
        res.json({
            messsage:"Error"
        })

    })

})


// jwt route

router.post("/login",function(req,res){

  ///We will find the user on the basis of email ----->

  findByEmail(req.body.email).then(result=>{
      // We will comapre the passwords ---->
  // We have to compare the bcrypt hash --->


    if(result){
        console.log("Query result",result.getDataValue("password"))


  bcrypt.compare(req.body.password, result.getDataValue("password"), function(err, re) {
    if(re){

        const  token = jwt.sign({email:result.getDataValue("email") }, process.env.KEY);
        res.json({
            message:"Login Success",
            token:token
        })
      
    }else{
        res.json({
            message:"Wrong password",
          
        })
    }

 
    

});

    }else{
        res.json({
            message:"Username Not Found"
        })
 
    }





  }).catch(err=>{
    res.send(err);
  })





  // if password is correct will generate jwt and send back 

  // otherwise we will respond with error --->

})


router.use(checkJWt)


router.get("/data",function(req,res){
    selectAllData().then(result=>{
        res.json({
            message:"Success",
            data:result
        })
    }).catch(err=>{
        res.send(err);
    })
})

router.put("/data",function(req,res){
    updateData(req.body).then(result=>{
        res.json({
            message:"Successfully Updated",
            data:result
        })

    }).catch(err=>{
        res.send(err);

    })
  
})

router.get("/data/:name",function(req,res){
    const name=req.params.name
    searchData(name).then(result=>{
        res.json({
            message:"Success",
            data:result
        })

    }).catch(err=>{
        res.send(err);

    })
  
})


router.put("/data",function(req,res){
    const name=req.body.name
    searchData(name).then(result=>{
        res.json({
            message:"Success",
            data:result
        })

    }).catch(err=>{
        res.send(err);

    })
  
})

router.delete("/data/:id",function(req,res){
    deleteData(req.params.id).then(result=>{
        res.json({
            message:"SuccessFully deleted",
            result
        })  
    
    }).catch(err=>{
            console.log(err)
            res.send(err);
        })
    })




router.get("/hello",function(req,res){
    res.send("hii");
})


//Try pagination api -->
// LIMIT AND OFFSET

// Authentication jwt -->
//restricting apis
//aggregation and joins 
//sort

//Sending Emails 	 —

/*
router.get("/data",function(req,res){
    /*for(let i=0;i<1000000000;i++){
        console.log("hiii"+i);

    }
    res.send("hii there");
})
*/

module.exports=router;