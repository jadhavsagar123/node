const bcrypt = require('bcrypt');

const encryptPassword=(req,res,next)=>{
    const saltRounds = 10;
    bcrypt.hash(req.body.password, saltRounds, function(err, hash) {
       if(!err){
        req.body.password=hash;
        next();
        return;
       }
      res.send("Error");
    })



}

module.exports={
    encryptPassword
}