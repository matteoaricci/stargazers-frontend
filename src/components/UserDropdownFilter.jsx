import React from 'react'

class UserDropdownFilter extends React.Component {
    render() {
        return(
            <div>
                <select value = {this.props.searchValue} onChange = {this.props.handleOnChange}>
                    <option value="">{this.props.searchName.toUpperCase()}</option>
                    {this.props.searchOptions.map(option => (this.props.searchBy === "name"? <option key = {option.id} value = {option.name}>{option.name}</option> : <option key = {option.id} value = {option.id}>{option.name}</option> ))}
                </select>
            </div>
        )
    }
}

export default UserDropdownFilter