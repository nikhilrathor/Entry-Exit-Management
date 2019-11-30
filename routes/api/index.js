const route = require('express').Router()

route.use('/visitors', require('./visitors'))
route.use('/hosts', require('./hosts'))

exports = module.exports = {
    route
}