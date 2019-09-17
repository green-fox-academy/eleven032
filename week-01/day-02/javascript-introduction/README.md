# JavaScript Introduction

## Materials and Resources

### Control Flow

| Material                                                                                                             | Time |
| :------------------------------------------------------------------------------------------------------------------- | ---: |
| [JavaScript Tutorial For Beginners #12 - If Statements](https://www.youtube.com/watch?v=Lp-Du2fKoug)                 | 8:45 |
| [JavaScript Tutorial For Beginners #13 - Else If Statements](https://www.youtube.com/watch?v=1v1Bk3Q02Sc)            | 4:03 |
| [JavaScript Tutorial For Beginners #14 - Comparison Operators](https://www.youtube.com/watch?v=LjGaaWX_NbE)          | 5:25 |
| [JavaScript Tutorial For Beginners #15 - Logical Operators](https://www.youtube.com/watch?v=mbT7sSmVUS8)             | 6:01 |
| [JavaScript Tutorial For Beginners #16 - While Loops](https://www.youtube.com/watch?v=PpbFyLTtpWI)                   | 4:09 |
| [JavaScript Tutorial For Beginners #17 - For Loops](https://www.youtube.com/watch?v=U87UmD-5h4o)                     | 7:49 |
| [JavaScript Tutorial For Beginners #18 - Break & Continue](https://www.youtube.com/watch?v=QSuTH0C_3_Y)              | 4:13 |
| [JavaScript Tutorial For Beginners #19 - Practical Example using Loops](https://www.youtube.com/watch?v=eZBTLsv2ktM) | 4:02 |
| [JavaScript Tutorial For Beginners #22 - Numbers](https://www.youtube.com/watch?v=TD3Pfuxgnuc)                       | 6:09 |
| [JavaScript Tutorial For Beginners - NaN (Not a Number)](https://www.youtube.com/watch?v=0ZiltZDg9Gg)                | 6:34 |
| [JavaScript Tutorial For Beginners #24 - Strings](https://www.youtube.com/watch?v=k8MIbEVXhE0)                       | 9:37 |

### Functions and Arrays

| Material                                                                                                               |  Time |
| :--------------------------------------------------------------------------------------------------------------------- | ----: |
| [JavaScript Tutorial For Beginners #20 - Functions](https://www.youtube.com/watch?v=KH57lIgwe2g)                       |  9:18 |
| [Node JS Tutorial for Beginners #5 - Function Expressions](https://www.youtube.com/watch?v=lK42xIMcA0Y)                |  4:18 |
| [JavaScript Tutorial For Beginners #21 - Variable Scope](https://www.youtube.com/watch?v=kjdZ1h3CIs4)                  |  6:05 |
| [JavaScript Tutorial For Beginners #26 - Arrays](https://www.youtube.com/watch?v=EUnV-fCY0Pc)                          |  6:47 |
| [JavaScript Garden - Functions](http://bonsaiden.github.io/JavaScript-Garden/#function)                                |  read |
| [JavaScript Garden - Arrays](http://bonsaiden.github.io/JavaScript-Garden/#array)                                      |  read |
| [5 Array Methods That You Should Be Using Now (⚠️except the Demethodizing chapter)][array-methods]                      |  read |
| [Array - JavaScript \| MDN (⚠️until the Properties chapter)][array-mdn]                                                 |  read |
| [splice](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)                |  read |
| [forEach](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/foreach)              |  read |
| [map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)                      |  read |
| [filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)                |  read |
| [Rest of The Net Ninja JavaScript Tutorials](https://www.youtube.com/playlist?list=PL4cUxeGkcC9i9Ae2D9Ee1RvylH38dKuET) | extra |

### Useful

[JavaScript Tutor - Visualize JavaScript code execution](http://pythontutor.com/javascript.html)
[JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

## Material Review

### Control Flow

- control structures
  - `if`
  - `while`
  - `for`
  - `break`
  - `continue`

### Functions and Arrays

- function expressions
  - function as variable
  - function as parameter
  - anonymous function
- global functions:
  - `alert`
  - `console.log`
  - `parseInt`
  - `parseFloat`
- IIFE
- return statement
- arguments
- variable scope
- array methods:
  - `push`
  - `pop`
  - `shift`
  - `unshift`
  - `indexOf`
  - `slice`
  - `splice`
  - `concat`
  - `forEach`
  - `filter`
  - `map`
  - `every`
  - `some`

## Workshop

Exercises marked with the 💪 emoji are **extra** and should be done after every
other exercise is done!

### Conditionals

```javascript
'use strict';

const a = 13;

if (a === 13) {
  console.log('Yaaay! The value of the "a" variable is 13'); // This block will run
}

if (a === 8) {
  console.log('Yaaay! The value of the "a" variable is 8'); // This block will NOT run
}

const b = 20;

if (b < 10) {
  console.log('Yaaay! The value of the "b" variable is lower than 10'); // This block will NOT run
} else {
  console.log('Yaaay! The value of the "b" variable is higher than 10'); // This block will run
}

const c = 15;

if (c < 10) {
  console.log('Yaaay! The value of the "b" variable is lower than 10'); // This block will NOT run
} else if (c < 20) {
  console.log('Yaaay! The value of the "b" variable is higher than 10'); // This block will run
} else {
  console.log('Yaaay! The value of the "b" variable is higher than 10'); // This block will NOT run
}

const thirsty = true;
const hungry = false;

if (thirsty && hungry) {
  console.log('Lunch time!');
} else if (thirsty || hungry) {
  console.log('Snack time!');
} else {
  console.log('No food for you.');
}
```

#### Exercises

- [1 - conditional-variable-mutation](conditional-variable-mutation/conditional-variable-mutation.js)

### Loops

```javascript
'use strict';

let a = 0;
while (a < 10) {
  console.log(a); // Prints the numbers from 0 to 9
  a++;
}

for (let j = 0; j < 100; j++) {
  console.log(i); // Prints the numbers from 0 to 99
}
```

#### Exercises

- [2 - i-like-trains](i-like-trains/i-like-trains.js)
- [3 - print-even](print-even/print-even.js)
- [4 - multiplication-table](multiplication-table/multiplication-table.js)
- [5 - fizz-buzz](fizz-buzz/fizz-buzz.js)
- [6 - draw-triangle](draw-triangle/draw-triangle.js)
- [7 - draw-pyramid 💪](draw-pyramid/draw-pyramid.js)
- [8 - draw-diamond 💪](draw-diamond/draw-diamond.js)
- [9 - draw-square 💪](draw-square/draw-square.js)
- [10 - draw-diagonal](draw-diagonal/draw-diagonal.js)
- [11 - draw-chess-table](draw-chess-table/draw-chess-table.js)

### Functions

```javascript
function greetEPAMAlert() {
  alert('Hello EPAM!');
}

greetEPAMAlert();

function greetEPAMLog() {
  console.log('Hello EPAM!');
}

greetEPAMLog();
```

#### Function arguments

```javascript
function greetByName(name) {
  console.log(arguments);
  console.log('Well hi there,', name);
}

greetByName('Évi');
greetByName('István', 'mentor');
```

#### Default values for function arguments

```javascript
function greet(greet = 'Hi', name = 'pal') {
  console.log(greet, name);
}

greet('Hey');
greet('Hello', 'Peter');
```

#### Function return values

```javascript
function makeGreen(name) {
  const newName = `Green ${name}`;
  return newName;
}

name = makeGreen('Egg');
greetByName('Whazzup', name);
```

#### Exercises

- [12 - doubling](doubling/doubling.js)
- [13 - greet](greet/greet.js)
- [14 - append-s](append-s/append-s.js)
- [15 - sum](sum/sum.js)
- [16 - factorio](factorio/factorio.js)
- [17 - printer](printer/printer.js)

### Data structures

#### Array methods

```javascript
console.log(['apple', 'pear', 'melon'].indexOf('pear')); // 1

['apple', 'pear', 'melon'].forEach((e, i) => {
  console.log(e, i);
});

const triples = [1, 2, 3, 4, 5].map((e) => {
  return e * 3;
});
console.log(triples); // [3, 6, 9, 12, 15]

const evens = [1, 2, 3, 4, 5].filter((e) => {
  return e % 2 === 0;
});
console.log(evens); // [2, 4]

const isAllEven = [2, 6, 14, 5, 4].every((e) => {
  return e % 2 === 0;
});
console.log(isAllEven); // false

const isAnyEven = [2, 6, 14, 5, 4].some((e) => {
  return e % 2 === 0;
});
console.log(isAnyEven); // true

const letters = 'apple'.split('');
console.log(letters); // ['a', 'p', 'p', 'l', 'e']
console.log(letters.join('@')); // Worms in the apple!
```

#### Exercises

- [18 - third](third/third.js)
- [19 - compare-length](compare-length/compare-length.js)
- [20 - sum-elements](sum-elements/sum-elements.js)
- [21 - swap-elements](swap-elements/swap-elements.js)
- [22 - print-all](print-all/print-all.js)
- [23 - change-element](change-element/change-element.js)
- [24 - increment-element](increment-element/increment-element.js)
- [25 - append-s-array](append-s-array/append-s-array.js)
- [26 - double-items](double-items/double-items.js)
- [27 - colors](colors/colors.js)
- [28 - sum-all](sum-all/sum-all.js)
- [29 - diagonal-matrix](diagonal-matrix/diagonal-matrix.js)
- [30 - reverse](reverse/reverse.js)

[array-methods]: https://colintoh.com/blog/5-array-methods-that-you-should-use-today
[array-mdn]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
