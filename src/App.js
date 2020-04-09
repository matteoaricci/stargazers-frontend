import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home'
import Navbar from './components/Navbar'
import './home.css'
import ConstellationsContainer from './containers/ConstellationsContainer'
import UserContainer from './containers/UserContainer'
import PlanetsContainer from './containers/PlanetsContainer'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      planets: [],
      constellations: []
    }
  }

  componentDidMount(){
    fetch("http://localhost:3000/constellations")
    .then(resp => resp.json())
    .then(constell => this.setState({constellations: constell}))

    fetch('http://localhost:3000/planets')
    .then(resp => resp.json())
    .then(planets=> this.setState({planets: planets}))
  }
  render() {
    return (
      <div className="App">
        <Navbar />
        <Home />
        <ConstellationsContainer constellations={this.state.constellations}/>
        <UserContainer />
        <PlanetsContainer planets = {this.state.planets}/>
      </div>
    );
  }
}

export default App;
