# Data structures

Practice working with data structures

## Materials and resources

Recap these videos, they might come handy again.

Make sure you finish the sorting assignment, re-watch the video if needed.

### Strings

| Material                                                                                                       | Time |
| :------------------------------------------------------------------------------------------------------------- | ---: |
| [JavaScript Tutorial For Beginners #24 - Strings](https://www.youtube.com/watch?v=k8MIbEVXhE0)                 | 9:37 |
| [JavaScript Tutorial For Beginners #25 - Slice and Split Strings](https://www.youtube.com/watch?v=HEdikBHsMag) | 6:38 |

#### Reading

Check the MDN reference for Strings:

<https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/String>

Check the following frequently used methods:

- [indexOf](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf)
- [replace](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace)
- [split](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split)
- [substr](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substr)
- [trim](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/Trim)
- [endsWith](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith)


### Objects

| Material                                                                                                                | Time |
| :---------------------------------------------------------------------------------------------------------------------- | ---: |
| [Coding Train: JavaScript Objects](https://www.youtube.com/watch?v=-e5h4IGKZRY)                                         | 9:23 |
| [JavaScript Tutorial For Beginners #28 - Creating a new JavaScript Object](https://www.youtube.com/watch?v=wA5vU_HQfVI) | 9:23 |

Check the following frequently used methods:

- [keys](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys)
- [values](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/values)
- [hasOwnProperty](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty)

#### Reading

Check the MDN reference for Objects:

[Check the MDN reference for Objects](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/object)
[Destructuring assignment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)

### Callback
| Material                                                                 | Time  |
| [Callback Functions Basics](https://www.youtube.com/watch?v=haz4SBcEYAw) | 5:03  |
| [Higher order fuctions](https://www.youtube.com/watch?v=BMUiFMZr7vk)     | 10:48 |

## Material review

- strings
  - `indexOf`
  - `replace`
  - `split`
  - `substr`
  - `trim`
  - `endsWith`
- arrays
- objects
  - `keys`
  - `values`
  - `hasOwnProperty`
- reference vs. value
- destructuring assignment
- callback
- timers
  - `setTimeout`
  - `setInterval`
  - `clearTimeout`
  - `clearInterval`

## Workshop

### Strings

Strings are basic data structures, they can be treated like lists / arrays.

- [Simple replace](simplereplace/simple-replace.js)
- [Reverse](reverse/reverse.js)
- [Url fixer](urlfixer/url-fixer.js)
- [Takes longer](takeslonger/takes-longer.js)
- [Todo print](todoprint/todo-print.js)

### Data structures

- [Map introduction 1](./map-introduction-1/README.md)
- [Map introduction 2](./map-introduction-2/README.md)
- [Telephone book](./telephone-book/README.md)
- [Product database](./product-database/README.md)
- [Product database 2](./product-database-2/README.md)
- [Shopping list](./shopping-list/README.md)


### Callback

```javascript
const useCallback = callback => {
  callback('Chewing out a rhythm on my bubble gum');
  callback('The sun is out and I want some');
  callback(
    'It\'s not hard, not far to reach, we can hitch a ride to Rockaway Beach'
  );
};

const printSentence = sentence => {
  console.log(sentence);
};

useCallback(printSentence);
```

- [Simple Timeout](simple-timeout/simple-timeout.js)
- [Multiple Timeout](multiple-timeout/multiple-timeout.js)
- [Map with...](callback-1/callback-1.js)


### Optional exercises

- [Solar system](solarsystem/solar-system.js)
- [Matchmaking](matchmaking/matchmaking.js)
- [Append letter](appendletter/append-letter.js)
- [Candyshop](candyshop/candyshop.js)
- [Element finder](elementfinder/element-finder.js)
- [Is in list](isinlist/is-in-list.js)
- [Quote swap](quoteswap/quote-swap.js)
- [Calculator](calculator/calculator.js)
- [He will never](hewillnever/he-will-never.js)
- [Student counter](student-counter/student-counter.js)
- [Student filter](student-filter/student-filter.js)
- [Bank transfer](bank-transfer/bank-transfer.js)
- [Festival entry](festival-entry/festival-entry.js)
- [Table printer](table-printer/table-printer.js)
- [Find the substring in the list](substrlist/substrlist.js)
- [Guess my number](guess-my-number/README.md)
- [Josephus Problem](josephus-problem/README.md)
- [Armstrong Number](armstrong-number/README.md)

## Individual Workshop Review

Please follow the styleguide:
[Our JavaScript styleguide](../../styleguide/javascript.md)

- Is the directory structure and the name of the files correct?
- Are the includes placed on the top of the files?
- Is the indentation good in each file?
- Is there unnecessary code?
- Can you find unnecessary code in comments?
- Is there unnecessary code duplication?
- Are there unnecessary empty blocks?
- Can you spot unused variables?
- Is the commit message meaningful?
- Can iterating over lists and arrays simplified?
- Are the names of things following the styleguide?
- Are all of the brackets in the perfect place?
- Whitespaces, where they should be, where shouldn't?
