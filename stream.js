
const fs=require('fs');

 const streamRead=fs.createReadStream('./docs/blog3.txt',{encoding:'utf8'});//we could pass this argument {encoding:'utf8'} to turn buffers into readable data , instead of writting .tostring()
 const streamWrite = fs.createWriteStream('./docs/blog4.txt');//this wiil create blog4.txt in docs folder
  readstream.on('data',(chunk) =>{//on this line this is like an events listener
     //the readstream hav two arguments , 1st data which allow as to get the data ,2nd a callk back function with chunk as a parameter that give us access or control to that chunk of data 
 console.log('--NEW CHUNK--');
 console.log(chunk);
 writestream.write('\nNEW CHUNK\n');
 writestream.write(chunk);//this will writte the read chunk of data by readstream and writte those chunk of data int blog4.txt  created i  folder docs
 });


 // another way of doing the above is through PIPE method
 //this code replace the codes from line 6 up to line 12
 //PIPPING
 streamRead.pipe(streamWrite);// this mean that data being read by streamRead have to be pipped to streamWrite
                               //rember that streanRead hold the document blog3.txt and streamWrite holds blog4.txt

