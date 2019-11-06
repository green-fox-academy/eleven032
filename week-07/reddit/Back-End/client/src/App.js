import React from 'react';
import Header from './components/Header';
import PostsList from './components/PostsList';
import Side from './components/Side';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <PostsList />
        <Side />
      </main>
    </div>
  );
}

export default App;
