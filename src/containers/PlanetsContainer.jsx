import React from "react";
import PlanetCard from '../components/PlanetCard';

class PlanetsContainer extends React.Component {

favoritePlanet = () => {

}

    render() {
        return (
            <div className="card-columns planets-container">
                {this.props.planets.map(planet => <PlanetCard planet = {planet} key={planet.id}/>)}
            </div>
            
        )
    }
}

export default PlanetsContainer