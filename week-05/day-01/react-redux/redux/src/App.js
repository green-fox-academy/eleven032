import React from 'react';
import Increaser from './components/Increaser';
import Decreaser from './components/Decreaser';
import Resetter from './components/Resetter';
import Setter from './components/Setter';
import AddTag from './components/AddTag';
import Display from './components/DisplayTags';
import RemoveTag from './components/RemoveTag';
import Counter from './components/Counter';
function App() {

  return (
    <div className="App">
      <Increaser />
      <Decreaser />
      <Resetter />
      <Setter />
      <Display />
      <AddTag />
      <RemoveTag />
      <Counter />
    </div>
  );
}

export default App;
