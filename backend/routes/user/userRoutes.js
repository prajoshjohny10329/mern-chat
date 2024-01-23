const express = require('express');
const router = express.Router();
const userController = require('../../controllers/userController')
const postController =  require('../../controllers/postController')

router.get('/', userController.getHomePage)

router.get('/groups', userController.getAllGroups)

router.post('/group/create',postController.createRoom)

router.post('/message/new',postController.addMessage)


module.exports = router;