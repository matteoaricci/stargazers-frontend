import React from "react";


class ConstellationCard extends React.Component {
    constructor(props){
        super()
        this.state = {
            displayConstellation: `${props.constellation.name.toLowerCase().split(" ").join("-")}-pixel`
        }
    }

    handleClick = () => {
        window.location = `http://localhost:3001/constellations/${this.props.constellation.id}`
    }

        render(){
            return(
            <div className="card" onClick={this.handleClick} onMouseEnter = {this.handleMouseEnter} onMouseLeave = {this.handleMouseLeave}>
                <img className="front-page-constellations"src = {require(`../assets/pictures/constellations/${this.state.displayConstellation}.png`)} alt = {this.props.constellation.name} />
            </div>
        )
    }
    handleMouseEnter = () => {
        this.setState({displayConstellation: `${this.props.constellation.name.toLowerCase().split(" ").join("-")}-pixel-connected`})
    }

    handleMouseLeave = () => {

        this.setState({displayConstellation: `${this.props.constellation.name.toLowerCase().split(" ").join("-")}-pixel`})
    }
}

export default ConstellationCard