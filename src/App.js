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
import SignsContainer from './containers/SignsContainer'
import UsersContainer from './containers/UsersContainer'
import UserShowPage from './containers/UserShowPage'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      registeredUsers: [],
      planets: [],
      constellations: [],
      signs: [],
      typedUsername: "",
      typedPassword: "",
      user: null,
      favorite_planets: [],
      favorite_constellations: [],
      userSign: null
    }
  }

  componentDidMount(){
    console.log("app mounting")
    if (localStorage.getItem('jwt')) {
      fetch("http://localhost:3000/profile",{
        headers: {
          "Authentication": localStorage.getItem('jwt')
        }
      })
      .then(resp => resp.json())
      .then(json => {
        this.setState({
          user: json.user,
          userSign: json.sign
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

    fetch("http://localhost:3000/users")
    .then(resp => resp.json())
    .then(allUsers => this.setState({registeredUsers: allUsers}))

    fetch("http://localhost:3000/favorite_planets")
    .then(resp => resp.json())
    .then(favplanets => this.setState({favorite_planets: favplanets}))

    fetch("http://localhost:3000/favorite_constellations")
    .then(resp => resp.json())
    .then(favconst => this.setState({favorite_constellations: favconst}))

  }

  deleteAccount = (user) => {
    fetch(`http://localhost:3000/users/${user.id}`, {
      method: "DELETE"
    })
    .then(resp => resp.json())
    .then(json => {
      localStorage.removeItem("jwt")
      window.location = '/login'
      console.log(json)
    })
  }

  render() {
    return (
      <div className="App">
        <Navbar user={this.state.user} logout={this.logout}/>
       
        <Switch onUpdate={() => window.scrollTo(0, 0)}>
          <Route exact path = "/" component = {Home}/>
          <Route exact path = "/planets" render = {() => <PlanetsContainer planets = {this.state.planets}/>} />
          <Route exact path = "/create" render = {() => <CreatePage />} />
          <Route exact path = "/constellations" render = {() => <ConstellationsContainer constellations = {this.state.constellations}/>}/>
          <Route exact path = "/login" render = {() => (this.state.user ? <Redirect to="/profile"/> : <Login handleLoginSubmit = {this.handleLoginSubmit} typedUsername= {this.state.typedUsername} typedPassword = {this.state.typedPassword} handleOnChange = {this.handleOnChange}/>)}/>
          <Route exact path = "/planets/:id" render = {(props) => {
                      let planetId = parseInt(props.match.params.id)
                      let foundPlanet = this.state.planets.find(p => p.id === planetId)
                      return <PlanetShowPage updateFavoritePlanets = {this.updateFavoritePlanets} user={this.state.user} routerProps = {props} planet = {foundPlanet} favPlanets = {this.state.favorite_planets}/>}}/>
          <Route exact path = "/users/:id" render = {(props) => {
                      let userId = parseInt(props.match.params.id)
                      let foundUser = this.state.registeredUsers.find(u => u.id === userId)
                      return <UserShowPage currentUser={this.state.user} showUser = {foundUser} />}}/>
          <Route exact path = "/constellations/:id" render = {(props) => {
                      let constellationId = parseInt(props.match.params.id)
                      let foundConstellation = this.state.constellations.find(c => c.id === constellationId)
                      return <ConstellationShowPage updateFavoriteConstellations = {this.updateFavoriteConstellations} constellation = {foundConstellation} user={this.state.user} favConstellations = {this.state.favorite_constellations}/>}}/>
          <Route exact path = "/signs/:id" render = {(props) => {
                      let signId = parseInt(props.match.params.id)
                      let foundSign = this.state.signs.find(s => s.id === signId)
                      return <SignShowPage sign = {foundSign}/>}}/>
          <Route exact path = "/signs" render = {() => <SignsContainer signs = {this.state.signs}/>} />
          <Route exact path = "/profile" render = {() => <Profile deleteAccount={this.deleteAccount} userSign = {this.state.userSign} user={this.state.user} favConstellations={this.state.favorite_constellations.filter(favConst => favConst.user_id === this.state.user.id)} favPlanets={this.state.favorite_planets.filter(favplanet => favplanet.user_id === this.state.user.id)}/> }/>
          <Route exact path = "/users" render = {() => <UsersContainer registeredUsers = {this.state.registeredUsers} signs = {this.state.signs} planets = {this.state.planets} constellations = {this.state.constellations}/> } />
          <Route exact path = "/signup" render= {() => (this.state.user ? <Redirect to="/profile"/> : <Signup saveLoginDetails = {this.saveLoginDetails} handleSignup={this.handleSignup} signs={this.state.signs} user={this.state.user}/>)}/>
          
        </Switch>
      </div>
    );
  }

  updateFavoritePlanets = (planet) => {
    this.setState({favorite_planets: [...this.state.favorite_planets, planet]})
  }

  updateFavoriteConstellations = (constellation) => {
    this.setState({favorite_constellations: [...this.state.favorite_constellations, constellation]})
  }

  saveLoginDetails = (user, sign) => {
    this.setState({user: user, userSign: sign})
  }

  handleLoginSubmit= (event) => {
    event.preventDefault()
    fetch('http://localhost:3000/login', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        username: this.state.typedUsername,
        password: this.state.typedPassword
      })
    })
    .then(resp=>resp.json())
    .then(json => {
      this.setState({
        typedUsername: "",
        typedPassword: ""
      })
      if (json.error){
        alert(json.message)
      } else {
        this.setState({
          user: json.user,
          userSign: json.sign
        })
        localStorage.setItem('jwt', json.token)
      }
    })
  }

  logout = () => {
    localStorage.removeItem("jwt")
    this.setState({
      user: null
    })
  }

  handleSignup = () => {
    console.log("signing up")
  }

  handleOnChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

}

export default App;
