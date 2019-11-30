const Visitor = require('../../db').Visitor
const route = require('express').Router()

route.get('/', (req, res) => {
    // We want to send an array of all users
    // From our database here

    User.findAll()
        .then((users) => {
            res.status(200).send(users)
        })
        .catch((err) => {
            res.status(500).send({
                error: "Could not retrive users"
            })
        })

})

route.post('/checkin', (req, res) => {
    // We expect the req to have name in it
    // We will create a new user 

    Visitor.create({
        name: req.body.name,
        phoneno: parseInt(req.body.phoneno),
        email: req.body.email,
        host: req.body.host
    }).then((visitors) => {
        res.status(201).send(visitors)
    }).catch((err) => {
        res.status(501).send({
            error: "Could not add new visitor"
        })
    })
})

route.post('/checkout', (req,res) =>{

    Visitor.destroy({
        where:{
            name: req.body.name,
            phoneno: parseInt(req.body.phoneno),
            email: req.body.email,
            host: req.body.host
        }
    }).then((visitors) => {
        res.sendStatus(201).send(visitors)
    }).catch((err) => {
        res.status(501).send({
            error: "Could not remove visitor"
        })
    })
})

exports = module.exports = route