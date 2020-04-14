import React from 'react'

class SignCard extends React.Component {

    handleClick = () => {
        window.location = `http://localhost:3001/signs/${this.props.sign.id}`
    }

    getSignImage = (sign) => {
        let lowerCaseName = sign.name.toLowerCase()
        let image = require(`../assets/pictures/signs/${lowerCaseName}-pixel.png`)
        return image
    }

    render() {
        return (
            <div className="clickable card sign-card" onClick={this.handleClick}>
                    <img class="card-img-top sign-image" src = {this.getSignImage(this.props.sign)} alt={this.props.sign.name} />
                <div class="card-body">
                    <h5 class="card-title">{this.props.sign.name}</h5>
                    {/* <p class="card-text">{this.props.sign.description.substring(0, 100) + "..."}</p> */}
                </div>
            </div>
        )
    }
}

export default SignCard