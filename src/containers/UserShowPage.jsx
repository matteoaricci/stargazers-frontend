import React from 'react'
import {Link} from 'react-router-dom'
import '../Profile.css'

class UserShowPage extends React.Component {
    render(){
        
        if(this.props.showUser){
            console.log(this.props.showUser.sign_id)
        return(
            <div>
                <img id="profile-picture" src={"data:image/png;base64," + this.props.showUser.image} />
                <h1 className="profile-banner">Cosmonaut {this.props.showUser.name}</h1>
                <h2 className="profile-sign">Star Crossed <Link to={`/signs/${this.props.showUser.sign_id}`}>{this.props.showUser.sign.name}</Link></h2>
                <h3 className="profile-bio"> {this.props.showUser.bio}</h3>
                <div className="astral-collection">
                    <h2 className="astral-banner">Astral Collections</h2>
                    <h4 className="fav-planets-list">Favorite Planets:</h4>
                    <div className="planet-item">
                        {this.props.showUser.planets.map
                            (favPlanet => 
                            <div className="showpage">{favPlanet.name}</div>)}
                    </div>
                <h4 className="fav-const-list">Favorite Constellations:</h4>
                    <div className="const-item">
                        {this.props.showUser.constellations.map
                        (favConst =>
                        <div className="const-item">{favConst.name}</div>)}
                    </div>
                </div>
            </div>
        )} else{
            return null
        }
    }
}

export default UserShowPage