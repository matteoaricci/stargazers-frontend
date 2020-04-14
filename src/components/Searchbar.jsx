import React from 'react'

class Searchbar extends React.Component {

    render() {
        return (
            <div><input onChange={(e) => this.props.onChange(e)} name="searchTerm" placeholder="filter by search term"/></div>
        )
    }
}

export default Searchbar