import React from 'react'

const ConstellationDetailsBox = (props) => {

    const handleClick = (e) => {
        e.preventDefault();
        console.log(props)
        fetch('http://localhost:3000/favorite_constellations', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
        body: JSON.stringify({
            constellation_id: props.constellation.id,
            user_id: props.user.id
        })
        }).then(resp => resp.json())
        .then(favorite => console.log(favorite))
    }

    return(
        <div>
            <h2>Description: {props.constellation.description}</h2>
            <button onClick={() => handleClick}>Add To Favorites!</button>
        </div>
    )
}

export default ConstellationDetailsBox