// src/components/CartPage.jsx
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from './CartContext';
import './CartPage.css';

const CartPage = () => {
    const { cart, removeFromCart } = useContext(CartContext);
    const navigate = useNavigate();

    const getTotalAmount = () => {
        return cart.reduce((total, item) => total + (item.quantity * item.price), 0);
    };

    const handleCheckout = () => {
        navigate('/checkout');
    };

    return (
        <div className="cart-container">
            <h1>Your Shopping Cart</h1>
            <div className="cart-items">
                {cart.map(item => (
                    <div key={item.id} className="cart-item">
                        <img src={item.image} alt={item.name} className="cart-item-image" />
                        <div className="cart-item-details">
                            <h3>{item.name}</h3>
                            <p>Quantity: {item.quantity}</p>
                            <p>Price: Rs {item.price}</p>
                            <p>Total: Rs {item.quantity * item.price}</p>
                            <button className="delete-button" onClick={() => removeFromCart(item.id)}>Remove</button>
                        </div>
                    </div>
                ))}
            </div>
            <div className="cart-total">
                <h2>Total Amount: Rs {getTotalAmount()}</h2>
                <button className="checkout-button" onClick={handleCheckout}>Checkout</button>
            </div>
        </div>
    );
};

export default CartPage;
