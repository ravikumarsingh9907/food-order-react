import './CardComponent.css';
import AddToCartComponent from './AddToCartComponent';
import { useContext } from 'react';
import { CartContext } from '../Context/cart-context';

export default function CardComponent({ card, quantity }) {
    const { isClosed } = useContext(CartContext);

    return (
        <div className="card-item-container">
            <div className="card-item">
                <div>
                    <p className="food-name">{card.name}</p>
                    <p className="price"><span>Price: $</span>{card.price}</p>
                </div>
                {quantity > 0 ? <div><span className="quantity">x{quantity}</span></div> : ''}
            </div>
            {isClosed || card.id ? <AddToCartComponent card={card} id={card.id} /> : ''}
        </div>
    );
}

