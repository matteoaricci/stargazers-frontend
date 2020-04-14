import React from 'react'
import PlanetImage from '../components/PlanetImage'
import PlanetDetailsBox from '../components/PlanetDetailsBox'

const PlanetShowPage = (props) => {

    if (props.planet) {
        return (
            <div>
                <PlanetImage planet = {props.planet} />
                <h1>{props.planet.name}</h1>
                <PlanetDetailsBox updateFavoritePlanets = {props.updateFavoritePlanets} planet = {props.planet} user={props.user} favPlanets = {props.favPlanets}/>
            </div>
        )
    } else {
        return null
    }}

export default PlanetShowPage