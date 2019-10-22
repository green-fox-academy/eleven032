import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      userName: '',
      emailAddress: '',
      password: '',
      flag: true
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.validate = this.validate.bind(this);
  }

  validate = () => {
    if (this.state.name === '') {
      return true;
    }

    if (!this.state.emailAddress.includes("@")) {
      return true
    }

    if (this.state.emailAddress.length < 8) {
      return true;
    }
    return false;
  };

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    })
    if (!this.validate()) {
      this.setState({ flag: false })
    }
  }

  handleSubmit(event) {
    console.log(this.state);
    event.preventDefault();
  }

  render() {
    return (
      <div className="App" >
        <form onSubmit={this.handleSubmit}>
          <input type='text' name='userName' placeholder='User name' onChange={this.handleChange}></input><br />
          <input type='text' name='emailAddress' placeholder='Email address' onChange={this.handleChange}></input><br />
          <input type='text' name='password' placeholder='Password' onChange={this.handleChange}></input><br />
          <input type="submit" value="Submit" disabled={this.state.flag} />
        </form>
      </div>
    );
  }
}

export default App;
