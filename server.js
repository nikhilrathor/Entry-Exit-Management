const express = require('express')
const serv = express()

const path = require('path')

serv.use(express.json())
serv.use(express.urlencoded({extended:true}))

serv.use('/innovaccer', express.static(__dirname + "/public"))
serv.use('/api', require('./routes/api').route)

serv.listen(8080,()=>{
    "Server is running at http://localhost:8080"
})