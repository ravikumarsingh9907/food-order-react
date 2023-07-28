import './AddToCartComponent.css';
import { CartContext } from '../Context/cart-context';
import { useContext, useState } from 'react';

const item = {
    ADD: 'add',
    REMOVE: 'remove'
}

export default function AddToCartComponent({ card, id }) {
    const [itemQuantity, updateItemQuantity] = useState(0);
    const { handleCart, cartItem } = useContext(CartContext);

    const handleQuantityChange = (event) => {
        if (itemQuantity > 0 && event.target.textContent === item.REMOVE) {
            updateItemQuantity(itemQuantity - 1);
            handleCart(card, event.target.textContent, itemQuantity - 1);
            localStorage.setItem(`${id}`, itemQuantity - 1)

        } else if (itemQuantity > 0 && event.target.textContent === item.ADD) {
            updateItemQuantity(itemQuantity + 1);
            handleCart(card, event.target.textContent, itemQuantity + 1);
            localStorage.setItem(`${id}`, itemQuantity + 1)

        } else if (itemQuantity === 0) {
            if (event.target.textContent === item.ADD || event.target.textContent === 'Add') {
                updateItemQuantity(+localStorage.getItem(`${id}`) + 1);
                handleCart(card, event.target.textContent, +localStorage.getItem(`${id}`) + 1);
                localStorage.setItem(`${id}`, 1)

            } else {
                updateItemQuantity(+localStorage.getItem(`${id}`) - 1);
                handleCart(card, event.target.textContent, +localStorage.getItem(`${id}`) - 1);
                localStorage.setItem(`${id}`, +localStorage.getItem(`${id}`) - 1)
            }
        }
    }

    const renderBtns = cartItem.map(cartItem => {
        if (cartItem.quantity > 0 && cartItem.id === id) {
            return (
                <div className='btn-container'>
                    <button type="button" className="decrement-btn btn" onClick={handleQuantityChange} ><span className="material-symbols-outlined">{item.REMOVE}</span></button>
                    <p className="itemQuantity">{cartItem.quantity}</p>
                    <button type="button" className="decrement-btn btn" onClick={handleQuantityChange} ><span className="material-symbols-outlined">{item.ADD}</span></button>
                </div>
            )
        }

        return '';
    });

    return (
        <div className="add-to-cart-component-container">
            {renderBtns}
            <div className='add-to-cart-btn'>
                {localStorage.getItem(`${id}`) > 0 || itemQuantity > 0 ? '' : <button className='btn' onClick={handleQuantityChange}>Add</button>}
            </div>
        </div>
    )
}