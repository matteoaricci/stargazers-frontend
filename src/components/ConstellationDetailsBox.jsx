import React from 'react'

const ConstellationDetailsBox = (props) => {

    const handleClick = (e, props) => {
        console.log(props)
        let payload = {constellation_id: props.constellation.id, user_id: props.user.id}
        fetch('http://localhost:3000/favorite_constellations', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(payload)
        }).then(resp => resp.json())
        .then(favorite => console.log(favorite))
    }

    return(
        <div>
            <p>{props.constellation.description}</p>
            <button onClick={(e) => handleClick(e, props)}>Add To Favorites!</button>
        </div>
    )
}

export default ConstellationDetailsBox