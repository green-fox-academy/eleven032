import {
    Animal
} from '../zoo/zoo';


/**
 *
 *
 * @interface Flyable
 * description....
 */
interface Flyable {

    land(): void;
    fly(): void;
    takeOff(): void;
}


/**
 *
 *
 * @abstract
 * @class Vehicle
 */
abstract class Vehicle {
    
    maker: string;
    year: number;
    power: string;
    
 
    /**
     *Creates an instance of Vehicle.
     * @param {string} maker
     * 
     * @param {number} year
     * @param {string} power
     * @memberof Vehicle
     */
    constructor(maker: string, year: number, power: string) {
        this.maker = maker;
        this.year = year;
        this.power = power;
    }
}


/**
 *
 *
 * @class Helicopter
 * @extends {Vehicle}
 * @implements {Flyable}
 * 
 */
class Helicopter extends Vehicle implements Flyable {

    constructor(maker: string, year: number, power: string) {
        super(maker, year, power);
    }

    land(): void {
        console.log('Helicopter can land in a wide place');
    }

    fly(): void {
        console.log('Can fly');
    }
    takeOff(): void {
        console.log('Can take off from everywhere');
    }
}

class Bird extends Animal implements Flyable {

    breed(): string {
        return 'lay eggs';
    }

    land(): void {
        console.log('Bird can land everywhere!');
    }

    fly(): void {
        console.log('Can fly');
    }
    takeOff(): void {
        console.log('Can take off from everywhere');
    }
}


const bird = new Bird('Hier', 'Parrot', 5, 'male');
const h = new Helicopter('Honda', 2010, '500');
console.log(bird.breed());
h.fly();