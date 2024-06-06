import React, { useState, useContext } from 'react';
import { CartContext } from './CartContext';
import AloeVera from '../assets/images/Aloevera.jpg';
import Basil from '../assets/images/Basil.jpg';
import Mint from '../assets/images/Mint.jpg';
import Thyme from '../assets/images/Thyme.jpg';
import Lavender from '../assets/images/Lavender.jpg';
import Chamomile from '../assets/images/Chamomile.jpg';
import './Products.css';

const MedicinalPlants = () => {
    const plants = [
        { id: 1, name: 'Aloe Vera', image: AloeVera, price: 7 },
        { id: 2, name: 'Basil', image: Basil, price: 4 },
        { id: 3, name: 'Mint', image: Mint, price: 3 },
        { id: 4, name: 'Thyme', image: Thyme, price: 5 },
        { id: 5, name: 'Lavender', image: Lavender, price: 6 },
        { id: 6, name: 'Chamomile', image: Chamomile, price: 8 }
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
            <h1>Medicinal Plants</h1>
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

export default MedicinalPlants;
