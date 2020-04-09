import React from 'react'

const PlanetImage = (props) => {
    
    let getPlanetImage = (planet) => {
        let lowerCaseName = planet.name.toLowerCase()
        let image = require(`../assets/pictures/planets/${lowerCaseName}-pixel.png`)
        return image
    }
    return(
        <div><img src = {getPlanetImage(props.planet)} className="sign-image"/></div>
    )
    
}

export default PlanetImage