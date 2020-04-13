import React from 'react'

const PlanetDetailsBox = (props) => {
    const handleClick = (e) => {
        e.preventDefault();
        console.log(props)
        fetch('http://localhost:3000/favorite_planets', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
        body: JSON.stringify({
            planet_id: props.planet.id,
            user_id: props.user.id
        })
        }).then(resp => resp.json())
        .then(favorite => console.log(favorite))
    }
    
    return (
        <div>
            <h2>Description: {props.planet.description}</h2>
            <button onClick={handleClick}>Add to Favorites!</button>
        </div>
        )
    
}


export default PlanetDetailsBox