import React from 'react'

const PlanetDetailsBox = (props) => {
    
    return (
        <div>
            <h1>{props.planet.name}</h1>
            <h2>Description: {props.planet.description}</h2>
                
        </div>
        )
    
}

export default PlanetDetailsBox