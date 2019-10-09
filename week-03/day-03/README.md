# Document object model – DOM

You'll learn how the browser builds HTML documents.

## Materials and Resources

| Material                                                                                               | Time |
| :----------------------------------------------------------------------------------------------------- | ---: |
| [JavaScript Tutorial For Beginners #32 - What is the DOM in JavaScript?](https://youtu.be/H63dVFDuJDM) | 4:31 |
| [JavaScript Tutorial For Beginners #33 - Traversing the DOM](https://youtu.be/SowaJlX1uKA)             | 7:43 |
| [JavaScript: Browser - querySelector(), querySelector](https://www.youtube.com/watch?v=k69s-XlnVnE)    | 5:06 |
| [JavaScript Tutorial For Beginners #34 - Changing Page Content](https://youtu.be/FQuwArzGPYo)          | 5:38 |
| [JavaScript Tutorial For Beginners #35 - Changing Element Attributes](https://youtu.be/V0S0LXvnW-o)    | 6:02 |
| [JavaScript Tutorial For Beginners #36 - Changing CSS Styles](https://youtu.be/97agDBCyxAE)            | 4:49 |
| [JavaScript Tutorial For Beginners #37 - Adding Elements to the DOM](https://youtu.be/TrGI9Yki-24)     | 7:43 |
| [JavaScript Tutorial For Beginners #38 - Removing Elements from the DOM](https://youtu.be/rBGgguNnutE) | 4:12 |
| [JavaScript Tutorial For Beginners #40 - The onClick Event](https://youtu.be/XQEfWd1lh4Q)              | 8:04 |

### Reading

| Material                                                                                                       |
| :------------------------------------------------------------------------------------------------------------- |
| [What is the DOM?](https://css-tricks.com/dom/)                                                                |
| [Introduction to the DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction) |
| [Document Object Model (DOM)](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model)          |

#### Digging deeper

Read more about the DOM in the Eloquent Javascript book's relevant chapter:

<http://eloquentjavascript.net/13_dom.html>

## Material Review

- What is the Window object?
  <!--
    It is the global context of the JavaScript application. The same as the 
    global in node js. All the variables defined defined outside from a method
    will be stored on the global context just like methods provided by the 
    browser. Like console, setTimeout, etc...
  -->
- What is the `window.document` object?
  <!--
    The API provided by the browser to access the document. It represents
    the HTML page.
  -->
- What is the `DOM`?
  <!--
    Document Object Model, the OO representation of the document. It is a
    specification which is implemented in the browser slight differences can
    occur so try to use only standard methods.
  -->
- Is the `DOM` part of the JavaScript?
  <!--
    Nope it is an extension, a tool.
  -->
- What is the difference between `Node` and `Element`?
  <!--
    Inheritance, Element extends Node. For example each white space,
    text or comment is a Node but only the visible html elements are the
    Elements
  -->
- How can you access elements?
  - By ID?
    <!--
      window.{id}
      {id}
      document.getElementById('{id}')
    -->
  - By class?
    <!--
      document.getElementsByClassName('{class-name}')
      document.querySelectorAll('.{class-name}')
    -->
  - By tag?
    <!--
      document.getElementsByTagName('{tag-name}')
      document.querySelectorAll('{tag-name}')
    -->
  - By any css selector?
    <!-- 
      document.querySelector('{css-selector}')
      document.querySelectorAll('{css-selector}')
    -->
- What is the difference between `querySelector` and `querySelectorAll`?
  <!--
    querySelector returns the first matching element
    querySelectorAll returns all matching elements in a NodeList
  -->
- What's the difference between `querySelectorAll('.class')` and
  `getElemetnsByClassName('class')`
  <!--
    ByClassName and byTagName returns a living collection which means the list
    will be updated if the dom changes. QuerySelectorAll returns a static list. 
  -->
- How can you create a new Element?
  <!-- document.createElement('tagName') -->
- How can you append an Element to the DOM?
  <!-- element.appendChild(Element) -->
- How can you move an element in the DOM?
  <!-- 
    newParent.appendChild(Element);
    The browser will detach it from the previous parent element.
  -->
- How can you remove an Element from the DOM?
  <!-- Element.remove() -->
- How can you change the text content of an Element?
  <!--
    By assigning a string value to the textContent/innerText/innerHTML property.
    Or
    Appending a textNode to the element (appendChild(document.createTextNode()))
  -->
- Whats the difference between `innerText`, `textContent` and `innerHTML`?
  <!--
    The browser parses the innerHTML, it takes time and resource.
    InnerText is aware of the rendered appearance of text,
    while textContent is not.
  -->
- How can you set/get an attribute?
  <!--
    getAttribute()
    setAttribute()
    toggleAttribute()
  -->
- How can you add custom attributes to an Element?
  <!--
    custom attributes uses the 'data-' prefix
    also they can be accessed through the Element.dataset property
  -->
- How can you modify an Element's style?
  <!--
    With the style property but you need to use camelCase CSS properties
    Also it is possible to modify inline css with setAttribute()
  -->
- How can you add a new `class` to an Element?
  <!--
    You can extend the className property like Element.className += 'new-class';
    Or through the classList property: Element.classList.add('new-class')
  -->
- What is the difference between the `className` and `classList` property?
  <!--
    The className is a string which contains all the classes separated with a
    space meanwhile the classList is a DOMTokenList which is a kind of array
    with useful methods like contains, toggle, add, remove.
  -->
- What does the `classList.toggle` used for?
  <!--
    You can simple toggle a class on an Element without being aware of the
    current state. It is useful if you have a dropdown menu and you want to
    change its state on a click event.
  -->
- What is the `onclick` property used for?
  <!--
    You can invoke a javascript method if an element is clicked this can be done
    through the onclick property
  -->

## Workshop

### Including JavaScript in an HTML page

Within the `<script>` tag you can run JavaScript code or if you specify the
`src` attribute you can load a `.js` file.

```HTML
<script>
  console.log('Hello World!');
</script>

<script src="something.js"></script>
```

### Selecting elements

```javascript
const king = document.getElementById('b325');
const lamplighter = document.querySelector('.b329');
const asteroids = document.querySelectorAll('div.asteroid');

for (let i = 0; i < asteroids.length; i++) {
  console.log(asteroids[i]);
}
```

#### Example

*Open the developer tools in your browser to see the results of `console.log`*

You can find the above JavaScript code in HTML format:

- [accessing-elements.html](assets/examples/accessing-elements.html)

#### Exercises

- [queryselector-1.html](queryselector-1/queryselector-1.html)

### An element's contents

```javascript
const asteroid = document.querySelector('.asteroid');

console.log(asteroid.innerHTML);
console.log(asteroid.textContent);
asteroid.innerHTML = 'This is your <strong>new content!</strong>';
```

#### Example

You can find the above JavaScript code in HTML format:

- [element-contents.html](assets/examples/element-contents.html)

#### Exercises: innerHTML, textContent

- [content-1.html](content-1/content-1.html)
- [content-2.html](content-2/content-2.html)

### Element attributes

```javascript
const littlePrince = document.querySelector('img');

console.log(littlePrince.getAttribute('src'));
littlePrince.setAttribute('src', 'http://deji.chez.com/dessins/pp1.gif');
```

#### Example

You can find the above JavaScript code in HTML format:

- [element-attributes.html](assets/examples/element-attributes.html)

#### Exercises

- [attribute-1.html](attribute-1/attribute-1.html)

### Classes

```javascript
const asteroid = document.querySelector('div');

console.log(asteroid.classList.value);

console.log('asteroid?', asteroid.classList.contains('asteroid'));
console.log('planet?', asteroid.classList.contains('planet'));

asteroid.classList.add('new-class');
asteroid.classList.remove('asteroid');
console.log('still asteroid?', asteroid.classList.contains('asteroid'));
```

#### Example

The `.classList` property of a DOM node contains useful methods to analyze its
classes.

You can find the above JavaScript code in HTML format:

- [classlist.html](assets/examples/classlist.html)

#### Exercises

- [classlist-1.html](classlist-1/classlist-1.html)

### Creating, inserting & removing elements

```javascript
const asteroidList = document.querySelector('ul.asteroids');
const newAsteroid = document.createElement('li');

newAsteroid.id = 'b555';
newAsteroid.textContent = 'The Green Fox';
asteroidList.appendChild(newAsteroid);

const businessAsteroid = document.querySelector('.b328');
asteroidList.removeChild(businessAsteroid);
```

#### Example

You can find the above JavaScript code in HTML format:

- [create-insert-remove.html](assets/examples/create-insert-remove.html)

#### Exercises

- [createelement-1.html](createelement-1/createelement-1.html)
- [createelement-2.html](createelement-2/createelement-2.html)
- [createelement-3.html](createelement-3/createelement-3.html)

### onClick

```javascript
const button = document.querySelector('button');

button.onclick = () => {
  alert('Green Fox!');
};
```

### Example

You can find the above JavaScript code in HTML format:

- [onclick.html](assets/examples/onclick.html)

### Exercises

- [onclick.html](onclick/onclick.html)
- [list-manager.html 💪](list-manager/index.html) Build up
  [this](assets/list-manager.jpg) structure.

### SVG Elements (Optional)

The SVG image format is a vector format based on XML and it can be embedded to
the DOM.

```HTML
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
     <rect x="10" y="10" height="100" width="180"
     style="stroke:#ff0000; stroke-width: 10; fill: #0dc453"/>
</svg>
```

#### Example

You can find the above JavaScript code in HTML format:

- [svg-1.html](assets/examples/svg-1.html)

#### Exercises

- [svg-1.html](svg-1/svg-1.html)
- [greenfox-logo.html](greenfox-logo/greenfox-logo.html)

## Individual Workshop Review

Please follow the styleguide:
[Our JavaScript styleguide](../../styleguide/javascript.md)

- Is the directory structure and the name of the files correct?
- Is every file in strict mode?
- Is the indentation good in each file?
- Is there unnecessary code?
- Can you find unnecessary code in comments?
- Is there unnecessary code duplication?
- Are there unnecessary empty blocks?
- Can you spot unused variables?
