class Animal {
    constructor(hunger=50,thirst=50){
        this.hunger=hunger;
        this.thirst=thirst;
    }

    eat(){
        this.hunger-=1;
    }
    drink(){
        this.thirst-=1;
    }
    play(){
        this.hunger+=1;
        this.thirst+=1;
    }
}

const a = new Animal();
a.eat();

console.log(a.hunger);
