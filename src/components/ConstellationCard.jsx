import React from "react";


class ConstellationCard extends React.Component {

    handleClick = () => {
        window.location = `http://localhost:3001/constellations/${this.props.constellation.id}`
    }

        render(){
            return(
            <div className="card" onClick={this.handleClick}>
                <h1>{this.props.constellation.name}</h1>
                </div>
        )
    }
}

export default ConstellationCard