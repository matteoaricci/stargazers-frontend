import React from "react";
import '../home.css';


class Home extends React.Component {

    constructor() {
        super()
        this.state = {
            currentImage: "welcome-alone"
        }
    }

    render() {
        return (
            <div>
                <div className="welcome-page">
                    <h1 id="welcome-banner">Welcome Aboard!</h1>
                    <div onMouseEnter = {this.handleMouseEnter} onMouseLeave = {this.handleMouseLeave}> 
                        <img className="front-page-constellations" src={require(`../assets/pictures/${this.state.currentImage}.png`)} alt = "welcome"/>
                    </div>
                </div>
            </div>
        )
    }

    handleMouseEnter = () => {
        this.setState({currentImage: "welcome-together"})
    }

    handleMouseLeave = () => {
        this.setState({currentImage: "welcome-alone"})
    }
}

export default Home