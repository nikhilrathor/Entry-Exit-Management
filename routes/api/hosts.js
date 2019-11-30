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
    /*if((req.body.name).length == 0)
    {
        return res.status(403).send({
            error: "Name cannot be empty"
        })
    }
    if(!(req.body.phoneno.match(/^\d{10}$/)))
    {
        return res.status(403).send({
            error: "Phone Number is not valid"
        })
    }
    if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(req.body.email)))
    {
        return res.status(403).send({
            error: "Email Address is not valid"
        })
    }*/
    Host.create({
        name: req.body.name,
        phoneno: parseInt(req.body.phoneno),
        email: req.body.email
    }).then((host) => {
        res.status(201).send(host)
    }).catch((error) => {
        res.status(501).send({
            error: "Error adding host"
        })
    })
})

exports = module.exports = route