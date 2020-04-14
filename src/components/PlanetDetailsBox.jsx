import React from 'react'

const PlanetDetailsBox = (props) => {
    const handleClick = (e) => {
        e.preventDefault();
        console.log(props)
        if (props.user){
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
        }else{
            alert("Please login to add favorites")
            window.location = `http://localhost:3001/login`
        }
    }
    
    return (
        <div>
            <p className="descriptions">{props.planet.description}</p>
            <button onClick={handleClick}>Add to Favorites!</button>
        </div>
        )
    
}


export default PlanetDetailsBox