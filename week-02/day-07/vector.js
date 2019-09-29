const vectors = [
    [1, 2, 3],
    [],
    [2, 3],
    [-1],
    [6, 7, 8, 9]
];

function generator(a = 0, b = 0, c = 0) {
    return [a, b, c];
}

let ans = vectors.map(a=>generator(...a));
console.log(ans);
