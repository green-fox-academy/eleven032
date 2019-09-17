'use strict';
// When saving this quote a disk error has occured. Please fix it.
// Add "always takes longer than" to between the words "It" and "you"

var quote = "Hofstadter's Law: It you expect, even when you take into account Hofstadter's Law."
let first = quote.substring(0, 20);
let second = quote.substring(21, quote.length);
quote = first + " always takes longer than" + second;
console.log(quote);