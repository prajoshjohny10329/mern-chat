const mongoose = require('mongoose');
const roomSchema = new mongoose.Schema({
    name:String,
},
{
    timestamps:true,
});
 const Rooms = new mongoose.model('room',roomSchema);

 module.exports = Rooms 