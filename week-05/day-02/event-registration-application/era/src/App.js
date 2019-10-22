import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      list: [],
      firstName: '',
      lastName: '',
      email: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    console.log('here1');

    const { name, value } = event.target;
    this.setState({
      [name]: value
    })
  }

  handleSubmit(event) {
    console.log('here2');

    let people = [];
    people.push(this.state.firstName);
    people.push(this.state.lastName);
    people.push(this.state.email);
    this.setState({ list: [...this.state.list, people] })
    event.preventDefault();
  }
  render() {
    return (
      <div className="App" >
        <form onSubmit={this.handleSubmit}>
          <input type='text' name='firstName' placeholder='First name' onChange={this.handleChange}></input><br />
          <input type='text' name='lastName' placeholder='Last name' onChange={this.handleChange}></input><br />
          <input type='text' name='email' placeholder='Email address' onChange={this.handleChange}></input><br />
          <input type="submit" value="Submit" />
        </form>
        <ul>{this.state.list.map((people, key) => {
          return <li key={key + people[1]}>{people[0]} {people[1]} {people[2]}</li>
        })}
        </ul>

      </div>
    );
  }
}

export default App;
