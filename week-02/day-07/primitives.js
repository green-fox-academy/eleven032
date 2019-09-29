

function primitiveFields(obj) {
    let ans = [];
    for (let key of Object.keys(obj)) {
        if (obj[key] !== Object(obj[key])) {
            ans.push(key);
        }
    }
    return ans;
};

console.log(primitiveFields({ x: 1, y: true, z: [] }));
