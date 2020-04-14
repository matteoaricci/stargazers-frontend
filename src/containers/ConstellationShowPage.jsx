import React from 'react'
import ConstellationImage from '../components/ConstellationImage'
import ConstellationDetailsBox from '../components/ConstellationDetailsBox'

const ConstellationShowPage = (props) => {
    if (props.constellation) {
        console.log(props.constellation)
        return (
            <div>
                <ConstellationImage constellation = {props.constellation} />
                <ConstellationDetailsBox updateFavoriteConstellations = {props.updateFavoriteConstellations} constellation = {props.constellation} user={props.user} favConstellations = {props.favConstellations} />
            </div>
        )
    } else {
        return null
    }
}

export default ConstellationShowPage