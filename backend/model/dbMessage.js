const mongoose = require('mongoose');

const timeStamp = {
    type: Date,
        default: ()=> Date.now()
}

const messageSchema = new mongoose.Schema({
    fromId: String,
    toId: String,
    message: String,
    timeStamp: timeStamp,
    roomId: String
},
{
    timestamps:true
})

const Messages = new mongoose.model('messages',messageSchema)

module.exports = Messages;


