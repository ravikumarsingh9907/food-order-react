import { useState } from 'react';
import { CartContext } from './cart-context';
import items from '../Asset/constants/cards';

export function CartProvider(props) {
    const [cartQuantity, setcartQuantity] = useState(0);
    const [isClosed, setIsClosed] = useState(true);

    const handleIsClosed = () => {
        setIsClosed(!isClosed);
    }

    const handleCart = (item, action, quantity) => {
        if (action === 'add') {
            setcartQuantity(cartQuantity + 1);
            items.splice(items.indexOf(item), 1, {...item, quantity: quantity});
        } else if (action === 'remove') {
            setcartQuantity(cartQuantity - 1);
            console.log(item);
            items.splice(items.indexOf(item), 1, {...item, quantity: quantity});
        } else {
            setcartQuantity(cartQuantity + 1);
            items.splice(items.indexOf(item), 1, {...item, quantity: quantity});
        }
    }

    const cartContext = {
        isClosed,
        handleIsClosed,
        cartQuantity,
        setcartQuantity,
        handleCart,
        items
    }

    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    );
}