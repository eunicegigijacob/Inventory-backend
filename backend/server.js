const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const dbconnection = require('./config/connections')
dotenv.config()
dbconnection();
const app = express()
const port = process.env.PORT

app.use(express.json())
app.use(cookieParser())
app.use(cors({credentials:true, origin: function (origin, callback) {
    console.log(`origin${origin} access granted`)
    callback(null, true)
}}))

app.listen(port, ()=>{
    console.log(`app listening on ${port}`)
})