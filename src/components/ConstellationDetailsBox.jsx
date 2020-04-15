import React from 'react'

const ConstellationDetailsBox = (props) => {
    let userFavCons = props.favConstellations.filter(favCons => favCons.user_id === props.user.id)
    const handleClick = (e, props) => {
        console.log(props)
        if (props.user){
            if (userFavCons.find(constellationObj => constellationObj.constellation_id === props.constellation.id)){
                alert("You've already favorited this constellation!")
            }else {
        let payload = {constellation_id: props.constellation.id, user_id: props.user.id}
        fetch('http://localhost:3000/favorite_constellations', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(payload)
        }).then(resp => resp.json())
        .then(favorite => props.updateFavoriteConstellations(favorite))}
        }else{
            alert("Please login to add favorites")
            window.location = `http://localhost:3001/login`
        }
    }

    return(
        <div>
            <h1>{props.constellation.name}</h1>
            <p className="descriptions">{props.constellation.description}</p>
            {
            <button onClick={(e) => handleClick(e, props)}>Add To Favorites!</button>}
        </div>
    )
}

export default ConstellationDetailsBox