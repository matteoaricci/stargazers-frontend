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
import ConstellationShowPage from './containers/ConstellationShowPage'
import SignsContainer from './containers/SignsContainer'
import SignShowPage from './containers/SignShowPage'
import CreatePage from './containers/CreatePage';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      planets: [],
      constellations: [],
      signs: [],
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

    fetch("http://localhost:3000/signs")
    .then(resp => resp.json())
    .then(signs => this.setState({signs: signs}))
  }
  render() {
    return (
      <div className="App">
        <Navbar />
        
       
       
        <Switch>
          <Route exact path = "/" component = {Home}/>
          <Route exact path = "/planets" render = {() => <PlanetsContainer planets = {this.state.planets}/>} />
          <Route exact path = "/create" render = {() => <CreatePage />} />
          <Route exact path = "/constellations" render = {() => <ConstellationsContainer constellations = {this.state.constellations}/>}/>
          <Route exact path = "/login" render = {() => <Login handleLoginSubmit = {this.handleLoginSubmit}/>}/>
          <Route exact path = "/planets/:id" render = {(props) => {
                      console.log("What are router props?", props)
                      let planetId = parseInt(props.match.params.id)
                      let foundPlanet = this.state.planets.find(p => p.id === planetId)
                      return <PlanetShowPage routerProps = {props} planet = {foundPlanet}/>}}/>
          <Route exact path = "/constellations/:id" render = {(props) => {
                      console.log("What are router props?", props)
                      let constellationId = parseInt(props.match.params.id)
                      let foundConstellation = this.state.constellations.find(c => c.id === constellationId)
                      return <ConstellationShowPage constellation = {foundConstellation}/>}}/>
          <Route exact path = "/signs/:id" render = {(props) => {
                      console.log("What are router props?", props)
                      let signId = parseInt(props.match.params.id)
                      let foundSign = this.state.signs.find(s => s.id === signId)
                      return <SignShowPage sign = {foundSign}/>}}/>
          <Route exact path = "/users/:id" render = {() => <UserContainer />}/>
          <Route exact path = "/signs" render= { () => <SignsContainer signs = {this.state.signs} /> } />
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
