import React from "react";
import PlanetCard from '../components/PlanetCard';
import Searchbar from '../components/Searchbar'

class PlanetsContainer extends React.Component {
    constructor() {
        super()
        this.state = {
            searchTerm: ""
        }
    }

    onChange = (e) => {
        console.log(e.target.value)
        this.setState({
            searchTerm: e.target.value.toLowerCase()
        })
    }

    render() {
        return (
            <div>
                <Searchbar onChange={this.onChange} placeholderPhrase = "Search the Galaxy"/>
                <div className="card-columns planets-container">
                    {this.props.planets.filter(planet => planet.name.toLowerCase().includes(this.state.searchTerm)).map(planet => <PlanetCard planet = {planet} key={planet.id}/>)}
                </div>
            </div>
        )
    }
}

export default PlanetsContainer