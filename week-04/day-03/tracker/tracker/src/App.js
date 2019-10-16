import React from 'react';
import C1 from './components/c1.js';
import C2 from './components/c2.js';
import Table from './components/table.js';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
 
} from "react-router-dom";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      content: []
    }
    this.record = this.record.bind(this);
  }


  record(name, time) {
    console.log(this.state.content);

    this.setState(prevState => ({
      content: [...prevState.content, { name, time }]
    }
    ))
  }

  componentDidMount() {
    console.log('parent component did mount');
  }

  componentDidUpdate() {
    console.log('parent component did update!')
    console.log(this.state.content)
  }
  render() {
    return (
      <Router>
        <Link to="/C1" className="link">
          1
        </Link>

        <Link to="/C2" className="link">
          2
        </Link>
        <Table info={this.state.content} />

        <Switch>
          <Route exact path="/c1">
            <C1 record={this.record} />
          </Route>
          <Route exact path="/c2">
            <C2 record={this.record} />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
