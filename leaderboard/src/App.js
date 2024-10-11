// src/App.js

import React from 'react';
import './App.css';
import Leaderboard from './leaderboard/leader.component';

function App() {
  return (
    <div className="App bg-blue-500 h-full h-screen">
      <header className="App-header ">
      </header>
      <main>
        <Leaderboard />
      </main>
    </div>
  );
}

export default App;
