import React from 'react'

class Searchbar extends React.Component {

    render() {
        return (
            <div><br></br><input className="filter_input" onChange={(e) => this.props.onChange(e)} name="searchTerm" placeholder={this.props.placeholderPhrase}/></div>
        )
    }
}

export default Searchbar