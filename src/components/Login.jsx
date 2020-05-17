import React from 'react';

class Login extends React.Component {

    render() {
        return(<div>
            <h1>Login</h1>
            <form onSubmit={this.props.handleLoginSubmit}>
            <label>Username:</label>
            <input className="username_input" name= "typedUsername" type="text" value ={this.props.typedUsername} onChange = {this.props.handleOnChange}></input>
            <label>Password:</label>
            <input name="typedPassword" className="password_input" type="password" value={this.props.typedPassword} onChange={this.props.handleOnChange}></input>
            <input type="submit" className="submit_button"></input>
            </form>
            <button onClick = {this.handleOnClick} className="create_account_button">Create Account</button>
        </div>)
    }
    handleOnClick = () => {
        window.location = `http://localhost:3001/signup`
    }
}

export default Login