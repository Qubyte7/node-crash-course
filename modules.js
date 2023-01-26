
const red= require('./people');
// here we "./" mean look in the current directory look for file people. as it could know be able to run the codes in the people file
const {people, ages}= require('./people');
console.log(people, ages);// this is another way of access the properties you want from another file

const os =require('os');//here the os is inbuilt in node no need to create or declare its variable 
//and what we are doing is importing that in built functionality into this file
console.log(os.platform(),os.homedir());