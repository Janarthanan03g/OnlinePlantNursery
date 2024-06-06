// backend/routes/checkout.js
const express = require('express');
const router = express.Router();
const OrderModel = require('../models/Order');

// Checkout route
router.post('/', async (req, res) => { // Remove '/checkout' from the route definition
  const { user, items, totalAmount } = req.body;
  try {
    // Create a new order
    const newOrder = new OrderModel({
      user,
      items,
      totalAmount
    });

    // Save the order to the database
    await newOrder.save();

    res.json({ msg: 'Order placed successfully' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
