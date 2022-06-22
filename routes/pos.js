const express = require('express')
const router = express.Router()
const data =  require('../data/dummyMenu.json')

router.get('/', (req,res) => {
    res.send("welcome to pos router")
})

router.get('/sendmenu', (req,res) => {
    res.send(data)
})


module.exports = router