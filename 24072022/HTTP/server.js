const http=require("http");//importing http module
const fs=require("fs");

const server=http.createServer(function(req,res){

    console.log(req.url);

    if(req.url=="/"){
        res.write("Root url"); // used to send the data
        res.end();// used to finish the response stream

    }

    else if(req.url=="/data"){
        const data=[{name:"john"},{name:"Joe"}]

        res.write(JSON.stringify(data));
        res.end();

    }
    else if(req.url=="/html"){

        // html file -->
        // fs.readFile 
        // read the contents of the file using fs module and then you have to  render it

        fs.readFile("index.html",'utf-8',function(err,data){
            if (!err){
                res.write(data);
                res.end();
            }

            

        })
        
    }
 

});


server.listen(8090,function(){
    console.log("http Server is running ")
})