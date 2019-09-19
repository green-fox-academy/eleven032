const Car = require('./car');
const Station = require('./station');

let c = new Car();
let s = new Station(100000);

console.log(c.capacity);
console.log(c.gasAmount);
console.log(s.gasAmount);
console.log('---------------------');
console.log(s.refill(c));
console.log(c.capacity);
console.log(c.gasAmount);
console.log(s.gasAmount);
