const express = require('express')
const router= express.Router()
const { Task } = require('../models/Task')
const { authenticateUser } = require('../middlewares/authentication')



router.get('/',authenticateUser, function(req,res){
    Task.find({
        user : req.user._id
    }).populate('user').populate('location').populate('category')
    .then(function(tasks){
        res.send(tasks)
    })
    .catch(function(err){
        res.send(err)
    })
})

router.get('/:id', authenticateUser , function(req, res){
    const id=req.params.id
    console.log(id)
    Task.findOne({
        user : req.user._id,
        _id : id //searching by task id with database _id
    }).populate('user').populate('location').populate('category')
    .then(function(task){
      
        if(task){
            res.send(task)
        }else{
            res.send({})
        }
    })
    .catch(function(err){
        res.send(err)
    })
})

router.post('/',authenticateUser, function(req, res){
    
    const body = req.body
    const task=new Task(body)
    task.user = req.user._id

    task.save()
        .then(function(task){
            res.send(task)
        })
        .catch(function(err){
            res.send(err)
        })
})
router.put('/:id',authenticateUser,function(req,res){
    const id = req.params.id
    const body = req.body
    console.log('hiiiiiiiiiiiiiiiii')
    Task.findOneAndUpdate({
        user : req.user._id,
        _id:id
    },{$set :body},{new:true,runValidators:true}) 
    .then(function(task){
        res.send(task)
    })
    .catch(function(err){
        res.send(err)
    })
})
router.delete('/:id',authenticateUser,function(req,res) {
    const id=req.params.id
    console.log(id,"id in controller")
    Task.findOneAndDelete({
        user:req.user._id,
        _id:id
    })
    .then(function(task) {
        console.log(task,'task in controller delete')
        res.send(task)
    })
    .catch(function (err) {
        res.send(err)
    })
})


module.exports = {
    taskRouter : router
}