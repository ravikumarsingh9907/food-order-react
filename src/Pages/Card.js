import './Card.css';
import Cards from '../Asset/constants/cards';
import CardComponent from '../Components/CardComponent';

export default function Card() {
    const renderCards = Cards.map((card) => {
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