'use strict';

// Write a program that prints the numbers from 1 to 100.
// But for multiples of three print “Fizz” instead of the number
// and for the multiples of five print “Buzz”.
// For numbers which are multiples of both three and five print “FizzBuzz”.
let i = 1;
while(i<=100){
    let out = "";
    i%3===0?out+='Fizz':out;
    i%5===0?out+='Buzz':out;
    out.length>0?console.log(out):console.log(i);
    i++;
}