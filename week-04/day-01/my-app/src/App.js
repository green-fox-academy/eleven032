import React from 'react';
import Container from './container.js';
import Head from './components/head.js'
function App() {
  const style = {
    display: "flex",
    flexDirection: "column"
  };
  return (
    <div className="App" style={style}>
      <Head title="Hotel Booking" />
      <Container />
    </div>

  );
}

export default App;