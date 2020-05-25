import React, { Component } from 'react';

export default class ChatContainer extends Component {
	constructor(props) {
	  super(props);	
	
	  this.state = {
	  	chats:[],
	  	activeChat:null
	  };
    }
}

componentDidMount() {
    const { socket } = this.props
    socket.emit(COMMUNITY_CHAT, this.resetChat)
}

resetChat = (chat)=>{
    return this.addChat(chat, true)
}

addChat = (chat, reset)=>{
    const { socket } = this.props
    const { chats } = this.state

    const newChats = reset ? [chat] : [...chats, chat]
    this.setState({chats:newChats, activeChat:reset ? chat : this.state.activeChat})

    const messageEvent = `${MESSAGE_RECIEVED}-${chat.id}`
    const typingEvent = `${TYPING}-${chat.id}`

    socket.on(typingEvent, this.updateTypingInChat(chat.id))
    socket.on(messageEvent, this.addMessageToChat(chat.id))
}


render() {
    const { user, logout } = this.props
    const { chats, activeChat } = this.state
    return (
        <div className="container">
            <SideBar
                logout={logout}
                
                user={user}
                
                
                />
                </div>
    )
    }