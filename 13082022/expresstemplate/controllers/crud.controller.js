const User=require("../models/User");

const getData=(req,res)=>{

    User.find().then(data=>{
    
        res.json({
            message:"Success",
            data:data
        })
    }).catch(err=>{
        console.log(err);
    })


}


const saveData=(req,res)=>{

    const user=new User({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password

    })
    
   //const user=new User(req.body);

    user.save().then(result=>{

        res.json({
            message:"Success",
            data:result
        })

    }).catch(err=>{
        console.log(err);

    })
  


}


module.exports={
    getData,
    saveData
}