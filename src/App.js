import React from 'react';
import './App.css';
import Home from './components/Home'
import Navbar from './components/Navbar'
import './home.css'
import ConstellationsContainer from './containers/ConstellationsContainer'
import Profile from './containers/Profile'
import PlanetsContainer from './containers/PlanetsContainer'
import {Route, Redirect, Switch} from 'react-router-dom'
import Login from './components/Login'
import PlanetShowPage from './containers/PlanetShowPage'
import ConstellationShowPage from './containers/ConstellationShowPage'
import SignShowPage from './containers/SignShowPage'
import CreatePage from './containers/CreatePage';
import Signup from './components/Signup'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      planets: [],
      constellations: [],
      signs: [],
      typedUsername: "",
      typedPassword: "",
      user: null
    }
  }

  componentDidMount(){
    if (localStorage.getItem('jwt')) {
      fetch("http://localhost:3000/profile",{
        headers: {
          "Authentication": localStorage.getItem('jwt')
        }
      })
      .then(resp => resp.json())
      .then(json => {
        this.setState({
          user: json
        })
      })
    }
    
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
        <Navbar user={this.state.user} logout={this.logout}/>
       
        <Switch>
          <Route exact path = "/" component = {Home}/>
          <Route exact path = "/planets" render = {() => <PlanetsContainer planets = {this.state.planets}/>} />
          <Route exact path = "/create" render = {() => <CreatePage />} />
          <Route exact path = "/constellations" render = {() => <ConstellationsContainer constellations = {this.state.constellations}/>}/>
          <Route exact path = "/login" render = {() => (this.state.user ? <Redirect to="/profile"/> : <Login handleLoginSubmit = {this.handleLoginSubmit} typedUsername= {this.state.typedUsername} typedPassword = {this.state.typedPassword} handleOnChange = {this.handleOnChange}/>)}/>
          <Route exact path = "/planets/:id" render = {(props) => {
                      let planetId = parseInt(props.match.params.id)
                      let foundPlanet = this.state.planets.find(p => p.id === planetId)
                      return <PlanetShowPage user={this.state.user} routerProps = {props} planet = {foundPlanet}/>}}/>
          <Route exact path = "/constellations/:id" render = {(props) => {
                      let constellationId = parseInt(props.match.params.id)
                      let foundConstellation = this.state.constellations.find(c => c.id === constellationId)
                      return <ConstellationShowPage constellation = {foundConstellation}/>}}/>
          <Route exact path = "/signs/:id" render = {(props) => {
                      let signId = parseInt(props.match.params.id)
                      let foundSign = this.state.signs.find(s => s.id === signId)
                      return <SignShowPage sign = {foundSign}/>}}/>
          <Route exact path = "/profile" render = {() => <Profile user={this.state.user}/> }/>
          <Route exact path = "/signup" render= { () => <Signup handleSignup={this.handleSignup} signs={this.state.signs} /> } />
