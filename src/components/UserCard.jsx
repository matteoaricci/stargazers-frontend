import React from 'react'

class UserCard extends React.Component {

    handleClick = () => {
        window.location = `http://localhost:3001/users/${this.props.user.id}`
    }

    render() {
        return(
            <div className = "card-columns clickable" onClick={this.handleClick}>
                {this.props.user.name}
            </div>
        )
    }
}

export default UserCard