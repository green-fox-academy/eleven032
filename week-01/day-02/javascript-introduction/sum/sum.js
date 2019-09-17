'use strict';

// - Write a function called `sum` that sum all the numbers until the given parameter
// - The function should return the result
function sum(...a){
    let res = 0;
    for(let arg of a){
        res+=arg;
    } 

    return res;
}

console.log(sum(1,2,3,4,5,6,7,8,9,10))