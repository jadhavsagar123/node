const express=require("express");
const app=express();
const authrouter=require("./routes/auth.route");
const crudrouter=require("./routes/crud.route");
const cors=require("cors");
app.set('view engine', 'ejs');

//app.set('views','./htmls'); 
app.use(cors());
app.use(express.json());
app.use("/auth",authrouter);
app.use("/crud",crudrouter);



module.exports=app;