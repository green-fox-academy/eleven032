function bmi(obj) {
    let value = obj.mass/(obj.height^2)
    obj[bmi] = value;
    return obj;
}

let mass = {mass:64, height:173};
bmi(mass);
console.log(mass);

// const vectors = [
//     [1, 2, 3],
//     [],
//     [2, 3],
//     [-1],
//     [6, 7, 8, 9]
// ];