import React from 'react';
import Increaser from './components/Increaser';
import Decreaser from './components/Decreaser';
import Resetter from './components/Resetter'
import Setter from './components/Setter'
function App() {
  return (
    <div className="App">
      <Increaser />
      <Decreaser />
      <Resetter />
      <Setter />
    </div>
  );
}

export default App;
