import './AddToCartComponent.css';
import { CartContext } from '../Context/cart-context';
import { useContext, useEffect, useState } from 'react';

const item = {
    ADD: 'add',
    REMOVE: 'remove'
}

export default function AddToCartComponent({ card, id }) {
    const [itemQuantity, updateItemQuantity] = useState(0);
    const { handleCart, items, isClosed } = useContext(CartContext);

    useEffect(() => {
        if(isClosed) {
            updateItemQuantity(0);
        }
    }, [isClosed])

    const handleQuantityChange = (event) => {
        if (itemQuantity > 0 && event.target.textContent === item.REMOVE) {
            updateItemQuantity(itemQuantity - 1);
            handleCart(card, event.target.textContent, itemQuantity - 1);
        } else if (itemQuantity > 0 && event.target.textContent === item.ADD) {
            updateItemQuantity(itemQuantity + 1);
            handleCart(card, event.target.textContent, itemQuantity + 1);
        } else if (itemQuantity === 0) {
            if (card.quantity) {
                if (event.target.textContent === 'remove') {
                    updateItemQuantity(card.quantity - 1);
                    handleCart(card, event.target.textContent, card.quantity - 1);
                } else {
                    updateItemQuantity(itemQuantity + 1);
                    handleCart(card, event.target.textContent, itemQuantity + 1);
                }
            } else {
                updateItemQuantity(itemQuantity + 1);
                handleCart(card, event.target.textContent, itemQuantity + 1);
            }
        }
    }

    const renderBtns = items.map(cartItem => {
        if (cartItem.quantity > 0 && cartItem.id === id) {
            return (
                <div className='btn-container'>
                    <button type="button" className="decrement-btn btn" onClick={handleQuantityChange} ><span className="material-symbols-outlined">{item.REMOVE}</span></button>
                    <p className="itemQuantity">{cartItem.quantity}</p>
                    <button type="button" className="decrement-btn btn" onClick={handleQuantityChange} ><span className="material-symbols-outlined">{item.ADD}</span></button>
                </div>
            )
        } else if (cartItem.id === id && isClosed) {
            return (
                <div className='add-to-cart-btn'><button className='btn' onClick={handleQuantityChange}>Add</button></div>
            )
        }

        return '';
    });

    return (
        <div className="add-to-cart-component-container">
            {renderBtns}
        </div>
    )
}   