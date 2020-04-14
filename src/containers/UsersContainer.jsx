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
            planetObjSearch: {},
            constellationSearch: ""
        }
    }

    onChange = (e) => {
        this.setState({
            searchTerm: e.target.value.toLowerCase()
        })
    }

    onSignChange = (e) => {
        this.setState({signSearch: parseInt(e.target.value)})
    }

    onPlanetChange = (e) => {
        this.setState({
            planetSearch: parseInt(e.target.value)
        })
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
            console.log("not empty")
            filteredUsers = filteredUsers.filter(user => user.planets.includes(this.props.planets.find(planet => planet.id === parseInt(this.state.planetSearch))))
        }
         return filteredUsers               
    }

    render () {
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
        )
    }
}


{/* user.favorite_planets.forEach(favPlanet => favPlanet.planet_id === this.state.planetSearch)
 return user}) */}

export default UsersContainer