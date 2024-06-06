import React, { useContext, useState } from 'react';
import axios from 'axios';
import { CartContext } from './CartContext';
import './Checkout.css';
import { useNavigate } from 'react-router-dom';

const CheckoutPage = () => {
    const { cart, setCart } = useContext(CartContext);
    const [userDetails, setUserDetails] = useState({
        name: '',
        email: '',
        address: ''
    });

    const navigate = useNavigate();

    const getTotalAmount = () => {
        return cart.reduce((total, item) => total + (item.quantity * item.price), 0);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserDetails(prevDetails => ({ ...prevDetails, [name]: value }));
    };

    const handleCheckout = () => {
        if (!userDetails.name || !userDetails.email || !userDetails.address) {
            alert("All fields are required.");
            return;
        }

        if (cart.length === 0) {
            alert("Cart is empty.");
            return;
        }

        const orderDetails = {
            user: userDetails,
            items: cart,
            totalAmount: getTotalAmount()
        };

        axios.post('http://localhost:3001/api/checkout', orderDetails)
            .then(response => {
                console.log(response.data);
                clearCart();
                alert("Order Placed Successfully");
                navigate('/');
            })
            .catch(error => {
                console.error('There was an error processing your order!', error);
                alert("There was an error processing your order!");
            });
    };

    const clearCart = () => {
        setCart([]);
    };

    return (
        <div className="checkout-container">
            <h1>Checkout</h1>
            <div className="checkout-form">
                <label>
                    Name:
                    <input type="text" name="name" value={userDetails.name} onChange={handleChange} />
                </label>
                <label>
                    Email:
                    <input type="email" name="email" value={userDetails.email} onChange={handleChange} />
                </label>
                <label>
                    Address:
                    <textarea name="address" value={userDetails.address} onChange={handleChange}></textarea>
                </label>
            </div>
            <div className="checkout-summary">
                <h2>Order Summary</h2>
                <div className="cart-items">
                    {cart.map(item => (
                        <div key={item.id} className="cart-item">
                            <img src={item.image} alt={item.name} className="cart-item-image" />
                            <div className="cart-item-details">
                                <h3>{item.name}</h3>
                                <p>Quantity: {item.quantity}</p>
                                <p>Price: Rs {item.price}</p>
                                <p>Total: Rs {item.quantity * item.price}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <h2>Total Amount: Rs {getTotalAmount()}</h2>
            </div>
            <button className="checkout-button" onClick={handleCheckout}>Place Order</button>
        </div>
    );
};

export default CheckoutPage;
