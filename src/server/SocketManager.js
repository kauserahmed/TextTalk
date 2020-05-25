const io = require('./index.js').io
const { createUser, createMessage, createChat } = require('../Create')
const { VERIFY_USER, USER_CONNECTED, USER_DISCONNECTED, 
    LOGOUT, COMMUNITY_CHAT, MESSAGE_RECIEVED, MESSAGE_SENT,
    TYPING  } = require('../Events')

let connectedUsers = { }

let communityChat = createChat()

module.exports = function(socket){
    console.log("Socket Id:" + socket.id);
    let sendMessageToChatFromUser;
    let sendTypingFromUser;
    
    socket.on(VERIFY_USER, (nickname, callback)=>{
		if(isUser(connectedUsers, nickname)){
			callback({ isUser:true, user:null })
		}else{
			callback({ isUser:false, user:createUser({name:nickname})})
        }
    })

    socket.on(USER_CONNECTED, (user)=>{
		connectedUsers = addUser(connectedUsers, user)
		socket.user = user

		sendMessageToChatFromUser = sendMessageToChat(user.name)
		sendTypingFromUser = sendTypingToChat(user.name)

		io.emit(USER_CONNECTED, connectedUsers)
		console.log(connectedUsers);

	})

}