import React from 'react'
import UserCard from '../components/UserCard'
import Searchbar from '../components/Searchbar'

class UsersContainer extends React.Component {
    constructor() {
        super()
        this.state = {
            searchTerm: ""
        }
    }

    onChange = (e) => {
        this.setState({
            searchTerm: e.target.value.toLowerCase()
        })
    }

    render () {
        return(
            <div>
                <Searchbar onChange={this.onChange} />
                <div className= "card-columns users-container">
                        {this.props.registeredUsers.filter(u => u.name.toLowerCase().includes(this.state.searchTerm)).map(user => <UserCard user = {user} key = {user.id}/>)}
                </div>
            </div>
        )
    }
}

export default UsersContainer