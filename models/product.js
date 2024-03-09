const mongoose = require('mongoose')
//schema de la base de donnée
const ProductSchema = new mongoose.Schema({
name:String,
price: Number,
})
//'' nom de la classe
const Product = mongoose.model('Product', ProductSchema)
module.exports = Product