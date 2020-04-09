import React from "react";
import PlanetCard from '../components/PlanetCard';

class PlanetsContainer extends React.Component {

    render() {
        return (
            <div>PlanetsContainer
                {this.props.planets.map(planet => <PlanetCard planet = {planet} key = {planet.id}/>)}
            </div>
            
        )
    }
}

export default PlanetsContainer