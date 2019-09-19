const Sharpie = require('../sharpie/sharpie');
const SharpieSet = require('./sharpieset');

const a = new Sharpie('blue', 24.0, 0);
const b = new Sharpie('red', 24.0);
const c = new Sharpie('yellow', 24.0, 0);
const d = new Sharpie('pink', 24.0);
const e = new Sharpie('black', 24.0);
let list = [a, b, c, d];

const set = new SharpieSet(list);

console.log(set);
set.add(e);
console.log('-------------------------');
console.log(set);
console.log('-------------------------');
console.log(set.countUsable());
console.log('-------------------------');
set.removeTrash()
console.log(set);
