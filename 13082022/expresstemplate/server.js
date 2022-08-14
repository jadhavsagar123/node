require('dotenv').config()
const app=require("./app");
const port=process.env.PORT || 9090;
const mongoose=require("mongoose");
//console.log(process.env.MONGO_URL)
//6woUrEWqS5jgVxHB
const path =process.env.MONGO_URL
//const url="mongodb+srv://logan99:6woUrEWqS5jgVxHB@cluster0.kzxg4li.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect(path).then(data=>{
    console.log("Mongodb connected")
}).catch(err=>{
    console.log(err);
})

// Connection with our  mongodb server ---->

app.listen(port,function(){
    console.log(`Server Running At Port ${port}`);
})