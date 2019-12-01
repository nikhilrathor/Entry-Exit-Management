const Host = require('../../db').Host
const route = require('express').Router();

route.get('/', (req, res) => {
    // Get all hosts
    Host.findAll()
        .then((hosts) => {
            res.status(200).send(hosts)
        })
        .catch((err) => {
            res.status(500).send({
                error: "Could not retrieve hosts"
            })
        })
})

route.post('/', (req, res) => {
    Host.create({
        name: req.body.name,
        phoneno: req.body.phoneno,
        email: req.body.email
    }).then((host) => {
        res.status(201).send(host)
    }).catch((error) => {
        console.log(error)
        res.status(201).send({
            error: "Error adding host"
        })
    })
})

exports = module.exports = route