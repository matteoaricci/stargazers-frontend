import React from 'react'

class Signup extends React.Component {

    constructor() {
        super()
        this.state = {
            name: "",
            bio: "",
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
                    <input onChange={this.onChange} className="name_input" name="name" placeholder="name"/><br></br>
                    <label>Bio:</label><br></br>
                    <textarea onChange={this.onChange} className="bio_input" name="bio" placeholder="write a short bio"/><br></br>
                    <label>Birthday:</label><br></br>
                    <input className="birthdate_input" type="date" name="birthday"/>
                    <br></br>
                    <label>Username:</label><br></br>
                    <input onChange={this.onChange} name="username" className="username_input" placeholder="username"/><br></br>
                    <label>Password:</label><br></br>
                    <input onChange={this.onChange} type="password" className="password_input" name="password" placeholder="password"/><br></br>
                    <input className="submit_button" type='submit' />
                </form>
            </div>
        )
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    figureOutSign = (month, day) => {

        let selectedSign = {}
        let startingSign = this.props.signs.filter(sign => {
            return (
                sign.start_month === parseInt(month)
            )
        })
        let endingSign = (this.props.signs.filter(sign => {
            return (
                sign.end_month === parseInt(month)
            )
        })[0])

        if (startingSign.end_day < day) {
            selectedSign = startingSign
        } else {
            selectedSign = endingSign
        }

        return selectedSign
    }

    handleSubmit = (event) => {
        event.preventDefault()
        if(event.target.birthday.value === ""){
            alert("Please enter your birthday.")
        }else{
        let yearMonthDay = event.target.birthday.value.split("-")
        this.figureOutSign(yearMonthDay[1], yearMonthDay[2])
        let newSignId = this.figureOutSign(yearMonthDay[1], yearMonthDay[2]).id
        
        let payload = {name: this.state.name, bio: this.state.bio, username: this.state.username, birth_month: yearMonthDay[1], birth_day: yearMonthDay[2], sign_id: newSignId, password: event.target.password.value}

        fetch("http://localhost:3000/users", {
            method: "POST",
            headers: {
                'Content-Type': "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(payload)
        })
        .then(resp => resp.json())
        .then(json => {
            if (json.error){
              alert(json.message)
            } else {
              this.props.saveLoginDetails(json.user, json.sign)
              localStorage.setItem('jwt', json.token)
            }
          })
        }
    }
}

export default Signup;