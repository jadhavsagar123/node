function upperMiddleware(req,res,next){
 req.body.name =req.body.name.toUpperCase()
   


 next();

}

module.exports={
    upperMiddleware,
  

}