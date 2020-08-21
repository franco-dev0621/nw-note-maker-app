import React from 'react';
import './App.css';
import NavBar from './components/Navbar';
import Buttons from './components/Buttons';

function App() {
  return (
    <div className="App" style={{backgroundColor: '#f1f1f1'}}>
      <NavBar />
      <Buttons />
    </div>
  );
}

export default App;
