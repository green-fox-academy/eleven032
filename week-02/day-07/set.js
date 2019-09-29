function addItem(arr, item) {
    if (!(arr.indexOf(item) > -1)) {
        arr.push(item);
    }
}

let arr = [1, 2, 3, 4, 5];
addItem(arr, 7);
console.log(arr);
