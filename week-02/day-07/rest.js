function foo(row, column, ...rest) {
    if (rest.length < row * column) {
        return null;
    } else {
        let res = [];
        for (let i = 0; i < row; i++) {
            let line = [];
            for(let j =0;j<column; j++){
                line.push(rest.shift());
            }
            res.push(line);
        }
        return res;
    }
}

console.log(foo(4,4,1,2,3,4,5,6,7,8,9,0,9,8,7,6,6,5,5,4,3));