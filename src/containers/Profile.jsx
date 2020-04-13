import React from 'react'

class Profile extends React.Component {
    

    
    render() {
        if (this.props.user){
        return (
            <div>
                <h1>{this.props.user.name}'s Profile</h1>
                <h2>Sign: {this.props.userSign.name}</h2>
                <h2>{this.props.user.bio}</h2>
                <h4>Favorite Planets:</h4>
                    <ul>
                        {this.props.favPlanets.map(favPlanet => <li key = {favPlanet.id}>{favPlanet.planet.name}</li>)}
                    </ul>
                <h4>Favorite Constellations:</h4>
                    <ul>
                    {this.props.favConstellations.map(favConstellation => <li key = {favConstellation.id}>{favConstellation.constellation.name}</li>)}
                    </ul>
            </div>
        )}else{
            return null
        }
    }
}

export default Profile;
