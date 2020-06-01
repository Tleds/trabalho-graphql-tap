const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
  produto: String,
  quantidade: Number,
  preco: Number,
})

module.exports = mongoose.model('Order', OrderSchema)