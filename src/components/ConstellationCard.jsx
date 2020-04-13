import React from "react";


class ConstellationCard extends React.Component {

    handleClick = () => {
        window.location = `http://localhost:3001/constellations/${this.props.constellation.id}`
    }

        render(){
            return(
            <div className="card" onClick={this.handleClick}>
                <img src = {require(`../assets/pictures/constellations/${this.props.constellation.name.toLowerCase().split(" ").join("-")}-pixel.png`)} alt = {this.props.constellation.name}/>
            </div>
        )
    }
}

export default ConstellationCard