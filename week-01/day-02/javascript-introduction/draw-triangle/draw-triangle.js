'use strict';

const lineCount = 4;

// Write a program that draws a
// triangle like this:
//
// *
// **
// ***
// ****
//
// The triangle should have as many lines as lineCount is
let i = 1;
while(i<=lineCount){
    let j = 0;
    
    let out = '';
    
    while(j<i){
        out+='*';
        j++;
    }
    console.log(out);
    i++;
}