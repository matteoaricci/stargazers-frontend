import React from 'react'

class UserCard extends React.Component {

    handleClick = () => {
        window.location = `http://localhost:3001/users/${this.props.user.id}`
    }

    render() {
        return(
            <div className = "clickable card" onClick={this.handleClick}>
                <img className="avatar" src={"data:image/png;base64," + this.props.user.image} />
                <h2>{this.props.user.name}</h2>
            </div>
        )
    }
}

export default UserCard