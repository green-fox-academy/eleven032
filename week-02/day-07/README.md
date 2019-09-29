# ES versions and differences

## Materials

| Material                                                                                       |  Time |
| :--------------------------------------------------------------------------------------------- | ----: |
| [From ES 5 to ES Next](https://www.freecodecamp.org/news/es5-to-esnext-heres-every-feature-added-to-javascript-since-2015-d0c255e13c6e/) | reading |
| [ES 6, 7, 8 features on Medium](https://medium.com/@madasamy/javascript-brief-history-and-ecmascript-es6-es7-es8-features-673973394df4) | reading |
| [ES Next on Medium](https://medium.com/@selvaganesh93/javascript-whats-new-in-ecmascript-2019-es2019-es10-35210c6e7f4b) | reading |

## Material Review
- Why is this important to know?
- [Can I use `Object.assign()`?](https://caniuse.com/#search=object.assign)
- ES6
  - `let` and `const`
  - arrow functions and their scope of `this`
  - classes and inheritence
  - static methods
  - getters and setters
  - default parameters
  - template literals
    - multiline string
    - interpolation
    - tags
  - destructuring
  - enhanced object literals
    - prototype definition
    - dynamic properties
  - for-of
  - promises (*)
  - modules
    - cors (*)
  - new methods of
    - string
    - object
    - array
  - spread operator
  - new data structures
    - Set (WeakSet)
    - Map (WeakMap)
  - generators (*)
  - `**`
- ES7
  - string padding
  - new object methods
  - `async`/`await` (*)
- ES8
  - spread operator extension
  - async iteration (*)
  - Regexp improvements
- ESNext
  - flat, flatMap
  - new methods of
    - object
    - string
    - function
  - JSON improvements

## Workshop

### Arrow function

Write a function call in the commented area with an old anonym function and an arrow function. Both anonym functions functions should take a number parameter and return it's square value.

```javascript
function multiPurposeFunction(action){
    if (action){
        console.log(action(3));        
    }
}

function exampleNonAnonymFunction(param){
    return param*param;
}

function frameFunction(){
    // this function call shows an example,
    // but it is not using anonym functions
    multiPurposeFunction(exampleNonAnonymFunction());
    // write your code here
}

frameFunction();
```

In the next exercise write two anonym functions again.
This time the returned value is conditional.

If the first parameter is an empty string, it should return the second parameter. If not, it should return the two parameters joined by a single space.

```javascript
function multiPurposeFunction(action){
    if (action){
        console.log(action('John', 'Smith'));
        console.log(action('', 'Bond'));        
    }
}

function frameFunction(){
    // Write your code here
}

frameFunction();
```

### Classes

In ES6 classes became available. Before that you had to use prototype to create OO patterned code. For example if you need a class named Apple with type, color and in info function, you could write this code in ES5:

```javascript
function Apple (type) {
    this.type = type;
    this.color = "red";
}
 
Apple.prototype.getInfo = function() {
    return this.color + ' ' + this.type + ' apple';
};
```

The same in ES6 would look like this:

```javascript
class Apple{
    constructor(type){
        this.type = type;
        this.color = "red";
    }
    getInfo(){
        return this.color + ' ' + this.type + ' apple';
    }
}
```

Write with both technologies a class that's named `Garden`, has `width` and `length` as fields and the following functions: `area()`, `circumference()` and `efficiency()`. The function called efficiency should return the result of `area() / circumference()`.

### Class inheritance

Using classes calls for class inheritance. Here is a quick example in ES5 for inheritance implementation:

```javascript
// this is the base class
function Person(fName, lName) {
  this.firstName = fName;
  this.lastName = lName;
}
Person.prototype.getFullName = function () {
  return this.firstName + ' ' + this.lastName;
};
// this is the child class
function Employee(fName, lName, eId) {
  Person.call(this, fName, lName);
  this.empId = eId;
}
// we need to set the class prototype for inheritance
Employee.prototype = Object.create(Person.prototype);
// we have reassigned the constructor so we need to set it back
Employee.prototype.constructor = Employee;
// this is a new function for the inherited class
Employee.prototype.getEmpInfo = function () {
  return [this.empId, this.firstName, this.lastName];
};
var e1 = new Employee('Jhon', 'Doe', 10);
e1.getFullName();
e1.getEmpInfo();
console.log(e1 instanceof Person);
console.log(e1 instanceof Employee);
```

Create a `Playground` class that is extended from the `Garden` class. Give it an extra `toys` field which should be a string array. Give it an `add(toy)` function that stores the new toy in the toys array.

### Literals

ES6 made creating objects also easier. If you look at the code below you can see how attributes were assigned in newly created objects. With ES6 you can use dynamic properties in creation, not just after it, and if the property name is the same as the variable name, then you can shorthand those variables. 

```javascript
var type = 'regular';
var color = 'blue';
var height = 40;
var propName = 'height';

// before ES6
var lamp = {
    type: type,
    color: color
};
lamp[propName]= height;

// with and after ES6 
var newLamp = {
    type,
    color,
    [propName]: height
};
```

Based on this finish the function below in two ways. Once without the ES6 features and once with the ES6 features.

```javascript
function carWrapper(model, color, year, doors, specPropName, specPropValue){
    // the function should create and return an object with assigning the model, color year and doors to properties with the same name as the variable and it should assign to the specPropName named property the specPropValue
    
}

console.log(JSON.stringify(carWrapper('Benz','black',1886,0,'historical',true)));
// expected output: { model: 'Benz', color: 'black', year: 1886, doors: 0, historical: true}
```

### Destructoring

ES6 didn't just make the creation of objects easier but also property extraction. Take a look on the two codes below:

```javascript
var lamp = {
   type: 'spooky',
   color: 'orange',
   fresh: true,
   details: {
       brightness: 'various'
   }
};

// before ES6
var type = lamp.type;
var color = lamp.color;
var fresh = lamp.fresh;
var lampBrightness = lamp.details.brightness;

// from ES6
var {type, color, fresh, details:{brightness: lampBrightness}} = lamp;
```

Your next task is to get the object properties with and without ES6 destructoring from the following objects.

```javascript
var car = {
    model:'Benz',
    color:'black',
    year:1886,
    doors:0,
    historical:true
};
var computer = {
    type: 'PC',
    monitor: {
        color: 'black',
        size: '16\"',
        HDMI: true,
        VGA: true
    },
    tower:{
        color: 'grey',
        CPU: 4.7,
        memory: 16,
        SSD: 128
    }
}
```

### Template strings

ES6 gives a new way to create strings.
```javascript
var name = 'Bob';
var old = 'Hello '+name+'!\nHow are you today?'; // this is the old  way of creating a dynamic string.
var updated = `Hello ${name}!
How are you today?`; 
```

Write a `log(timestamp, username, action)` function that will create and return a string based on this template:

```
"INFO - {timestamp}
{username} : {action}"
```

### Default

ES6 provides new features to process function parameters and to provide them.

```javascript
// default values before ES6
function foo(x,y){
    if (y === undefined){ y = 12; }
    return x + y;
}

// with ES6
function foo(x, y=12) {
    // y is 12 if not passed (or passed as undefined)
    return x + y;
}
```

Write a function that returns a string. Possible values are "coffee", "coffee with sugar", "coffee with milk", "coffee with sugar and with milk". The function should take two parameters, "sugar" and "milk", with default "false" boolean value.

### Rest

You can also take unknown amount of arguments more easily.

```javascript
function foo(){
    var rest = Array.from(arguments);
    var x = rest.shift();
    // at this point we have rest with the content we want
    return x * rest.length;
}

function foo(x, ...rest) {
  return x * rest.length;
}

foo(4,3,2,1)
```

Write a function that takes at least 3 parameters, all of them numbers. The function should return a matrix and the first two parameters should specify it's size. The first parameter is the number of rows, the second is the number of columns. The rest of the numbers is the content of the matrix line-by-line. If the matrix can't be created because of insufficient parameters the function should return `null`. 

### Spread

You can also spread the elements of an array into function parameters.

```javascript
function foo(x, y, z) {
  return x + y + z;
}

// before ES6
foo.apply(null,[1,2,3]);

// with ES6
foo(...[1,2,3]);
```

The following function takes three numbers and decides whether it could be a triangle or not. The next array contains number arrays with possible triangle sides. Please create a new array that holds boolean values that are created with the isTriangle function and the number arrays.

```javascript
function isTriangle(a,b,c){
    if (a <= 0 || b <= 0 || c <= 0){return false;}
    if (a+b <= c){return false;}
    if (a+c <= b){return false;}
    if (b+c <= a){return false;}
    return true;
}
var possibleTriangles = [
    [1,1,1],
    [3,4,5],
    [1,2,3],
    [5,12,13],
    [-1,-1,-1]
];
```

### Let + Const vs. Var

In ES6 the use of `var` is discouraged. The main difference is that the two new keywords will explicitly allow or forbid you the change of variables. Creating constants with `var` needs closures. Also in some cases variables declared with `var` will remain live beyond their intended use.

```javascript
// without ES6
function example(valueToFix){
    var fixValue = function(){
        var hidden = valueToFix;
        return function(){return hidden;}
    };
    if (true){
        var changeable = 2;
    }
    changeable = fixValue()();
}

// with ES6
function example(valueToFix){
    const fixValue = valueToFix;
    if (true){
        let changeable = 2;
        changeable = 3;
    }
    // changeable doesn't exist here so it can't be used
    let changeable = fixValue; // but it can be redeclared
}
```

Write a function that takes a number array and returns the average of the numbers. In the function store the length of the parameter in a `const` variable.

### For ... of

Before ES6 for cycles that aimed to cycle through a list of elements could only be designed with an iterator variable used as an index. With ES6 you can use the for...of syntax to work with the array items.

```javascript
const arr = [1,2,3,4];

// before ES6
for (let ind = 0; ind < arr.length; ind++){
    console.log(arr[ind]);
}

// with ES6
for (let item of arr){
    console.log(item);
}
```

Write a function that finds the maximum value in an array.

```javascript
const data = [5,1,2,9,7,3,8];
```

### Set

Without ES6 if you wanted to have a list with unique items you had to create it on your own. ES6 introduced Set as a built in solution.

```javascript
// ES6 solution
const setEntity = new Set();
setEntity.add(1).add(2).add(1);
for (let item of setEntity){
    console.log(item);
}
```

Write a solution that uses no ES6 functionality but provides set-like behaviour. It's enough to store and read data, you don't have to implement every feature of the ES6 Set class.

Write a short code that presents your code's features as an example.

### Array.prototype.includes()

This is a minor improvement is ES7. The Array class got a function named "includes". It returns a boolean value which is true if the parameter given to the function is present in the array. Earlier you could use the indexOf function but it wouldn't return a boolean right away.

```javascript
const arr = [1,2,3];
if (arr.indexOf(2) !== -1){
    console.log("We found 2 in the array without ES7 tools.");
}
if (arr.includes(2)){
    console.log("We found 2 in the array with ES7 tools.");
}
```

Update your ES6 Set class exchanging the array function you used to the other one.

After that create a function that takes two arrays and returns those numbers which are not present in both arrays.

### `Object.values` / `Object.entries`

ES8 introduced access to object values and entries as arrays. Before that you had to use `Object.keys` to get the object's keys first and then iterate through those.

```javascript
const obj = {x:1,y:2,z:3};

// before ES8
for (let key of Object.keys(obj)){
    console.log(obj[key]);
}
for (let key of Object.keys(obj)){
    console.log([key, obj[key]]);
}

// with ES8
for (let val of Object.values(obj)){
    console.log(val);
}
for (let entry of Object.entries(obj)){
    console.log(entry);
}
```

Write a function that takes an object which has numbers on it's values. It represents the result of a word count on a text. The function should return the word with the highest count.

### Proxy

This ES6 feature takes a heavy load off the developers' shoulders. It can be used for many purposes, we will show one of them. The main idea is to have a target object representing a triangle with it's sides. We will create a Proxy to limit the fields you can set and we will create a field that can only be read.

```javascript
const target = {a:1,b:1,c:1};
const handler = {
    get: function(targetObject, field){
        if (field === 'a' || field === 'b' || field === 'c'){
            return targetObject[field];
        }
        if (field === 'circ'){
            return targetObject.a + targetObject.b + targetObject.c;
        }
        return undefined;
    },
    set: function(targetObject, field, value){
        if (field === 'a' || field === 'b' || field === 'c'){
            return targetObject[field] = value;
        }
    }
};
const proxyObject = new Proxy(target, handler);
proxyObject.a = 3;
proxyObject.b = 4;
proxyObject.c = 5;
console.log(proxyObject.circ);
proxyObject.x = 8;
console.log(proxyObject.x);
console.log(target.x);
```

This is only one usage of `Proxy` but it shows how convenient it can be once the proxy object is created.

Create a `Proxy` based object that disables the setting of any field and only provides access to the `nextId` field. If that field is read, either initialize it to `1` if the target has no such field or increment it with `1` and then return the new value.

### Optional chaining

For now this feature is not implemented yet in ES but it's worth mentioning that it's a planned feature. In javascript if you refer a nested element you might get an error because the element containing the nested element is undefined.

```javascript
const obj = {};
console.log(obj.x.y); // this will throw an error
```

You can create conditional statements that will protect against these errors.

```javascript
const obj = {};
if (obj && obj.x){
    console.log(obj.x.y);
} else {
    console.log(undefined);
}
```

With the planned optional chaining feature you could shorthand this code like this:

```javascript
const obj = {};
console.log(obj?.x?.y);
```

This way if either `obj` or `obj.x` is `undefined` or `null` then you will receive `undefined` otherwise the value of `obj.x.y`.

### BMI

Write a function that takes an object with mass and height fields. Return a new object with the original fields and a new bmi field with the calculated [bmi value](https://en.wikipedia.org/wiki/Body_mass_index).

### Vector initializer

Write a function that has 3 parameters: `x, y, z`. Their default values should be `0`. The function should return an array that contains `x, y, z` in this order.

Use this function to update the following array's arrays to three dimensional vectors:

```javascript
const vectors = [
    [1,2,3],
    [],
    [2,3],
    [-1],
    [6,7,8,9]
];
// expected result:
// [1,2,3]
// [0,0,0]
// [2,3,0]
// [-1,0,0]
// [6,7,8]
```

### Primitive fields

Write a function that takes an object and returns the names of it's fields if they have primitive types as values.

```javascript
// example
primitiveFields({x:1,y:true, z:[]});
// should return
['x','y']
```

### Warehouse💪

Create four classes: `Warehouse`, `Item`, `Toy`, `Tool`.

The `Item` has two fields, name and price. The constructor of the item should take both values as parameters but the price should have a default value of `1`.

The `Toy` and `Tool` classes are inherited from the `Item` class.

The `Toy` has an extra color field which can be set through the constructor parameter.

The `Tool` has an extra condition field which cannot be set through the constructor and has a default value of "good".

All three classes have a `print()` function that writes the field values to the console ("vase - 30", "blue car - 10", "poor hammer - 5").

The `Warehouse` has an `itemList` field, an `addItem(item)` function which stores the new item in the list and a `printItemsOfType(type)` function which expects a type (`Item`, `Toy`, `Tool`) parameter and prints those items that fit the criteria (hint: use `instanceof`).

```javascript
 // this snippet is for testing your code
const wh = new Warehouse();
wh.addItem(new Item("vase", 30));
wh.addItem(new Toy("pebble", undefined, "grey"));
wh.addItem(new Toy("car", 10, "blue"));
wh.addItem(new Tool("hammer", 25));
wh.printItemsOfType(Item);
wh.printItemsOfType(Toy);
wh.printItemsOfType(Tool);
```
