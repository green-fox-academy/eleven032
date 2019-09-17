'use strict';

const lineCount = 4;

// Write a program that draws a
// pyramid like this:
//
//
//    *
//   ***
//  *****
// *******
//
// The pyramid should have as many lines as lineCount is

for (let i = 1; i <= lineCount; i++) {
    let out = '';
    for (let j = 1; j <= lineCount - i; j++) {
        out += ' ';
    }
    for (let j = 1; j<=2*i-1;j++){
        out+='*';
    }

    console.log(out);
}