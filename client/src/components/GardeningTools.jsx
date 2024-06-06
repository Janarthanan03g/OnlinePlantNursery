import React, { useState, useContext } from 'react';
import { CartContext } from './CartContext';
import Shovel from '../assets/images/Shovel.jpg';
import Rake from '../assets/images/Rake.jpg';
import Hoe from '../assets/images/Hoe.jpg';
import Pruner from '../assets/images/Pruner.jpg';
import WateringCan from '../assets/images/Wateringcan.jpg';
import GardenFork from '../assets/images/Gardenfork.jpg';
import './Products.css';

const GardeningTools = () => {
    const tools = [
        { id: 1, name: 'Shovel', image: Shovel, price: 15 },
        { id: 2, name: 'Rake', image: Rake, price: 10 },
        { id: 3, name: 'Hoe', image: Hoe, price: 12 },
        { id: 4, name: 'Pruner', image: Pruner, price: 20 },
        { id: 5, name: 'Watering Can', image: WateringCan, price: 8 },
        { id: 6, name: 'Garden Fork', image: GardenFork, price: 18 }
    ];

    const { addToCart } = useContext(CartContext); 

    const [quantities, setQuantities] = useState(tools.reduce((acc, tool) => ({ ...acc, [tool.id]: 0 }), {}));

    const increaseQuantity = (id) => {
        setQuantities({ ...quantities, [id]: quantities[id] + 1 });
    };

    const decreaseQuantity = (id) => {
        if (quantities[id] > 0) {
            setQuantities({ ...quantities, [id]: quantities[id] - 1 });
        }
    };

    const handleAddToCart = (tool) => {
        if (quantities[tool.id] > 0) {
            addToCart({ ...tool, quantity: quantities[tool.id] });
            setQuantities({ ...quantities, [tool.id]: 0 });
        }
    };

    return (
        <div className="containers">
            <h1>Gardening Tools</h1>
            {tools.map(tool => (
                <div key={tool.id} className="cards">
                    <img src={tool.image} alt={tool.name} className="images" />
                    <h3>{tool.name}</h3>
                    <p>Price: Rs {tool.price}</p>
                    <div className="quantity-control">
                        <button onClick={() => decreaseQuantity(tool.id)}>-</button>
                        <span>{quantities[tool.id]}</span>
                        <button onClick={() => increaseQuantity(tool.id)}>+</button>
                    </div>
                    <button className="Addtocartbtn" onClick={() => handleAddToCart(tool)}>Add to Cart</button>
                </div>
            ))}
        </div>
    );
};

export default GardeningTools;
