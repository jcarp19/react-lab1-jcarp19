import React from 'react';
import './App.css';
import AdDesigner from './components/AdDesigner';
import Votes from './components/Votes';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Ice Cream Wars</h1>
      </header>
      <div className="App-wrapper">
        <div>
          <AdDesigner />
        </div>
        <div>
          <Votes />
        </div>
      </div>
    </div>
  );
}

export default App;
