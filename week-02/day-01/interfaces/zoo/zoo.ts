abstract class Animal {
    private name: string;
    private age: number;
    private gender: string;
 
    private nickName : string
    constructor(nickName:string, name: string, age: number, gender: string) {
        this.name = name;
        this.age = age;
        this.gender = gender;

        this.nickName = nickName;
    }

    getName(): string {
        return this.name;
    }

    getNickName(): string {
        return this.nickName;
    }

    getAge (): number{
        return this.age;
    }

    getGender (): string{
        return this.gender;
    }

    print(): void {
        console.log(`${this.getNickName()} is a ${this.getAge()} years old ${this.getGender()} ${this.getName()}, and is breeding by ${this.breed()}`)
    }
    abstract breed(): string;

}


class Reptile extends Animal {
    constructor(nickName:string, name: string, age: number, gender: string){
        super(nickName, name, age, gender);
    }

    breed(): string {
        return 'laying eggs.';
    }
}


class Mammal extends Animal {
    constructor(nickName:string, name: string, age: number, gender: string){
        super(nickName, name, age, gender);
    }

    breed(): string {
        return 'pushing miniature versions out.';
    }
}


class Bird extends Animal {
    constructor(nickName:string, name: string, age: number, gender: string){
        super(nickName, name, age, gender);
    }

    breed(): string {
        return 'laying eggs.';
    }
}


export {Reptile, Mammal, Bird};