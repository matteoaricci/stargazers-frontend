import React from 'react'
import ConstellationCard from '../components/ConstellationCard';
import Searchbar from '../components/Searchbar'

class ConstellationsContainer extends React.Component {
    constructor() {
        super()
        this.state = {
            searchTerm: ""
        }
    }

    onChange = (e) => {
        this.setState({
            searchTerm: e.target.value.toLowerCase()
        })
    }

    render() {
        let constellations = this.props.constellations
        return (
            <div>
                <Searchbar onChange={this.onChange}/>
                <div className="card-columns constellations-container clickable">
                    {constellations.filter(constellation => constellation.name.toLowerCase().includes(this.state.searchTerm)).map(cons => <ConstellationCard constellation={cons} key={cons.id}/>)}
                </div>
            </div>
        )
    }
}

export default ConstellationsContainer;