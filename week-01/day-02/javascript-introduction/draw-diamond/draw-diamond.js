'use strict';

const lineCount = 7;



// Write a program that draws a
// diamond like this:
//
//
//    *
//   ***
//  *****
// *******
//  *****
//   ***
//    *
//
// The diamond should have as many lines as lineCount is

function draw(a) {
    let arr = [];
    
    for (let i = 1; i <= a; i++) {
        let tmp = '';
        for (let j = 1; j <= a - i; j++) {
            tmp += ' ';
        }
        for (let j = 1; j <= 2 * i - 1; j++) {
            tmp += '*';
        }
        arr.push(tmp);
        
    }
    return arr;
}

let top = draw(lineCount / 2 + 1);
let down = draw(lineCount / 2 + 1);
down.pop();

// console.log(down)

let out = top.concat(down.reverse());
for (let i = 0; i < out.length; i++) {
    console.log(out[i]);
}