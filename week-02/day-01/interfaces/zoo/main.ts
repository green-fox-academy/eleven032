import {Reptile, Mammal, Bird} from './zoo';

const reptile = new Reptile('Earvin', 'Crocodile', 4, 'female');
const mammal = new Mammal('Honda','Koala',10,'male');
const bird = new Bird('Mars', 'Parrot', 8, 'female');

console.log('How do you breed?');
reptile.print();
mammal.print();
bird.print();