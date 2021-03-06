import React from 'react'

const PlanetDetailsBox = (props) => {
    const handleClick = (e) => {
        let userFavPlanets = props.favPlanets.filter(favPlan => favPlan.user_id === props.user.id)
        e.preventDefault();
        
        console.log(props)
        if (props.user){
            if (userFavPlanets.find(planetObj => planetObj.planet_id === props.planet.id)){
                alert("You've already favorited this planet!")
            }else{
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
        .then(favorite => props.updateFavoritePlanets(favorite))
        }}else{
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