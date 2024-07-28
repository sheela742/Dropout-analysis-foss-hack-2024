const express = require('express')
const cors = require('cors')
const connectToDB = require('./connection')
const bodyParser = require('body-parser')
const UserRoute=require('./routes/user')
const AdminRoute=require('./routes/admin')

// const uri = 'mongodb://localhost:27017/Tour_buddy'
const uri = 'mongodb://localhost:27017/Stupid_teens'

// const uri = 'mongodb+srv://jeevan:jeevan%40123@college.vitgld8.mongodb.net/LocateToEducate?retryWrites=true&w=majority&appName=College'

connectToDB(uri).then(() => {
    console.log('connected to db successfully')
}).catch((err) => {
    console.log('failed to connect DB Error :', err)
})

const port = 3000
const app = express()

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json())

app.use(express.json())

app.use(express.urlencoded({ extended: false }));

app.use(cors())

app.use('/user', UserRoute)

app.use('/admin',AdminRoute)

// ClientAuthentication

app.listen(port, () => {
    console.log(`server is running at port ${port}`)
})