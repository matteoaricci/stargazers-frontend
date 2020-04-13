import React from 'react'

const ConstellationImage = (props) => {
    return(<div>
        <img className="front-page-constellations" src = {require(`../assets/pictures/constellations/${props.constellation.name.toLowerCase().split(" ").join("-")}-pixel-connected.png`)} alt = {props.constellation.name}/>
        </div>)
}

export default ConstellationImage