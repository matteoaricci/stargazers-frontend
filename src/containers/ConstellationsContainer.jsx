import React from 'react'
import ConstellationCard from '../components/ConstellationCard';

class ConstellationsContainer extends React.Component {

    render() {
        let constellations = this.props.constellations
        return (
            <div className="card-columns constellations-container clickable">
                {constellations.map(cons => <ConstellationCard constellation={cons} key = {cons.id}/>)}
            </div>
        )
    }
}

export default ConstellationsContainer;