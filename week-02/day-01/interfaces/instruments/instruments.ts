abstract class Instrument {
    protected name: string;
    constructor(name: string) {
        this.name = name;
    };
    abstract play(): string;
}

abstract class StringedInstrument extends Instrument {
    numberOfStrings:number;
    constructor(name:string, numberOfStrings:number){
        super(`${name}`);
        this.numberOfStrings = numberOfStrings;
    }
    abstract sound(): string;
    play():string{
        return `${this.name}, a ${this.numberOfStrings}-stringed instrument that goes ${this.sound()} `;
    }
}

class ElectricGuitar extends StringedInstrument{
    constructor(numberOfStrings:number = 6){
        super('Electric Guitar', numberOfStrings);
        this.numberOfStrings = numberOfStrings;
    }
    
    sound(): string {
        return 'Twang';
    }
}

class BassGuitar extends StringedInstrument{
    constructor(numberOfStrings:number = 4){
        super('Bass Guitar', numberOfStrings);
        this.numberOfStrings = numberOfStrings;
    }
    
    sound(): string {
        return 'Duum-duum-duum';
    }
}

class Violin  extends StringedInstrument{
    constructor(numberOfStrings:number = 4){
        super('Violin ', numberOfStrings);
        this.numberOfStrings = numberOfStrings;
    }
    
    sound(): string {
        return 'Screech';
    }
}