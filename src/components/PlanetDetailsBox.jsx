import React from 'react'

class PlanetDetailsBox extends React.Component {
    render () {
        return (
            <div>
                <h1>{this.props.planet.name}</h1>
                <h2>Description: {this.props.planet.description}</h2>
                
            </div>
        )
    }
}

export default PlanetDetailsBox