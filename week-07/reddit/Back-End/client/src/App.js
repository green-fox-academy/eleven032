import React from 'react';
import Header from './components/Header';
import PostsList from './components/PostsList';
import Side from './components/Side';
import NewPost from './components/NewPost';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';



function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Switch>
          <Route exact path='/'>
            <div className="main">
              <PostsList />
              <div className="side"><Side /></div>
            </div>
          </Route>
          <Route path='/submit'>
              <NewPost />
          </Route>
        </Switch>
      </Router>
    </div >
  );
}

export default App;
