import React from 'react';

class Login extends React.Component {
    render() {
        return(<div>
            <h1>Login</h1>
            <form onSubmit={this.props.handleLoginSubmit}>
            <label>Username:</label>
            <input type="text"></input>
            <label>Password:</label>
            <input type="text"></input>
            <input type="submit"></input>
            </form>
        </div>)
    }
}

export default Login