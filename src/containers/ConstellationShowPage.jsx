import React from 'react'
import ConstellationImage from '../components/ConstellationImage'
import ConstellationDetailsBox from '../components/ConstellationDetailsBox'

const ConstellationShowPage = (props) => {
    if (props.constellation) {
        console.log(props.constellation)
        return (
            <div>
            <h1>{props.constellation.name}</h1>
            <ConstellationImage constellation = {props.constellation} />
            <ConstellationDetailsBox constellation = {props.constellation} user={props.user} />
            </div>
        )
    } else {
        return null
    }
}

export default ConstellationShowPage