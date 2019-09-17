'use strict';

// - Create an array named `s` with the following content: `[1, 2, 3, 8, 5, 6]`
// - Change the 8 to 4 with the `.map` method 
// - Print the fourth element as a test
let s = [1, 2, 3, 8, 5, 6];
// s.map(a=>a===8?a=4:a)
console.log(s.map(a=>a===8?a=4:a)[3]);
