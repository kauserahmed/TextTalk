const io = require('./index.js').io
const { createUser, createMessage, createChat } = require('../Create')

module.exports = function(socket){
    console.log("Socket Id:" + socket.id);
}