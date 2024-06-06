//backend/routes/auth.js
const express = require('express');
const router = express.Router();
const UserModel = require('../models/User');

// Signup route
router.post('/signup', async (req, res) => {
  const { email, password } = req.body;
  try {
    // Check if the user already exists
    let user = await UserModel.findOne({ email });
    if (user) {
      return res.status(400).json({ msg: 'User already exists' });
    }

    // Create a new user
    user = new UserModel({
      email,
      password
    });

    // Save the user to the database
    await user.save();

    res.json({ msg: 'User registered successfully' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// Login route
router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
      // Check if the user exists
      let user = await UserModel.findOne({ email });
      if (!user) {
        return res.status(400).json({ msg: 'User does not exist' });
      }
  
      // Validate password
      if (user.password !== password) {
        return res.status(400).json({ msg: 'Invalid password' });
      }
  
      res.json({ msg: 'Login successful' });
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  });

module.exports = router;
