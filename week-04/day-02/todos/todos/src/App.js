import React from 'react';
import TodoList from './components/TodoList.js';
import TodoItems from './components/TodoItems.js';
import './App.css';
class App extends React.Component {
  constructor() {
    super()
    this.state = {
      items: [],
      currentItem: { text: '', key: '', isChecked: 'false' },
    }
    this.check = this.check.bind(this);
  }

  check = key => {
    const newList = this.state.items.map(item => {
      if (item.key === key) {
        item.isChecked = !item.isChecked;
      }
    })
    this.setState({
      items: newList,
    })
  }

  deleteItem = key => {
    const filteredItems = this.state.items.filter(item => {
      return item.key !== key
    })
    this.setState({
      items: filteredItems,
    })
  }

  handleInput = e => {
    const itemText = e.target.value
    const currentItem = { text: itemText, key: Date.now() }
    this.setState({
      currentItem,
    })
  }

  addItem = e => {
    e.preventDefault()
    const newItem = this.state.currentItem
    if (newItem.text !== '') {
      console.log(newItem)
      const items = [...this.state.items, newItem]
      this.setState({
        items: items,
        currentItem: { text: '', key: '' },
      })
    }
  }

  render() {
    return (
      <div className="App">
        <h1 className="heading">TODOS</h1>
        <TodoList addItem={this.addItem} inputElement={this.inputElement}
          handleInput={this.handleInput}
          currentItem={this.state.currentItem} />
        <TodoItems entries={this.state.items} deleteItem={this.deleteItem} check={this.check} />
      </div >
    )
  }
}
export default App;