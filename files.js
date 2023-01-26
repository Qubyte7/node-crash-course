const { Console } = require('console');
const fs = require('fs');//fs :file system;this an in built module which help as to interact with files  in node.js

//reading files
fs.readFile('./docs/blod.txt',(err,data) => {//this fs.readFile:hold 2 arguments or parameter.  the 1st:is the location of file to be readed 
    //then the 2nd function(call back function):this will fire when reading the file is complete;this function now contain 2 arguments;
    //err:to turn err if there is an error, and data:that will bring data from the file that we want to read;
if(err){
    console.log(err);
}
console.log(data.toString());//if we write console.log(data), it would return a buffer; to turn this buffer into readable string write:console.log(data.toString())
})

console.log('happy are you?');





//writting files
fs.writeFile('./docs/blod.txt','mwaramutse jmv',()=>{//we use fs.writeFiles with 3 arguments:1st file location, 2nd the text to written ,3rd a call back function 
console.log("see the change");
});

//directories





 if(!fs.existsSync('./assets')){
 fs.mkdir('./assets',(err)=>{//we use fs.mkdir to create directories: we specify the location where our folder will be created and its name
     //here our folder is called assets
 if(err){
     console.log("error");
 }
 console.log("the folder was created")
 });
 }else{
     fs.rmdir('./assets',(err)=>{
        //we use rmdir(remove directory) to remove directory
         if(err){
             console.log(err);
         }else{
         Console.log("directory deleted");
         }
     })
 }





//deleting files

if(fs.existsSync('./docs/deleteme.txt')){
   fs.unlink('./docs/deleteme.txt',(err)=>{
    //we use unlink to delete files
    if(err){
        console.log('error')
    }else{
        console.log('file deleted')
    }
   })
}

//existsync(): this checks if something specified in its brackets exists.


//the reason why we use call back function in all of this is that are all synchronous to mean it require time to do