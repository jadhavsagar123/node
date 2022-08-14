const fs =require('fs')
const os = require('os')
const fsPromise=require('fs/promises')
//WRite operation 
/*fs.writeFile("sagar.txt","hello sagar",function(err,data){
   console.log(data),
   console.log(err)
   console.log("file Created") 
})*/

//append operation

// fs.appendFile("main.txt","hey there",function(){
//     console.log('main.txt created and data appended')
// })

// fs.appendFile("main.txt",`hey there i am sagar${os.EOL}`,function(){
//     console.log('data appended')
// })

//read operation

// fs.readFile('./files/lorem.txt',"binary",function(err,data){
//     if(!err){
    
//     console.log(data)
//     }
// })

// Delete operation

// fs.unlink("./files/lorem1.txt",function(err,data){
//     if(err){
//         console.log(err)
//         return
//     }
//     console.log("file deleted")
// })

// You have to generate json data ,you have to write it to the file
// you have to read the content 
// write in another file 
// delete the original file 

// const data = fs.readFileSync("generated.json",'utf-8')

// console.log(data)

// fs.writeFileSync('another.json',data)

// fs.unlinkSync('../file system/generated.json')



// How to convert a callback into a promise 

// function readFilePromise(fileName){
//     const promise=new Promise((res,rej)=>{
//         fs.readFile(fileName,'utf-8',function(err,data){
//            if(err){
//             rej(err);
//            }
//            res(data);
        
//         })
//     })
// return promise;
// }
// readFilePromise("./files/copy.txt").then(data=>{
//     console.log(data);
// }).catch(err=>{
//     console.log(err);
// })

// Promise Version

// fsPromise.readFile('./files/lorem.txt','utf-8').then(data=>{
//     console.log(data)
// }).catch(err=>{
//     console.log(err)
// })


// Read Directory 

// fsPromise.readdir('../file System').then(data=>{
//     console.log(data)
// }).catch(err=>{
//     console.log(data)
// })

// Check file or directory

// fsPromise.readdir("../file System").then(data=>{
//     data.forEach(ele=>{
//    //  console.log(ele);
//     console.log( fs.lstatSync(`../file System/${ele}`).isDirectory() );
 
//     // if its a file then you have to append  in the file otherwise do nothing
 
//      /*
//      fs.lstat(ele,function(err,data){
//         // console.log(data);
//        //  console.log(data.isDirectory());
//      })
//      */
 
 
 
//     })
//  }).catch(err=>{
//      console.log(err);
//  }) 

// task 
  // if its a file then you have to append  in the file otherwise do nothing

// fs.readdir("./files",function(err,data){
//     data.forEach(ele=>{
//        const me= fs.lstatSync(`./files/${ele}`).isDirectory() 
// if (!me){
//     fs.appendFileSync(`./files/${ele}`,`this is file${os.EOL}`)
// }

//     })
// })


// fs.readFile('../file system/rockyou.txt','utf-8',function(err,data){
//     console.log(data)
// })

// read stream  //write stream // duplex stream (for both reading and writing)

// fs.createReadStream("rockyou.txt").pipe(
//     process.stdout
    
// )

fs.createReadStream("EAadhaar_pragati_page-0001.jpg",'binary').pipe(
  process.stdout
  
)
