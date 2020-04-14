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
            <div className="planet-card card clickable">
                <img onClick = {this.handleClick} src = {this.getPlanetImage(this.props.planet)} alt = {this.props.planet.name} className="planet-card-images"/>
                <h3>{this.props.planet.name}</h3>
            </div>
        ) 
    }
}

export default PlanetCard