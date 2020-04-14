import React from 'react'
import SignCard from '../components/SignCard'
import Searchbar from '../components/Searchbar'

class SignsContainer extends React.Component {
    constructor() {
        super()
        this.state = {
            searchTerm: ""
        }
    }

    onChange = (e) => {
        this.setState({
            searchTerm: e.target.value.toLowerCase()
        })
    }

    render() {
        return (
            <div>
                <Searchbar onChange={this.onChange} placeholderPhrase= "Search by Sign Name"/>
                <div className="card-columns signs-container">
                    {this.props.signs.filter(sign => sign.name.toLowerCase().includes(this.state.searchTerm)).map(sign => <SignCard sign={sign} key={sign.name}/>)}
                </div>
            </div>
        )
    }
}

export default SignsContainer