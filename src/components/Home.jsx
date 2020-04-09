import React from "react";
import '../home.css';


class Home extends React.Component {

    render() {
        return (
            <div>
                <div className="welcome-page">
                    <h1 id="welcome-banner">Welcome!</h1>
                </div>
                <div>
                    {/* <img src={require("../assets/pictures/uranus-pixel.png")} alt=""/> */}
                </div>
            </div>
        )
    }
}

export default Home