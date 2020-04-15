import React from 'react'
import UserCard from '../components/UserCard'
import Searchbar from '../components/Searchbar'
import UserDropdownFilter from '../components/UserDropdownFilter'

class UsersContainer extends React.Component {
    constructor() {
        super()
        this.state = {
            searchTerm: "",
            signSearch: "",
            planetSearch: "",
            constellationSearch: ""
        }
    }

    onChange = (e) => {
        this.setState({
            searchTerm: e.target.value.toLowerCase()
        })
    }

    onSignChange = (e) => {
        this.setState({signSearch: e.target.value})
    }

    onPlanetChange = (e) => {
        this.setState({planetSearch: e.target.value})
    }

    onConstellationChange = (e) => {
        this.setState({constellationSearch: e.target.value})
    }

    filterFunction = () => {
        
        let filteredUsers = this.props.registeredUsers.filter(u => u.name.toLowerCase()
                        .includes(this.state.searchTerm))
                        .filter(user => (user.sign.name.includes(this.state.signSearch)))
        console.log(filteredUsers)
        if (this.state.planetSearch !== "") {
            let helperArray= filteredUsers
            filteredUsers = []
            let planetId = parseInt(this.state.planetSearch)
            let searchedPlanet = this.props.planets.find(planet => planet.id === planetId)
            helperArray.forEach(user =>{
                user.planets.forEach(planet => {
                    if (planet.name === searchedPlanet.name){
                        filteredUsers.push(user)
                    }
                })
            })
        }
        if (this.state.constellationSearch !== ""){
            let anotherHelperArray = filteredUsers
            filteredUsers = []
            let constellationId = parseInt(this.state.constellationSearch)
            let searchedConstellation = this.props.constellations.find(constellation => constellation.id === constellationId)
            anotherHelperArray.forEach(user => {
                user.constellations.forEach(constellation => {
                    if (constellation.name === searchedConstellation.name) {
                        filteredUsers.push(user)
                    }
                })
            })
        }        
         return filteredUsers               
    }

    render () {
        if (this.props.registeredUsers){
        return(
            <div>
                <Searchbar onChange={this.onChange} placeholderPhrase="Search Users by Name" />
                <UserDropdownFilter handleOnChange = {this.onSignChange} searchBy = "name" searchOptions = {this.props.signs} searchName = "Sign" searchValue = {this.state.searchSign}/>
                <UserDropdownFilter handleOnChange = {this.onPlanetChange} searchBy = "id" searchOptions = {this.props.planets} searchName = "Favorite Planets" searchValue = {this.state.planetSearch}/>
                <UserDropdownFilter handleOnChange = {this.onConstellationChange} searchBy = "id" searchOptions = {this.props.constellations} searchName = "Favorite Constellations" searchValue = {this.state.constellationSearch} />
                <div className= "card-columns users-container">
                        {this.filterFunction().map(user => <UserCard user = {user} key = {user.id}/>)}
                </div>
            </div>
        )}else{
            return null
        }
    }
}

export default UsersContainer