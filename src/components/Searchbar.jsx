import React from 'react'

class Searchbar extends React.Component {

    constructor() {
        super()
        this.state = {
            searchTerm: ""
        }
    }

    onChange = () => {

    }

    render() {
        return (
            <div><input onChange={this.onChange} name="searchTerm" placeholder="filter your search"/></div>
        )
    }
}