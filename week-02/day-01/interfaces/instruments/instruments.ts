abstract class Instrument {
    protected name: string;
    constructor(name: string) {
        this.name = name;
    };
    abstract play(): any;
}

abstract class StringedInstrument extends Instrument {
    public numberOfStrings: number;
    abstract sound(): any;
    play(){
        
    }
}

