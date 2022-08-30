const User=require("../models/User");
const fs=require("fs");

const getData=(req,res)=>{

    User.find().then(data=>{
    console.log(data)
        res.json({
            message:"Success",
            data:data
        })
    }).catch(err=>{
        console.log(err);
    })


}


const getFileData=(req,res)=>{

    User.find().then(data=>{



    fs.writeFile("./sh.pdf",JSON.stringify(data),function(err,data){


       // console.log(__dirname+"/sh.pdf");
        res.sendFile(__dirname+"/mongo.pdf");

    })
        
    }).catch(err=>{
        console.log(err);
    })


}

//searching and sorting
const getDataPagination=(req,res)=>{
    const limit=req.query.limit;
    const skip=req.query.skip;
    const search=req.query.search;

    //skip and limit

    // Regex is used to search particular (pattern matching) in a large text

    // Promise.All();

    User.find().count().then(count=>{

        User.find({name:{$regex:new RegExp(search)}},{_id:0}).skip(skip).limit(limit).then(data=>{
    
            res.json({
                message:"Success",
                data:data,
                totalCount:count
            })
        }).catch(err=>{
            console.log(err);
        })

    }).catch(err=>{
        console.log(err);
    })

 


}


const saveData=(req,res)=>{
/*
    const user=new User({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password
    })
    */
   const user=new User(req.body);

    user.save().then(result=>{

        res.json({
            message:"Success",
            data:result
        })

    }).catch(err=>{
        console.log(err);

    })
  


}

//Update controller

const updateData=(req,res)=>{
    //updateMany --->all the records (updateMany in Mongodb)
    //updateOne  -->updates a single record

    User.updateMany({name:req.body.name},{$set:{email:req.body.email}}).then(result=>{
        res.json({
            message:"Update Success",
            data:result
        })
    }).catch(err=>{
        console.log(err);
    })

}

const updateOneData=(req,res)=>{
    //updateMany --->all the records (updateMany in Mongodb)
    //updateOne  -->updates a single record

    User.updateOne({_id:req.body._id},{$set:{email:req.body.email,name:req.body.name}}).then(result=>{
        res.json({
            message:"Update Success",
            data:result
        })
    }).catch(err=>{
        console.log(err);
    })

}



//Delete Controller

const deleteData=(req,res)=>{

    User.deleteMany({name:req.body.name}).then(result=>{

        res.json({
            message:"SuccessFully Deleted",
            data:result
        })

    }).catch(err=>{
        console.log(err);
    })

}


const deleteOneData=(req,res)=>{

    User.deleteOne({_id:req.params.id}).then(result=>{

        res.json({
            message:"SuccessFully Deleted",
            data:result
        })

    }).catch(err=>{
        console.log(err);
    })
    
}


module.exports={
    getData,
    saveData,
    getDataPagination,
    updateData,
    updateOneData,
    deleteData,
    deleteOneData,
    getFileData
}