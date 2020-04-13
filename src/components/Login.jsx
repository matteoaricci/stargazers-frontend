import React from 'react';

class Login extends React.Component {
    render() {
        return(<div>
            <h1>Login</h1>
            <form onSubmit={this.props.handleLoginSubmit}>
            <label>Username:</label>
            <input name= "typedUsername" type="text" value ={this.props.typedUsername} onChange = {this.props.handleOnChange}></input>
            <label>Password:</label>
            <input name="typedPassword" type="password" value={this.props.typedPassword} onChange={this.props.handleOnChange}></input>
            <input type="submit"></input>
            </form>
        </div>)
    }
}

export default Login