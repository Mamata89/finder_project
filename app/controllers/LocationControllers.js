const express = require('express')
const router= express.Router()
const { Location } = require('../models/Location')


router.post('/', function(req, res){
    const body = req.body
    const location=new Location(body)
    location.save()
        .then(function(location){
            res.send(location)
        })
        .catch(function(err){
            res.send(err)
        })
})

router.get('/', function(req, res){
    Location.find()
        .then(function(location){
            res.send(location)
        })
        .catch(function(err){
            res.send(err)
        })
})

router.get('/:id', function(req, res){
    const id = req.params.id
    Location.findById(id)   
        .then(function(location){
            if(location){
                res.send(location)
            }else{
                res.send({})
            }
        })

        .catch(function(err){
            res.send(err)
        })
})


router.put('/:id', function(req, res){
    const id = req.params.id
    const body = req.body
    Location.findByIdAndUpdate(id , {$set : body} , {runValidators : true, new : true})
    .then(function(topic){
        res.send(topic)
    })
        .catch(function(err){
            res.send(err)
        })
})

router.delete('/:id', function(req, res){
    const id = req.params.id
    Location.findByIdAndDelete(id)
        .then(function(location){
            //  res.send({
            //     notice:"deletd successfully"
            // })
            res.send(location)
           
        })
        .catch(function(err){
            res.send(err)
        })
})


module.exports = {
    locationRouter : router
}