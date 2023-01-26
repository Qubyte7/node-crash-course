// console.log(global);
//  setTimeout(() => {
//     console.log("in the time otu");
//  }, 3000 );
//  const int = setInterval(() => {
//      console.log('mugisha ')
// },1000 );
// console.log(__dirname);
// console.log(__filename);




 
// function Person(name,living,car,house){
//       this.name=name
//       this.living=living
//       this.car=car
//       this.house=house
//       this.me=function(){
//          console.log("this "+this.name+" i do"+this.living+" for living , i don't have "+this.car+" and i don't have "+this.house+" house")

//       }
//    }





// function Person2(name,living,car,house){
//    Person.call(this,name,living,car,house)
// }
// Object.setPrototypeOf(Person2,Person.prototype);
// Person2.prototype.me=function(){
//    console.log("i'm "+this.name+" i do "+this.living+" i have "+this.car+" i have "+this.house+" house and  i love my little "+this.pet+" kecy")
// }
// Person2.prototype.pet="puppy"

// let man = new  Person2('kamariza',' bussiness','lamborghini aventor',' une etage')
// console.log(man.me())
  function Person(){
   this.majina='mugisha'
   this.muhula='pili'
   this.kiyongozi='aime'
  }

  function Person2(){
   Person.call(this);
   
      this.jibu='answer'
      this.kiswahili=function(){
         console.log('jina langu ' +this.majina+' nimejefunza kwenye muhula wa '+this.muhula+' na kiongozi cya darasa yake ni '+this.kiyongozi+' na jibu kama kingeleza ni  '+this.jibu)
      }
   }

   let fisto = new Person2()
   fisto.majina='kayumba'
   fisto.kiswahili()
   // let man=Object.getOwnPropertyNames(fisto.prototype)
   Person2.prototype.kiswa=function(){
      var prefix;
      if(this.muhula == 'Pili'||this.muhula =='pili'){
         prefix='manafunzi';
      }else{
         prefix='umururu';
      }
      console.log('jina langu ' +this.majina+' nimejefunza kwenye muhula wa '+this.muhula+' ndi ' +prefix+ ' na kiongozi cya darasa yake ni '+this.kiyongozi+' na jibu kama kingeleza ni  '+this.jibu)
   }
   let martin = new Person2()
   martin.majina='martin'
   martin.kiswahili()