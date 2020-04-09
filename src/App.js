import React from 'react';
import './App.css';
import Home from './components/Home'
import Navbar from './components/Navbar'
import './home.css'
import ConstellationsContainer from './containers/ConstellationsContainer'
import UserContainer from './containers/UserContainer'
import PlanetsContainer from './containers/PlanetsContainer'
import {Route, Switch} from 'react-router-dom'
import Login from './components/Login'
import PlanetShowPage from './containers/PlanetShowPage'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      planets: [],
      constellations: [],
      user: {}
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
        
       
       
        <Switch>
          <Route exact path = "/" component = {Home}/>
          <Route exact path = "/planets" render = {() => <PlanetsContainer planets = {this.state.planets}/>} />
          <Route exact path = "/constellations" render = {() => <ConstellationsContainer constellations = {this.state.constellations}/>}/>
          <Route exact path = "/login" render = {() => <Login handleLoginSubmit = {this.handleLoginSubmit}/>}/>
          <Route exact path = "/planets/:id" render = {(props) => {
                      console.log("What are router props?", props)
                      let planetId = parseInt(props.match.params.id)
                      let foundPlanet = this.state.planets.find(p => p.id === planetId)
                      return <PlanetShowPage planet = {foundPlanet}/>}}/>
          <Route exact path = "/users/:id" render = {() => <UserContainer />}/>
        </Switch>

      </div>
    );
  }

  handleLoginSubmit= (event) => {
    event.preventDefault()
    console.log("submitting")
  }
  
}

export default App;
