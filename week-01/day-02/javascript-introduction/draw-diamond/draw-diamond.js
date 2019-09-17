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
let be = [];
let af = [];
function drawtop(a) {
    for (let i = 1; i <= a; i++) {
        let top = '';
        for (let j = 1; j <= a - i; j++) {
            top += ' ';
        }
        for (let j = 1; j <= 2 * i - 1; j++) {
            top += '*';
        }

        be.push(top);
    }
}

function drawdown(a) {
    for (let i = 1; i <= a; i++) {
        let top = '';
        for (let j = 1; j <= a - i; j++) {
            top += ' ';
        }
        for (let j = 1; j <= 2 * i - 1; j++) {
            top += '*';
        }

        af.push(top);
    }
}
drawtop(lineCount / 2 + 1);
drawdown(lineCount / 2 + 1);
af.pop();

let out = be.concat(af.reverse());
for (let i = 0; i < out.length; i++) {
    console.log(out[i]);
}