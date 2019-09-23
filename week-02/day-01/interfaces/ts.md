# Abstracts & Interfaces

*There are times when we need common features in classes but they don't work on
their own.*

In some situations either:

- we want to inherit from multiple classes
- the base classes have expectations in order to be used, or in order to support
  a much larger framework.

TypeScript gets round this through Abstracts and Interfaces.

## Materials & Resources

### Training

| Material                                                                                                        |    Time |
| :-------------------------------------------------------------------------------------------------------------- | ------: |
| [Interfaces](https://www.youtube.com/watch?v=NeUrwZVi4IE)                                                       |    5:43 |
| [Typescript interfaces](https://www.youtube.com/watch?v=Lyt_7p6nzck)                                            |   16:37 |
| [Classes vs interfaces](https://toddmotto.com/classes-vs-interfaces-in-typescript)                              | reading |
| [Abstract Classes in TypeScript](https://hackernoon.com/abstract-classes-in-typescript-text-video-cda9a4e6a56a) | reading |

### Optional

| Material                                                                                    |    Time |
| :------------------------------------------------------------------------------------------ | ------: |
| [Interfaces (typescriptlang)](https://www.typescriptlang.org/docs/handbook/interfaces.html) | reading |
| [Diamond problem](assets/diamond_problem.png)                                               | reading |
| [TypeScript advanced interfaces](https://www.youtube.com/watch?v=AN8zXNm10Cw)               |   19:08 |

## Material Review

### Basic definitions

- What is interface?
  <!--
    Just think through what the word means.
    Eg.: User Interface is what you can do with an application.
    Interfaces have the same goal, define what we want to do with different things.
    The interface is a collection of methods, these are the actions what we can be called on the implementing classes.
    Intefaces say nothing about implementation, they tell you what kind fo methods you need to implement.

    You can look at interfaces like a contract. If you want to happen something good to your class then you must provide some method.
  -->
- Do we have naming conventions about interfaces?
  <!--
    Since interfaces tell us what can we do with a class usually their names end with "able", It is not a rule but a common naming convention
    In different languages we have different conventions for interfaces.
  -->
- Can I define private methods on interfaces?
  <!--
    Nope, just think through the purpose of interfaces. A private method has nothing to do with a class interfaces'
  -->
- What is the benefit of using interfaces?
  <!--
    By using interfaces you can decouple your business logic from the objects it is using. Eg.: If you have a FileReader Interface you can easily create and replace different readers (CSV, XML, JSON, ...)
  -->
- Sounds cool, how can I implement an interface?
  <!--
    With the implements keyword
  -->
- Can a class implement more interfaces?
  <!--
    Yes, it can, eg.:
      - an AirCraft can be fillable and flyable, it means it can fly and can be filled (with fuel or people)
      - a special ArrayList can be comparable (by length) and iterable
  -->
- What is abstract class?
  <!--
    Abstract classes are classes which are not fully defined yet.
    It has at least one method which needs to be implemented in the extending sub classes
    This is why it cannot be instantiated directly, if would instantiate an abstract class, the program would break when we call a not implemented method.
  -->
- What are abstract methods?
  <!--
    Abstract methods are the methods which need to be implemented in the extending classes. (You need to use the abstract keyword)
  -->
- Can I define properties on an interface?
  <!--
    Yes, you can.
  -->
- Should I define properties/methods on interfaces?
  <!--
    You shouldn't it is against the original purpose of interfaces. Default implementations are introduced for refactoring purposes.
  -->

### Relation to architecture

- What is an abstraction layer?
  <!--
    An abstraction layer/level is a generalization of a conceptual model or algorithm, away from any specific implementation. These generalizations arise from broad similarities that are best encapsulated by models that express similarities present in various specific implementations. The simplification provided by a good abstraction layer allows for easy reuse by distilling a useful concept or design pattern so that situations where it may be accurately applied can be quickly recognized.
  -->
- When do we use abstracts and interfaces?
  <!--
    Mostly when you design a system/architecture but anytime during development. With abstracts and interfaces we can create a sketch of the system without saying anything specific about the implementation.

    I have this kind of entites so I can do this and that with them. It is a big picture. With this you earn reusability and all the specific classes will be replacable with new implementations.

    Eg.:
    - I want to read data from a file or from the console
    - Then I want to convert somehow this raw data
    - Finally I want to save them into a file and I might want to support different formats as well.

    For that I can have this basic sketch

    abstract class Reader {
      abstract readInput(): Convertable
    }

    interface Convertable {
      convert(): Object
    }

    abstract class FilePersistor {
      public saveContent(contentToSave: Object): void {
        fileContent: string = this.convertToFormat(contentToSave);
        this.saveContent(fileContent)
      }

      public saveContent(fileContent: string): void {
        ...
      }

      abstract convertToFormat(dataToConvert: Object): string
    }
  -->
- What kind of system uses the most interfaces and abstracts?
  <!--
    All the systems are using these kinds of constructs however they can be find quite often in
     - Frameworks: Those system must work in very different situations with different entities so they cannot be frigid.
     - Apps that are using plugins: In this case you dont know the concrete implementation but you know what you want to do with the future entities
       - imagine a game (Like GTA) which can be extended special vehicles. The developer team doesnt know what kind of vehicles will be there, but they need to handle them in the  game logic. It can be achieved easily with interfaces
  -->
- How does polymorphism relate to abstracts and interfaces?
  <!--
    You can easily achieve polymorphism with interfaces and abstracts. You can use them as type in method signatures and property definitions but since they cannot be instantiated you definitely need to implement something else. From this point you can replace these entities and we are done, this is polymorphism.
  -->
- What is the diamond problem?
  <!--
    In some languages you can extend multiple classes and this can cause architectural questions. Let's say
    We have class "A" with a method "doSomething()"
    If we create class "B" and "C" which extends "A" and override "doSomething()" differently
    Now if you would create a class "D" which would extends "B" and "C" then how can it be decided which "doSomething()" should be executed?
  -->

- What is source code dependency?
  <!--
    Source code dependency is when you import/require a module. It means that your code is depending on that class and it might change if the dependent class changes.
  -->

- How do interfaces relate to (SOLI**D**)?
  <!--
    "D" is the dependency inversion, this is the way how you can prevent source code dependency.
    Think through the game example above. The interface is part of the game logic, it is developed by the team not the plugin developer. So the team doesnt need to change each time a new plugin has been released. Aka you are not depending on implementations/sub systems.
  -->

## Workshops

### Using an interface

```typescript
interface ClockConstructor {
  new (hour: number, minute: number): ClockInterface;
}

interface ClockInterface {
  tick(): void;
}

function createClock(
  ctor: ClockConstructor,
  hour: number,
  minute: number
): ClockInterface {
  return new ctor(hour, minute);
}

class DigitalClock implements ClockInterface {
  constructor(h: number, m: number) {}
  tick(): void {
    console.log('beep beep');
  }
}

class AnalogClock implements ClockInterface {
  constructor(h: number, m: number) {}
  tick(): void {
    console.log('tick tack');
  }
}

const digital = createClock(DigitalClock, 12, 17);
const analog = createClock(AnalogClock, 7, 32);
```

### Abstract classes

```typescript
abstract class Department {
  constructor(public name: string) {}

  printName(): void {
    console.log(`Department name: ${this.name}`);
  }

  abstract printMeeting(): void; // must be implemented in derived classes
}

class AccountingDepartment extends Department {
  constructor() {
    super('Accounting and Auditing'); // constructors in derived classes must call super()
  }

  printMeeting(): void {
    console.log('The Accounting Department meets each Monday at 10am.');
  }

  generateReports(): void {
    console.log('Generating accounting reports...');
  }
}

const department: Department; // ok to create a reference to an abstract type
department = new Department(); // error: cannot create an instance of an abstract class
department = new AccountingDepartment(); // ok to create and assign a non-abstract subclass
department.printName();
department.printMeeting();
department.generateReports(); // error: method doesn't exist on declared abstract type
```

### Exercises

#### Abstract classes

- [Instruments to Stringed Instruments](instruments/ts.md)
- [Animals in the Zoo 💪](zoo/ts.md)

#### Interfaces

- [Flyable](flyable/ts.md)
- [Printable](printable/ts.md)
- [Reservations 💪](reservations/ts.md)
