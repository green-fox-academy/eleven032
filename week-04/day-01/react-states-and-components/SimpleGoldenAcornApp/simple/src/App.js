import React from 'react';

import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      num: 0
    }
  }

  increase() {
    this.setState({
      num: this.state.num + 1
    })
  }

  decrease() {
    if (this.state.num !== 0) {
      this.setState({
        num: this.state.num - 1
      })
    }

  }

  render() {
    const style = {
      display: "flex",
      flexDirection: "column"
    }
    return (
      <div>
        <input type="button" value='-' onClick={this.decrease.bind(this)} />
        <div>{this.state.num}</div>
        <input type="button" value='+' onClick={this.increase.bind(this)} />
      </div>)

  }

}

export default App;
