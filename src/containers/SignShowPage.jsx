import React from 'react'

class SignShowPage extends React.Component {

    getMonth = (monthNum) => {
        let monthArr = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

        monthNum = monthNum - 1
        return monthArr[monthNum]
    }

    getDates = (sign) => {
        let startMonth = this.getMonth(sign.start_month)
        let endMonth = this.getMonth(sign.end_month)

        return `${startMonth} ${sign.start_day} - ${endMonth} ${sign.end_day}`
    }

    render() {
        if (this.props.sign) {
            return (
                <div className="signs-container">
                    <img className="sign-image" alt={this.props.sign.name} src={this.props.sign.image}/>
                    <h1>
                        {this.props.sign.name}
                    </h1>
                    <p>
                        {this.getDates(this.props.sign)}
                    </p>
                    <div>
                        {this.props.sign.description}
                    </div>
                </div>
            )
        } else {
            return null
        }
    }
}

export default SignShowPage