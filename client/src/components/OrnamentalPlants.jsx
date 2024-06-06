import React, { useState, useContext } from 'react';
import { CartContext } from './CartContext';
import Rose from '../assets/images/Rose.jpg';
import Tulip from '../assets/images/Tulip.jpg';
import Daisy from '../assets/images/Daisy.jpg';
import Orchid from '../assets/images/Orchid.jpg';
import Sunflower from '../assets/images/Sunflower.jpg';
import Lily from '../assets/images/Lily.jpg';
import './Products.css'; 

const OrnamentalPlants = () => {
    const plants = [
        { id: 1, name: 'Rose', image: Rose, price: 5 },
        { id: 2, name: 'Tulip', image: Tulip, price: 3 },
        { id: 3, name: 'Daisy', image: Daisy, price: 2 },
        { id: 4, name: 'Orchid', image: Orchid, price: 10 },
        { id: 5, name: 'Sunflower', image: Sunflower, price: 4 },
        { id: 6, name: 'Lily', image: Lily, price: 6 }
    ];

    const { addToCart } = useContext(CartContext); 

    const [quantities, setQuantities] = useState(plants.reduce((acc, plant) => ({ ...acc, [plant.id]: 0 }), {}));

    const increaseQuantity = (id) => {
        setQuantities({ ...quantities, [id]: quantities[id] + 1 });
    };

    const decreaseQuantity = (id) => {
        if (quantities[id] > 0) {
            setQuantities({ ...quantities, [id]: quantities[id] - 1 });
        }
    };

    const handleAddToCart = (plant) => {
        if (quantities[plant.id] > 0) {
            addToCart({ ...plant, quantity: quantities[plant.id] });
            setQuantities({ ...quantities, [plant.id]: 0 });
        }
    };

    return (
        <div className="containers">
            <h1>Ornamental Plants</h1>
            {plants.map(plant => (
                <div key={plant.id} className="cards">
                    <img src={plant.image} alt={plant.name} className="images" />
                    <h3>{plant.name}</h3>
                    <p>Price: Rs {plant.price}</p>
                    <div className="quantity-control">
                        <button onClick={() => decreaseQuantity(plant.id)}>-</button>
                        <span>{quantities[plant.id]}</span>
                        <button onClick={() => increaseQuantity(plant.id)}>+</button>
                    </div>
                    <button className="Addtocartbtn" onClick={() => handleAddToCart(plant)}>Add to Cart</button>
                </div>
            ))}
        </div>
    );
};

export default OrnamentalPlants;
