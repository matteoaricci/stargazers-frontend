import React from 'react'
import PlanetImage from '../components/PlanetImage'
import PlanetDetailsBox from '../components/PlanetDetailsBox'

const PlanetShowPage = (props) => {

    if (props.planet) {
        return (
            <div>
            <PlanetImage planet = {props.planet} />
            <PlanetDetailsBox planet = {props.planet} />
            </div>
        )
    } else {
        return null
    }}

export default PlanetShowPage