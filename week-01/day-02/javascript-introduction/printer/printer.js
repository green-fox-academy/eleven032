'use strict';

// - Create a function called `printer`
//   which logs to the console the input parameters
//   (can have multiple number of arguments)
function printer(...a){
    for(let arg of a){
        console.log(arg);
    } 

}
printer('a','b','c','d','e','f');