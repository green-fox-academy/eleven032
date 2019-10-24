import React from 'react';
import Increaser from './components/Increaser';
import Decreaser from './components/Decreaser';
import Resetter from './components/Resetter';
import Setter from './components/Setter';
import AddTag from './components/AddTag';
import Display from './components/DisplayTags';
import RemoveTag from './components/RemoveTag';
import Counter from './components/Counter';
import RemoveTags from './components/RemoveAll';
import AsyncCounter from './components/AsyncCounter';
function App() {

  return (
    <div className="App">
      <AsyncCounter />
      <Increaser />
      <Decreaser />
      <Resetter />
      <Setter />
      <Display />
      <AddTag />
      <RemoveTag />
      <Counter />
      <RemoveTags />
    </div>
  );
}

export default App;
