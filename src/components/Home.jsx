import React from "react";
import '../home.css';


class Home extends React.Component {

    constructor() {
        super()
        this.state = {
            currentImage: "the-big-dipper-pixel"
        }
    }

    render() {
        return (
            <div>
                <div className="welcome-page">
                    <h1 id="welcome-banner">Welcome!</h1>
                    <div onMouseEnter = {this.handleMouseEnter} onMouseLeave = {this.handleMouseLeave}> 
                        <img className="front-page-constellations" src={require(`../assets/pictures/constellations/${this.state.currentImage}.png`)} alt = "big dipper"/>
                    </div>
                </div>
                <div>
                    {/* <img src={require("../assets/pictures/uranus-pixel.png")} alt=""/> */}
                </div>
            </div>
        )
    }

    handleMouseEnter = () => {
        this.setState({currentImage: "the-big-dipper-pixel-connected"})
    }

    handleMouseLeave = () => {
        this.setState({currentImage: "the-big-dipper-pixel"})
    }
}

export default Home