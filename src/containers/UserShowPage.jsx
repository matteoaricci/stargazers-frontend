import React from 'react'
import {Link} from 'react-router-dom'

class UserShowPage extends React.Component {
    render(){
        
        if(this.props.showUser){
            console.log(this.props.showUser.sign_id)
        return(
            <div>

                <h1>Username: {this.props.showUser.name}</h1>
                <h2>Sign: <Link to={`/signs/${this.props.showUser.sign_id}`}>{this.props.showUser.sign.name}</Link></h2>
                <h3>Bio: {this.props.showUser.bio}</h3>
            </div>
        )} else{
            return null
        }
    }
}

export default UserShowPage