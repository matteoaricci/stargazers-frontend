import React from 'react'
import SignCard from '../components/SignCard'

class SignsContainer extends React.Component {

    render() {
    return <div className="card-columns signs-container">{this.props.signs.map(sign => <SignCard sign={sign} key={sign.name}/>)}</div>
    }
}

export default SignsContainer