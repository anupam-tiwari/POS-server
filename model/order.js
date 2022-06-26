const { json } = require('body-parser')
const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({
    _id:{
        type:String,
        required: true
    },
    data:{
        type:String, 
        required:true, 
        default: "User"
    },
    date:{
        type:Date,
        required: true, 
        default: Date.now
    }
})

module.exports = mongoose.model('Orders',orderSchema)