import React, { Component } from 'react';
import Message from '../components/Message'

class Conversation extends Component {
    constructor() {
        super();
        this.state = {
            messages: []
        }
    }
    componentDidMount(){
        fetch('http://localhost:3000/messages')
        .then(resp => resp.json())
        .then(message => this.setState({messages: message}))
    }

    render() {
        return (
            <div>
                {this.state.messages.map(mess => mess.body)}
            </div>
        );
    }
}

export default Conversation;
