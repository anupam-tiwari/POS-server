const express = require('express')
const router = express.Router()
const data =  require('../data/dummyMenu.json')

router.get('/', (req,res) => {
    res.send("welcome to pos router")
})

router.get('/sendmenu', (req,res) => {
    res.send(data)
})

router.post('/submitorder', (req, res) =>{
    console.log(req)
    res.send(200)
})




module.exports = router