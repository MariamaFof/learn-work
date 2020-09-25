// Code the class here.
abstract class Tree {
    age:number;
    height:number=0;
    alive:boolean = true;

    constructor(age:number){
        this.age=age;

        if(age > 20) {
            this.height=335;
        }

        if (age >= 10 && age <= 20) {
            this.height=((age - 9) * 10 )+ 225;
        }

        if (age>=1 && age <=9 ){
            this.height = age*25;
        }
    }
    abstract isAlive():void

    abstract ageOneYear():void
       

    seed():void {
        this.age=0;
        this.height=0;
        this.alive=true;
        this.seed
    }
}
// Leave the line below for tests to work properly.
export {Tree};
