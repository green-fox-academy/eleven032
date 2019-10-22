import React from 'react';


class List extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: '',
      email: ''
    }
  }

  handleChange() {

  }



  render() {
    return (
      <div className="App" >
        <form>
          <input type='text' placeholder='First name' onChange={this.handleChange}></input>
        </form>
      </div>
    );
  }

}

export default List;
