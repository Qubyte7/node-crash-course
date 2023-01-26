let quire = require('http');
  let server = quire.createServer((req,res)=>{
if (req.url =='/'){
    res.writeHead(200,{'content-type':'text/html'});
    res.write('<html><body><p> i am innocent </p></body></html>');
    res.end();
} else{
    res.end('invalid input');
}
  })
  server.listen('8000');
  console.log(" listening to server 8000");