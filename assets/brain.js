// let Log = require('./Log')
// let log = new Log()
// log.warning("what is it");

//  const fs =require('./log')
//  const add = fs.addition
//  console.log(add(9,3));
const path= require('node:path')



console.log(path.basename(__dirname));
console.log(path.parse(__dirname));
console.log(path.isAbsolute(__dirname));
console.log(path.join("folder1","folder2","module.html"));
console.log(path.isAbsolute("folder1"));
console.log(path.resolve('folder1',"folder2","module.html"));
