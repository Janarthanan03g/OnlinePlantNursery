// backend/models/Order.js
const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
  user: {
    name: String,
    email: String,
    address: String
  },
  items: [
    {
      id: Number,
      name: String,
      image: String,
      price: Number,
      quantity: Number
    }
  ],
  totalAmount: Number,
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Order', OrderSchema);
