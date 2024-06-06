// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Signup from './components/Signup';
import Login from './components/Login';
import OrnamentalPlants from './components/OrnamentalPlants';
import MedicinalPlants from './components/MedicinalPlants';
import GardeningTools from './components/GardeningTools';
import CartPage from './components/CartPage';
import Checkout from './components/Checkout'
import { Header } from './components/Header';
import { CartProvider } from './components/CartContext';

const App = () => {
  return (
    <CartProvider>
      <Router>
        <Header /> 
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/OrnamentalPlants" element={<OrnamentalPlants />} />
            <Route path="/MedicinalPlants" element={<MedicinalPlants />} />
            <Route path="/GardeningTools" element={<GardeningTools />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
};

export default App;
