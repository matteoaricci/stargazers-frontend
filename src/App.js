import React from 'react';
import logo from './logo.svg';
import './App.css';
import Welcome from './components/welcome'
import Navbar from './components/navbar'
import './Welcome.css'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Welcome />
      </div>
    );
  }
}

export default App;
