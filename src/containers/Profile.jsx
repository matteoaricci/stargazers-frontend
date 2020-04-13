import React from 'react'

class Profile extends React.Component {
    render() {
        return (
            <div>
                <div>Profile</div>
                <h1>{this.props.user.name}</h1>
            </div>
        )
