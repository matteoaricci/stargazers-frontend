import React, { Component } from 'react';
import Conversation from '../components/Conversation'
class ConversationsContainer extends Component {

    render() {
        return (
            <div>
                {this.props.conversations.map(convo => <Conversation convo={convo}/>)}
            </div>
        );
    }
}

export default ConversationsContainer;

