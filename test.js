function* g(i) {
    let x = yield i;
    let y = x / 2;
    return [x, y];
}
let tmp = g('hello');
console.log(tmp.next());
console.log(tmp.next(10));