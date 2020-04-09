import React from 'react'
import ConstellationCard from '../components/ConstellationCard';

class ConstellationsContainer extends React.Component {

    render() {
        let constellations = this.props.constellations
        return (
            <div>
                {constellations.map(cons => <ConstellationCard constellation={cons} key = {cons.id}/>)}
            </div>
        )
    }
}

export default ConstellationsContainer;