const Rooms = require('../model/dbRoom')
const Messages = require('../model/dbMessage')

// controllers function for all post actions

module.exports = {
    getHomePage:  (req,res)=>{
        res.send('hi');
    },
    getAllGroups: async (req,res)=>{
        try {
            const result = await Rooms.find({})
            return res.status(200).send(result)
        } catch (error) {
            return res.status(500).send(error)
        }
        
    }
}