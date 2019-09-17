'use strict';

// - Create (dynamically*) a two dimensional list
//   with the following matrix**. Use a loop!
//
//   0 0 0 1
//   0 0 1 0
//   0 1 0 0
//   1 0 0 0
//
// - Print this two dimensional list to the console
//
// * size should depend on a variable
// ** Relax, a matrix is just like an array
let a = 4;
let i = 0;
let res = [];
while(i<a){
    let tmp = [];
    let j = 0;
    while(j<a){
        if(j===a-i-1){
            tmp.push(1);
        } else {
            tmp.push(0);
        }
        
        j++;
    }
    res.push(tmp);
    i++;
}
res.forEach(a=>console.log(a))