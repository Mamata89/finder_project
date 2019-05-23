const mongoose = require('mongoose')

const Schema = mongoose.Schema

const taskSchema = new Schema({
    title:{
        type:String,
        required:true

    },
    description:{
        type:String,
        required:true

    },
    createdAt :{
        type:Date,
        default:Date.now,
        required:true

    },
    dueDate:{
        type:Date,
        default:new Date().toDateString(),
        required:true

    },
    requestDuration:{

    },
    budget:{
        type:Number,
        required:true

    },
    location:{
        type:Schema.Types.ObjectId,
        ref:'Location'

    },
    category:{
        type:Schema.Types.ObjectId,
        ref:'Category'

    },
    status:{
        type:String

    },
    user:{
        type:Schema.Types.ObjectId,
        ref: 'User'
    }
    // propsoal:[proposalSchema]


})  


const Task = mongoose.model('Task', taskSchema)
module.exports = {
        Task
}