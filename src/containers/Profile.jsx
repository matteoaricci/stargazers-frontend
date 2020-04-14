import React from 'react'

class Profile extends React.Component {
    

    deleteFavoritePlanet = (e, favPlanet) => {
        e.target.parentNode.remove()
        fetch(`http://localhost:3000/favorite_planets/${favPlanet.id}`,{
            method: "DELETE"
        })
        .then(resp => resp.json())
        .then(json => console.log(json.message))
    }

    deleteFavoriteConstellation = (e, favConstellation) => {
        e.target.parentNode.remove()
        fetch(`http://localhost:3000/favorite_constellations/${favConstellation.id}`,{
            method: "DELETE"
        })
        .then(resp => resp.json())
        .then(json => console.log(json.message))
    }
        
    render() {
        if (this.props.user && this.props.userSign){
        return (
            <div>
                <h1>{this.props.user.name}'s Profile</h1>
                <h2>Sign: {this.props.userSign.name}</h2>
                <h2>{this.props.user.bio}</h2>
                <h4>Favorite Planets:</h4>
                    <div>
                        {this.props.favPlanets.map(favPlanet => <div key = {favPlanet.id}><button onClick={(e) => this.deleteFavoritePlanet(e, favPlanet)} className="delete-buttons">X</button> {favPlanet.planet.name}</div>)}
                    </div>
                <h4>Favorite Constellations:</h4>
                    <div>
                        {this.props.favConstellations.map(favConstellation => <div key = {favConstellation.id}><button onClick={(e) => {this.deleteFavoriteConstellation(e, favConstellation)}} className="delete-buttons">X</button>{favConstellation.constellation.name}</div>)}
                    </div>
            </div>
        )}else{
            return null
        }
    }
}

export default Profile;
