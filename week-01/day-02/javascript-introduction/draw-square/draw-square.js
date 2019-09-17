'use strict';

const lineCount = 6;

// Write a program that draws a
// square like this:
//
//
// %%%%%%
// %    %
// %    %
// %    %
// %    %
// %%%%%%
//
// The square should have as many lines as lineCount is
let out = [];
let bar = '';
let middle = '';
let index = 0;
let index2 = 0;

while(index<lineCount){
    bar+='%';
    index++;
}

while(index2<lineCount){
    if(index2===0||index2===lineCount-2){
        middle+='%';
    }
    middle+=' ';
    index2++;
}
for(let i = 1;i<=lineCount;i++){
    if(i===1||i===lineCount){
        console.log(bar);
    }else {
        console.log(middle);
    }

    
}