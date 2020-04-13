import React from 'react'

class Signup extends React.Component {

    constructor() {
        super()
        this.state = {
            name: "",
            bio: "",
            birth_month: 1,
            birth_day: 1,
            sign_id: 1,
            username: "",
            password: ""
        }
    }

    render() {
        return (
            <div>
                <h1>Sign up</h1>
                <form onSubmit = {this.handleSubmit}>
                    <label>Name:</label><br></br>
                    <input name="name" placeholder="name"/><br></br>
                    <label>Bio:</label><br></br>
                    <textarea name="bio" placeholder="write a short bio"/><br></br>
                    <label>Birthday:</label><br></br>
                    <input type="date" name="birthday"/>
                    <br></br>
                    <label>Username:</label><br></br>
                    <input name="username" placeholder="username"/><br></br>
                    <label>Password:</label><br></br>
                    <input type="password" name="password" placeholder="password"/><br></br>
                    <input type='submit' />
                </form>
            </div>
        )
    }

    figureOutSign = (month, day) => {
        console.log(month, day)
        console.log(this.props.signs)

        let filteredByMonth = this.props.signs.filter(sign => {
            return sign.start_month === parseInt(month) || sign.end_month === parseInt(month)
        })

        let filteredByDay = filteredByMonth.filter(sign => {
            return sign.start_day
        })

        console.log(filteredByMonth, filteredByDay)
    }

    handleSubmit = (event) => {
        event.preventDefault()
        let yearMonthDay = event.target.birthday.value.split("-")
        this.figureOutSign(yearMonthDay[1], yearMonthDay[2])
