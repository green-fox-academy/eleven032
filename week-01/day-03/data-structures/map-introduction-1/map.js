let map = new Map();

if(map.size === 0){
    console.log("It is empty");
} else {
    console.log("It is not empty");
}

map.set(97,'a');
map.set(98,'b');
map.set(99,'c');
map.set(65,'A');
map.set(66,'B');
map.set(67,'C');

console.log(map.keys());
console.log(map.values());

map.set(68,'D');
console.log(map.size);

console.log(map.get(99));
console.log(map.delete(97));

if(map.get(100)===undefined){
    console.log("No such pair");
} else {
    console.log("There it is");
}

map.clear();
// console.log(map.size);
 