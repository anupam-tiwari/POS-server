const express = require('express')
const router = express.Router()
const data =  require('../data/dummyMenu.json')
const mongoose = require('mongoose')
const DBURL = process.env.DBURL
const Orders = require("../model/order")


router.get('/', (req,res) => {
    res.send("welcome to pos router")
})

router.get('/sendmenu', (req,res) => {
    res.send(data)
})

router.post('/submitorder', async (req, res) =>{
    console.log(req.body)
    const order = new Orders({
        _id: req.body.orderID, 
        data: JSON.stringify(req.body)
    })

    try{
        const newOrder = await order.save()
        res.status(201).json({message: "order created"})
    } catch (err){
        res.status(500).json({message: err.message})
    }

})

router.get("/getorders",async (req, res) => {
    try{
        const order = await Orders.find()
        res.json(order)
    } catch(err) {
        res.status(500).json( {message: err.message})
    }
})




module.exports = router