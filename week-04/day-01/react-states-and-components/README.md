# States and Components

## Materials & Resources

| Material | Time |
|:-------- | ----:|
|[Components & Rendering](https://www.youtube.com/watch?v=fd2Cayhez58)| 3:12 |
|[Composing multiple components](https://www.youtube.com/watch?v=vu_rIMPROoQ)| 6:31 |
|[State vs Props & Application Data](https://www.youtube.com/watch?v=qh3dYM6Keuw)| 9:35 |
|[Events & Data changes](https://www.youtube.com/watch?v=_D1JGNidMr4)| 7:26 |
|[States](https://reactjs.org/docs/state-and-lifecycle.html) *until lifecycles* | - |
|[Handling events](https://reactjs.org/docs/handling-events.html)| - |
|[Conditional Rendering](https://reactjs.org/docs/conditional-rendering.html)| - |
|[Lists and Keys](https://reactjs.org/docs/lists-and-keys.html)| - |

## Material Review

### Components

- What is a component?
- What is a React component?
- What is a stateful component?
- What's the difference between a stateful and a stateless component?

### States

- What is a state?
- What's the purpose of the state?
- Why do I have to use the `.setState()` method instead of directly setting `this.state`?
- What are the disadvantages of the state?

### Event

- How can we handle user events?
- How can we handle click event?
- How can we handle onChange event in a dynamic way?

### Multiple rendering

- How can we render multiple react components?
- What is conditional rendering?
- Why do we use the `key` property when rendering lists in React?

## Workshop

Example:

```jsx
import React, { Component } from 'react';

class Academy extends Component {
  state = {
    epam: ''
  }

  handleClick = () => {
    this.setState({ epam: 'Shenzhen' });
  }

  render = () => (
    <div>
      <button onClick={this.handleClick}>
        Click me for your city
      </button>
      <div>{this.state.epam}</div>
    <div/>
  );
}

export default Academy;
```

### Components & States & Event handling

- [SimpleGoldenAcornApp](./SimpleGoldenAcornApp/README.md)

### Multiple component rendering

- [Todo app](./todo-app/README.md)

### Optional

- [Calculator](./calculator/README.md)
