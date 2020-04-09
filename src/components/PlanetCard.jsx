import React from 'react';

class PlanetCard extends React.Component {

    handleClick = () => {
        window.location = `http://localhost:3001/planets/${this.props.planet.id}`
    }

    getPlanetImage = (planet) => {
        let lowerCaseName = planet.name.toLowerCase()
        let image = require(`../assets/pictures/planets/${lowerCaseName}-pixel.png`)
        return image
    }

    render() {
        return (
            <div className="card clickable" onClick = {this.handleClick}>
                <img src = {this.getPlanetImage(this.props.planet)} className="sign-image"/>
                <h3>{this.props.planet.name}</h3>
            </div>
        )
    }
}

export default PlanetCard