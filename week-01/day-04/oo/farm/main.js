const Animal = require('../animal/animal');
const Farm = require('./farm');

let a = new Animal(5);
let b = new Animal();
let c = new Animal();
let d = new Animal();
let e = new Animal();

let list = [a,b,c,d,e];


let f = new Farm(list,6);
console.log(f.list);
console.log(f.slot);
console.log('------------------');
f.breed();
console.log(f.list);
console.log(f.slot);
console.log('------------------');
f.slaughter();
console.log(f.list);
console.log(f.slot);