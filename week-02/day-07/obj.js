function obj(obj) {
    let max = 0;
    let key;
    for (let entry of Object.entries(obj)) {
        if (entry[1] > max) {
            key = entry[0];
            max = entry[1];
        }
    }
    return [key, obj[key]]
}


let test = { x: 1, y: 2, z: 3 };
// for (let entry of Object.entries(obj)) {
//     console.log(entry);
// }
console.log(obj(test));