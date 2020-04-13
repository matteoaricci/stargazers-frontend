import React from 'react'
import PlanetImage from '../components/PlanetImage'
import PlanetDetailsBox from '../components/PlanetDetailsBox'

const PlanetShowPage = (props) => {

    if (props.planet) {
        return (
            <div>
                <h1>{props.planet.name}</h1>
                <PlanetImage planet = {props.planet} />
                <PlanetDetailsBox planet = {props.planet} user={props.user}/>
            </div>
        )
    } else {
        return null
    }}

export default PlanetShowPage