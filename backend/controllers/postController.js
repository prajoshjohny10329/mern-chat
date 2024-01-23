const Rooms = require('../model/dbRoom')
const Messages = require('../model/dbMessage')

module.exports = {
    createRoom:  async (req,res)=>{
        try {
            const name = req.body.groupName
            console.log(req.body);
            console.log(name);
            const result  = await Rooms.create({name,})
            console.log(result);

            return res.status(201).send(result)
        } catch (error) {
            return res.status(500).send(error)
        }
        
    },
    addMessage: async(req,res)=>{
        try {
            const userMessage = req.body
            const result = await Messages.create(userMessage)
            console.log(result);
            return  res.status(201).send(result)

        } catch (error) {
            return  res.status(500).send(error)
            
        }
    }
}