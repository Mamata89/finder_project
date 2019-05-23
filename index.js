const express=require('express')
const cors=require('cors')
const { mongoose } = require('./config/database')

const {usersRouter} =require('./app/controllers/UsersControllers')
const { categoryRouter }=require('./app/controllers/CategoryControllers')
const { locationRouter } = require('./app/controllers/LocationControllers')
const { taskRouter } = require('./app/controllers/TasksController')

const app =express()

const port = 3005

app.use(express.json())
app.use(cors())
app.get('/',(req,res) => {
    res.send('<h1> welcome to AirTasker </h1>')
})

app.use('/users',usersRouter)
app.use('/categories',categoryRouter)
app.use('/locations',locationRouter)
app.use('/tasks',taskRouter)

app.listen(port,function(){
    console.log('listing on port',port)
})