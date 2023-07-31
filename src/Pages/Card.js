import './Card.css';
import CardComponent from '../Components/CardComponent';
import { useContext } from 'react';
import { CartContext } from '../Context/cart-context';

export default function Card() {
    const { items } = useContext(CartContext);
    const renderCards = items.map((card) => {
        return (
            <CardComponent card={card} key={card.id} />
        )
    });

    return (
        <div>
            <div className="card-container">
                {renderCards}
            </div>
        </div>
    )
}