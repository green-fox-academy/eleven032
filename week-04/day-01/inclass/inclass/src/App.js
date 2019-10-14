import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <FirstClass hello='hello!' />
      {/* <SecondClass second='Hello2!' /> */}
    </div>
  );
}

class FirstClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 5 };
    this.handleClick = this.handleClick.bind(this);
  }

  generate() {
    let result = '';
    for (let i = 0; i < this.state; i++) {
      result += this.props.hello
    }
    console.log(result);

    return result;
  }

  handleClick() {
    this.setState({ count: this.state.count + 1 })
  }

  render() {
    return <p onClick={this.handleCqlick}>
      {this.generate()}
    </p>
  }
}


function SecondClass(props) {
  return <p>{props.second}</p>
}

export default App;
