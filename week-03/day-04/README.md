# Event Listener

You'll learn how the browser builds HTML documents.

## Materials and Resources

| Material                                                                                              | Time  |
| :---------------------------------------------------------------------------------------------------- | ----: |
| [JavaScript DOM Tutorial #9 - Events](https://youtu.be/ndz6iH6o1ms)                                   | 11:13 |
| [JavaScript DOM Tutorial #10 - Event Bubbling](https://youtu.be/SqQZ8SttQsI)                          |  7:42 |
| [JavaScript DOM Tutorial #15 - Checkboxes & Change Events](https://youtu.be/D-sSNQfz_1s)              |  4:24 |
| [JavaScript DOM Tutorial #18 - DOMContentLoaded Event](https://youtu.be/G5Or47gPH-4)                  |  4:29 |
| [Javascript Events Tutorial - How Web Developers Respond to User Input](https://youtu.be/e57ReoUn6kM) | 18:49 |

| Optional                                                                                              | Time  |
| :---------------------------------------------------------------------------------------------------- | ----: |
| [JavaScript DOM Tutorial #11 - Interacting with Forms](https://youtu.be/n4B7vY9SIds)                  |  5:42 |

## Material Review

- event
  <!--
    A real life action what you want to handle in your program.
    - an automatic door, action: you walked into the observed area
    - the elevator, action: you pushed the button
    - rendering website, action: content loaded
    - communicating with the server, action: response received
  -->
- javascript events
  - `click`, `mouseenter`, `mouseleave`
  - `focus`, `blur`, `input`, `change`, `submit`
  - `keyup`, `keypress`, `keydown`,
  - `scroll`,
  - `readystatechange`,
    <!--
      Why is it fired 4 times?
    -->
  - `load`
    <!--
      The load event can be used to detect a fully-loaded page. (each stylesheet, image, subframes, etc...)
      It is fired on the window element, window.addEvenetListener('load', ...);
    -->
  - `DOMContentLoaded` - optional
    <!--
      The DOMContentLoaded event is fired when the document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading
      It is fired on the document object, document.addEventListener('DOMContentLoaded, ...);
    -->
- event target
  <!--
    EventTarget is an interface implemented by objects that can receive events and may have listeners for them.
    Element, document, and window are the most common event targets, but other objects can be event targets too, for example XMLHttpRequest, AudioNode, AudioContext, and others.
  -->
  - `addEventListener`, `HTMLElement.on...`
  - `removeEventListener`
  - `dispatchEvent` - optional
    <!--
      Fires the event on the EventTarget
    -->
- event bubbling
  <!--
    The browser checks to see if the element that was actually clicked on has an onclick event handler registered on it in the bubbling phase, and runs it if so.
    Then it moves on to the next immediate ancestor element and does the same thing, then the next one, and so on until it reaches the <html> element.
  -->
  - `event.target`, `event.currentTarget`
    <!--
      event.target: the originator HTMLElement which dispatched the event
      event.currentTarget: the HTMLElement on we handle the event
    -->
- `preventDefault()`
  <!--
    prevents the default behaviour, like anchor navigation and form submission
  -->

## Workshop

```javascript
const button = document.querySelector('button');
const alertGreenFox = () => {
  alert('Green Fox!');
};
button.addEventListener('click', alertGreenFox);
```

### Example

You can find the above JavaScript code in HTML format:

- [events.html](assets/events.html)

### Exercises

- [Count the elements](counter/counter.html)
- [Keyup Event](keyup/keyup.html)
- [One Time Clicker](click-once/click-once.html)
- [Bubbling](bubbling/bubbling.html)
- [Delayed Click](delayed-click/README.md)
- [Click Three Times](click-three-times/README.md)
- [Candy Game](candy-game/game.js), [HTML](candy-game/game.html)

### Advanced exercises

- [Infinite scroll 💪](infinite-scroll/README.md)
- [Dispatch click](dispatch-click/index.html)
- [Custom events 💪💪](custom-events/index.html)

## Individual Workshop Review

Please follow the styleguide: [Our JavaScript styleguide](../../styleguide/javascript.md)

- Is the directory structure and the name of the files correct?
- Is every file in strict mode?
- Is the indentation good in each file?
- Is there unnecessary code?
- Can you find unnecessary code in comments?
- Is there unnecessary code duplication?
- Are there unnecessary empty blocks?
- Can you spot unused variables?
