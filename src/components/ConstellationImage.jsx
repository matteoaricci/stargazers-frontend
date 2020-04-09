import React from 'react'

const ConstellationImage = (props) => {
    return(<div><img src = {props.constellation.image} alt = {props.constellation.name}/></div>)
}

export default ConstellationImage