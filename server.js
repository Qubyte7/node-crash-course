const http=require('http');//here we have required or imported an  http ,this would help as to create a server
const fs = require('fs');
const load = require('lodash'); 

 const myserver=http.createServer((req, res)=>{//this create server creates a server and as an arguments it contain a call back function
   //lodash
const num = load.random(0,30);//after the server runs this will output any random nuber between the setted numbers
console.log(num);

    //set header content type
    res.setHeader('content-type','text/html');
    //depending on the url
    let path = './docs/';
    switch(req.url){
      case '/':
         path+='dark.html';
         res.statusCode=200;//status code
         break;
         case'/css':
         path+='css.html';
         res.statusCode=200;
         break;
         case'/innocent':
       ;res.redirect('/css');//here we are doing what we call redirecting:for example many people would still know that innocent in the link but it have been updated to css
        //for avoiding getting to an unexistable page we can redirect them to css
      
         break;
         case '/innocent/paccy':
            res.redirect('/');
            break;
         default:
            path+='oos.html';
            res.statusCode=404;
            break;
    }
    //return an HTML file
    fs.readFile(path,(err,data)=>{
      if(err){
         console.log(err);
         res.end();
      }else{
        
       //  res.write(data);
         res.end(data);
      }
    })
 });
 myserver.listen(4000,()=>{
    console.log('listening request on port 4000')
 });
 
 
 
 
 // this call back function will run every moment a request come to our server;
