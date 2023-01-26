//Log.js
// class Log {
//     info(message) {
//         console.log('Info: ' + message);
//     }
//     warning(warning) {
//         console.log('Warning: ' + warning);
//     }
//     error(error) { console.log('Error: ' + error); }
// };
// module.exports = Log




// call back function
// const button =document.querySelector('button')
   

// button.addEventListener('mouseover',()=>{
// button.classList.toggle('color')
// });



// function first(){
//     console.log('my name is Mugisha')
// }
//   function second(){
//     console.log(' I love my family')
//   }

//   setTimeout(()=>first(()=>second()),3000)// if we've written this setimeout(first(),3000)  ===> this would be no longer a call back function
  
  


function addition(a,b){
    const sum = a + b;
    console.log(sum)
}

function substract(x,y){
    const sub = x - y;
    console.log(sub)
}


const man = {
     mammal(walk){
        console.log('mammal can'+walk);
        
    },
   reptile(talk){
        console.log('reptile can not '+talk);
    }
}

module.exports= function abby(name,age,talent){
   this.name = name
   this.age = age
   this.talent= talent
this.fate = function(){
    console.log("hey i'm by the names of "+this.name+" i'm "+this.age+"years old and i'm talented in "+this.talent)
}

}  


