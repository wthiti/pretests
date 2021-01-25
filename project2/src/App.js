import React from 'react';
import logo from './logo.svg';
import { Category } from './features/category/Category';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Category />
      </header>
    </div>
  );
}

export default App;
