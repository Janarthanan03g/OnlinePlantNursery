const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const checkoutRoutes = require('./routes/checkout'); // Import checkout routes

const app = express();

// Middleware
app.use(express.json()); // Body parser middleware
app.use(cors()); // Enable CORS

// DB Config
const db = 'mongodb://localhost:27017/OnlinePlantNursery'; // Update with your MongoDB connection URI

// Connect to MongoDB
mongoose
  .connect(db)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/checkout', checkoutRoutes); // Use checkout routes

// Start server
const PORT = process.env.PORT || 3001; // Use the desired port number
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
