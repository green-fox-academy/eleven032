import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      base: '',
      toppings: [],
      cut: '',
      comment: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { name, value, type } = event.target

    type === 'checkbox' ? this.setState({
      toppings: [...this.state.toppings, value]
    }, () => {
      console.log(this.state);
    }) : this.setState({
      [name]: value
    }, () => {
      console.log(this.state);
    })


  }

  render() {
    return (
      <div className="App" >
        <h1>Customize your own Pizza</h1>
        <form>
          <label>
            Pick your base: <br />
            <select name='base' onChange={this.handleChange}>
              <option value="panPizza">Pan Pizza</option>
              <option value="chicagoStyle">Chicago Style</option>
              <option value="thickStyle">Thick Style</option>
              <option value="CT">Cracker and Thin Styles</option>
              <option value="newYorkStyle">New York Style</option>
              <option value="californiaStyle">California Style</option>
            </select>
          </label>
          <br />



          <label>
            <ul>
              Toppings selection:
              <br />
              <li><input
                name="Pepperoni"
                type="checkbox"
                value="pepperoni"
                onChange={this.handleChange}
              /> Pepperoni</li>
              <li><input
                name="Mushrooms"
                type="checkbox"
                value="mushrooms"
                onChange={this.handleChange}
              />Mushrooms</li>
              <li><input
                name="Onions"
                type="checkbox"
                value="onions"
                onChange={this.handleChange}
              />Onions</li>
              <li><input
                name="Sausage"
                type="checkbox"
                value="sausage"
                onChange={this.handleChange}
              />Sausage</li>
              <li><input
                name="Pepperoni"
                type="checkbox"
                value="pepperoni"
                onChange={this.handleChange}
              />Pepperoni</li>
              <li><input
                name="Bacon"
                type="checkbox"
                value="bacon"
                onChange={this.handleChange}
              />Bacon</li>
            </ul>
          </label>

          <label>
            Cut or not:
            <input type='radio' name='cut' value='yes' checked={this.state.cut === 'yes'} onChange={this.handleChange} />Cut
          </label>
          <label>
            <input type='radio' name='cut' value='no' checked={this.state.cut === 'no'} onChange={this.handleChange} />No cut
          </label>
          <br />
          <label>
            AnyComment:<br />
            <textarea name='comment' onChange={this.handleChange}></textarea>
          </label>
        </form>
      </div >
    );
  }


}

export default App;
