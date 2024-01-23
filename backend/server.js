const express = require('express');
const dotenv =  require('dotenv');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
dotenv.config()


const userRoute = require('./routes/user/userRoutes.js')
const db = require('./config/mongoose.js');
db.connect()

app.use(cors())
app.use(bodyParser.json()); 

app.use('/',userRoute)

app.listen(5000,()=>{
    console.log('server up and running ${http://localhost:5000/}');
})