import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: '',
      age: -1,
      gender: '',
      location: '',
      restrictions: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { name, value, type } = event.target;
    type === 'checkbox' ? this.setState({ restrictions: [...this.state.restrictions, value] }, () => {
      console.log(this.state);

    }) : this.setState({ [name]: value }, () => {
      console.log(this.state);

    })
  }

  handleSubmit() {
    alert(`First name: ${this.state.firstName}\nLast name: ${this.state.lastName}\nAge: ${this.state.age}\nGender: ${this.state.gender}\nLocation: ${this.state.location}\nDietary restrictions: ${this.state.restrictions}\n`);
  }

  render() {
    return (
      <div className="App" >
        <form onSubmit={this.handleSubmit}>
          <input type='text' placeholder='First name' name='firstName' onChange={this.handleChange} /><br />
          <input type='text' placeholder='Lst name' name='lastName' onChange={this.handleChange} /><br />
          <input type='number' placeholder='Age' name='age' min="0" onChange={this.handleChange} /><br />
          <label>
            <input type='radio' name='gender' value='male' checked={this.state.gender === 'male'} onChange={this.handleChange} />Male
          </label><br />
          <label>
            <input type='radio' name='gender' value='female' checked={this.state.gender === 'female'} onChange={this.handleChange} />Female
          </label><br />

          <label>
            <select name='location' onChange={this.handleChange}>
              <option value='southAfrica'>South Africa</option>
              <option value='newZealand'>New Zealand</option>
              <option value='namibia'>Namibia</option>
            </select><br />
          </label>

          <label>
            <input
              name="vegetarian"
              type="checkbox"
              value="vegetarian"
              onChange={this.handleChange}
            /> vegetarian <br />
            <input
              name="kosher"
              type="checkbox"
              value="kosher"
              onChange={this.handleChange}
            /> kosher <br />
            <input
              name="lactoseFree"
              type="checkbox"
              value="lactoseFree"
              onChange={this.handleChange}
            /> lactose free <br />
            <input
              name="muslim"
              type="checkbox"
              value="muslim"
              onChange={this.handleChange}
            /> muslim <br />
          </label>
          <input type='submit'></input>
        </form>

      </div>
    );
  }

}

export default App;
