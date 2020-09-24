class Bird {
  // Write your code here
  age:number = 1;

   constructor(initialiser:number){
     this.age = initialiser;
}
sing():void{
  console.log("Cui cui");
}
   fly(seconds:number): void{
    if (this.age <= 1 ){
      console.log("The bird is too young to fly");
    }if (this.age > 1 && this.age <= 3){
      const distance = seconds;
 console.log(`The bird flew ${distance}meters in ${seconds} seconds` );  
   }
   if (this.age > 3 ){
     const distance = seconds * 2 ;
    console.log(`The bird flew ${distance}meters in ${seconds} seconds` );  
   }
     }
    }
  const martinet = new Bird(10)
  martinet.fly;
// Leave the line below for tests to work properly.
export { Bird };
