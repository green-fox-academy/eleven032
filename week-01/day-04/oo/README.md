# Object Oriented Programming

## Materials & Resources

### Materials

Before starting the materials do this little exercise: [Doable homework](homework/README.md)

| Material | Time |
|:-------- | ----:|
|[What is OOP](https://www.youtube.com/watch?v=pTB0EiLXUC8) | 7:33 |
|[Javascript Classes](https://www.youtube.com/watch?v=Ug4ChzopcE4) | 5:09 |
|[Javascript Constructors](https://www.youtube.com/watch?v=HboT8g_QSGc) | 5:37 |
|[Javascript Methods](https://www.youtube.com/watch?v=hy-C4NY7A_8) | 3:34 |
| More examples| - |
|[Basic class](https://www.youtube.com/watch?v=AuXusxRqa24) | 13:13 |
|[More basic class](https://www.youtube.com/watch?v=XPw7nQSmMqU) | 16:29 |
|[Bigger Class Example](https://www.youtube.com/watch?v=Tllw4EPhLiQ) | 17:25 |
|[Classes](https://www.tutorialspoint.com/es6/es6_classes.htm)| reading until Class inheritance |

## Material Review

- What is OOP?
  <!--
    OOP is a paradigm that is concerned mainly with the way that code is organized.
    It gives us classes, and other tools to group similar things together.
  -->
- Do we have other paradigms?
  <!--
    Yes, we have different paradigms. Moreover languages can follow more paradigms.
    eg.: functional, procedural etc..
  -->
- Is OOP the best?
  <!--
    No, there is no best paradigm. It depends on the given problem, environment and sometimes taste.
    comparisson: Stateful - Stateless
  -->
- What is a class?
  <!--
    It is a blueprint. It tells what makes something a "thing".
    The Bird is a class,
      - it tells us that each bird has wings, feet but they don't have any teeth or battery
      - they can fly, eat but they can't write or drive a car.
    You can use that blueprint to create different instances of that class. Eg.: A white eagle or a black falcon, etc...
    They will behave the same but their properties will differ.

    Think them as real blueprints, you can build white, red any colored house from the same blueprint, you can change even the windows, but the sizes will be the same and you can enter the building the same way.

    Since it is a concept, a thing it has always singular name!!!
  -->
- What is the constructor?
  <!--
    This will be called when you create a new instance of the class by using the new keyword.
    All the classes have a default empty constructor w/o any parameters. If you want to do something during the instantiation you have to define your own constructor.
    You can define more constructors so your class can be instantiated in different ways.
    Usually we assign value to the instance variables, we initialize the instance in the constructor. We shouldn't have any side effect in the constructor.
  -->
- What does the this keyword mean?
  <!--
    It references to the instance, you can use it to access your props and methods
  -->
- What is the difference between classes and instances?
  <!--
    You are the instance, Person is the class. Person is a concept, You are one concrete example of that concept.
  -->
- What are fields, props?
  <!--
    These are the properties what each instance must own but they have different values in each instance.
    Eg.: Each Person has
      - hair color
      - length
      - weight
      - eye color

    These properties hold the current state of the instance.
  -->
- What are the methods?
  <!--
    These are those action what can be made on your instance or can be performed by the instance.
    For example a Person can
      - eat(Food)
      - drive(Car)
      - hit(Person)
      - sleep()

    These actions will change the instance's current state or will interact with other objects/instances.
  -->
- What are getters and setters?
  <!--
    The getter/setter syntax exists for properties that must be calculated based on other properties. Get and set allows us to run code on the reading or writing of a property.
  -->
- What is encapsulation?
  <!--
    In order to keep the internal consistency you have to hide your internal state.
      - A Car, if it is driven, the fuelLevel is decreasing and the runKms is increasing. If the runKms would be public you would be able to change it without lowering the fuelLevel.
      - If you have a bank account you need a transaction to change the balance. If the balance would be public it could be editable without any history.

    Sometimes you want to hide a complex system from the user, because he doesn't want to deal with implementation details.
     - You don't now how an array stores its values. You just call the function on it.
  -->
- How does the SRP come up in OOP?
  <!--
    SRP: It means one thing must do only one thing. This is not the right definition but it is a good start.
    In OOP each class must deal with only one topic/thing. It should not write files and calculate complex logic.
    Indicator: too many properties, the properties are used in different methods.
  -->
- What is a class variable?
  <!--
    It is defined on the class, not on the instances. You remeber only one class exists, so in his case we will have only one variable.
    Each instances will have the same variable so if one changes it all the other instances will point to the new value.
    Eg. A counter which counts how many instances have been created from the class.
  -->
- What does the static keyword do?
  <!--
    This is how you can create class variables. You can use this keyword for methods as well.
  -->
- How can I use classes from other files?
  <!--
    First the class must be exported by the export keyword.
      export class Something {}
      export default class Something {}
    When you export a class then it will be available from outside of your file.

    An exported class can be imported by
      import Something from "..."  - if it is exported as default
      import { Something } from "..." - if it is exported normally
  -->
-

## Workshop

-  [Post-it](post-it/README.md)
-  [BlogPost](blog-post/README.md)

### Encapsulation and Constructor

```javascript
class Human {

  constructor(name = 'unknown', age = 0, iq = 0) {
    this.name = name;
    this.age = age;
    this.iq = iq;
  }

  isSmart() {
    return this.iq > 100;
  }

  isNameless() {
    return this.name === 'unkown' || this.name === '';
  }

  beSmarter() {
    this.iq += 20;
  }
}

const human = new Human();
const human2 = new Human('Laci', 18, 110);

human.name = 'Hector';
human.age = 1;

if (human.isSmart()) {
  console.log(`${human.name} is smart, with iq: ${human.iq}`);
}
```

-  [Animal](animal/README.md)
-  [Sharpie](sharpie/README.md)
-  [Counter](counter/README.md)

### Use classes

```javascript
export class Usable {

  constructor() {
    this.status = 'I\'m not used at all';
  }

  use() {
   this.status = 'Now, I was used at least once.';
  }
}

const firstUsable = new Usable();
firstUsable.use();
```

- [Pokemon](pokemon/Pokemon.js), [Main](pokemon/main.js)
- [Fleet of Things](fleet-of-things/fleetOfThings.js), [Fleet](fleet-of-things/fleet.js), [Thing](fleet-of-things/thing.js)
- [Dice set](dice-set/DiceSet.js)
- [Dominoes](dominoes/dominoes.js), [Domino](dominoes/domino.js) 💪

### Complex Architectures

-  [Teachers and Students](teachers-and-students/README.md)
-  [Petrol Station](petrol-station/README.md)

### Getters and Setters

```javascript
class Page {

  constructor(content = '') {
    this.content = content;
  }

  set newContent(newContent) {
    this.content = this.content.concat(newContent);
  }

  addNewContent(newContent) {
    this.content = this.content.concat(newContent);
  }
}

class Diary {

  constructor() {
    this.pages = [];
  }

  add(page) {
    this.pages.push(page);
  }

  get lastPage() {
    if (this.pages.length === 0) {
      return undefined;
    }
    return this.pages[this.pages.length - 1];
  }

  countBlankPages() {
    let counter = 0;

    for (let i = 0; i < this.pages.length; i++) {
      if (this.pages[i].getContent() === '') {
        counter++;
      }
    }
    return counter;
  }
}

const pageOne = new Page();
const pageTwo = new Page('Learn JavaScript.');
const myDiary = new Diary();

pageOne.addNewContent('Enroll at Green Fox Academy');
pageTwo.newContent = 'Learn TypeScript as well.';

myDiary.add(pageOne);
myDiary.add(pageTwo);

console.log(myDiary.lastPage);
```

-  [Sharpie Set](sharpie-set/README.md)
-  [Farm](farm/README.md)
-  [Blog](blog/README.md)

### All together

-  [Pirates](pirates/README.md)
-  Redo the 5 trees homework (with classes)
