const EventEmitter=require('events')
const myEmitter=new EventEmitter()
const os = require('os')
const fs = require('fs')



function customStartsWith(word){
    const arr=["a","e","i","o","u"];

    for(let i=0;i<arr.length;i++){
        if(word.startsWith(arr[i])){
            return true;
        }
    }

return false;
}

fs.readFile("ab.txt","utf-8",function(err,data){

    const arrofWords=data.split(os.EOL);
   
   for(let i=0;i<arrofWords.length;i++){
   
       if(customStartsWith(arrofWords[i])){
   
           fs.writeFileSync(`${arrofWords[i]}.txt`,arrofWords[i])
       }
   }
   })
