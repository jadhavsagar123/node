 function loggingMiddleware(req,res,next){

    console.log("I reached to middleware.....");
    //req.body.name=req.body.name.toUpperCase();

 //   res.send("From middleware");
 next();

}

function loggingMiddleware2(req,res,next){

    console.log("I reached to middleware.2222222....");

    //res.send("From middleware 2");
 next();

}

function routesLevelMiddleware(req,res,next){

    console.log("routesLevelMiddleware.........");

    //res.send("From middleware 2");
 next();

}

function appLevelMiddleware(req,res,next){

    console.log("appLevelMiddleware.........");

    //res.send("From middleware 2");
 next();

}



module.exports={
    loggingMiddleware,
    loggingMiddleware2,
    routesLevelMiddleware,
    appLevelMiddleware

}



//you have to create a middleware 
// with post route 

// you have to create a route and you have to change the req.body.name to upper case
//such that when i print (req.body.name) in controller i will get all uppercase

// function upperMiddleware(req,res,next){
//     req.body.name =req.body.name.toUpperCase()
      
   
   
//     next();
   
//    }
   
//    module.exports={
//        upperMiddleware,
     
   
//    }