class Color {
    //this will run as soon as the instance of Color is created.
    constructor(r,g,b, name){
        this.r = r;
        this.g = g;
        this.b = b; 
    };
    rbg(){
        const {r,g,b}= this;
        return `rgb(${r}, ${g}, ${b})`
    };
    hex(){
        const {r,g,b}= this;
        return '#' + ((1<<24) + (r<<16) + (g<<8) + b).toString(16).slice(1);
    };
    rgba(a=1.0){
        const {r,g,b}= this;
        return `rgba(${r}, ${g}, ${b}, ${a})`
    };

};

class Pet {
    constructor(name, age){
        this.name = name;
        this.age = age;
    };

    eat(){
        return `${this.name} is eating!`
    };
}


class Cat extends Pet{
   constructor(name, age, livesLeft = 9){
    super(name, age) //This will refer to the constructor its refereing
    this.livesLeft = livesLeft;
   }
    meow(){
        return "MEOW!"
        
    }
}

class Dog extends Pet{
    
    bark(){
        return "Woof!"
    }
    eat(){
        return `${this.name} eats its food!`
    }
}
