import React from 'react'
import {Link} from 'react-router-dom'
import '../Profile.css'

class Profile extends React.Component {

    constructor() {
        super()
        this.state = {
            base64TextString: ""
        }
    }
    

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

    onChange = (e) => {
        e.preventDefault()
        console.log("file to upload:", e.target.files[0])
        let file = e.target.files[0]

        
        if (file) {
            const reader = new FileReader();

            reader.onload = this._handleReaderLoaded.bind(this)

            reader.readAsBinaryString(file)
        }
    }

    onFileSubmit = (e) => {
        e.preventDefault()
        const preview = document.getElementById('profile-picture');
        // console.log("binary string:", this.state.base64TextString)
        
        let payload = {image: this.state.base64TextString}
        fetch(`http://localhost:3000/users/${this.props.user.id}`, {
            method: "PATCH",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payload)
        })
        .then(resp => resp.json())
        .then(json => console.log(json))

        console.log("preview", preview)
        preview.src = "data:image/png;base64," + this.state.base64TextString
    }

    _handleReaderLoaded = (readerEvt) => {
        let binaryString = readerEvt.target.result
        this.setState({
            base64TextString: btoa(binaryString)
        })
    }

    render() {
        if (this.props.user && this.props.userSign){
        return (
            <div>
                <h1 className="profile-banner">Hello Cosmonaut {this.props.user.name}</h1>
                <h3 className="profile-sign">Star Crossed <Link to={`/signs/${this.props.userSign.id}`}>{this.props.userSign.name}</Link></h3>
                <h3 className="profile-bio">{this.props.user.bio}</h3>
                {this.props.user.image !== null ? <img src={"data:image/png;base64," + this.props.user.image} alt={this.props.user.name} id="profile-picture" className="rounded profile-pictures left"/> : <img src="" id="profile-picture"/>}
                <div className="astral-collection">
                    <h2 className="astral-banner">Astral Collections</h2>
                    <h4 className="fav-planets-list">Favorite Planets:</h4>
                    <div className="planet-item">
                        {this.props.favPlanets.map(favPlanet => <div key = {favPlanet.id}><button onClick={(e) => this.deleteFavoritePlanet(e, favPlanet)} className="delete-buttons">X</button> {favPlanet.planet.name}</div>)}
                    </div>
                <h4 className="fav-const-list">Favorite Constellations:</h4>
                    <div className="const-item">
                        {this.props.favConstellations.map(favConstellation => <div key = {favConstellation.id}><button onClick={(e) => {this.deleteFavoriteConstellation(e, favConstellation)}} className="delete-buttons">X</button>{favConstellation.constellation.name}</div>)}
                    </div>
                </div>
                <br></br>
                <form onSubmit={(e) => this.onFileSubmit(e)} onChange={(e) => this.onChange(e)}>
                    <input 
                        type="file" 
                        name="image" 
                        id="file"
                        accept=".jpeg, .png, .jpg"
                    />
                    <input type="submit"/>
                </form>
                <br></br>
                <button onClick={() => window.location = "/profile/edit"}>Edit Profile</button>
            </div>
        )}else{
            return null
        }
    }
}

export default Profile;
