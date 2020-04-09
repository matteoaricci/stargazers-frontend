import React from 'react'
import PlanetImage from '../components/PlanetImage'
import PlanetDetailsBox from '../components/PlanetDetailsBox'

class PlanetShowPage extends React.Component {
    render () {
        return (
            <div>
        <PlanetImage planet = {this.props.planet}/>
        <PlanetDetailsBox planet = {this.props.planet} />
        </div>)
    }
}

export default PlanetShowPage