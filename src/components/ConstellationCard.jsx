import React from "react";


class ConstellationCard extends React.Component {

        render(){
            return(
            <div className="card">{this.props.constellation.name}</div>
        )
    }
}

export default ConstellationCard