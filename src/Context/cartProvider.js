import { useState, useEffect } from 'react';
import { CartContext } from './cart-context';

export function CartProvider(props) {
    const [cartQuantity, setcartQuantity] = useState(0);
    const [cartItem, setCartItem] = useState([]);
    const [isClosed, setIsClosed] = useState(true);

    useEffect(() => {localStorage.clear()}, []);

    const handleIsClosed = () => {
        setIsClosed(!isClosed);
    }

    const addAndUpdateTheCart = (cartItems, item, quantity) => {
        cartItems.forEach((cart, index) => {
            if(cart.id === item.id) {
                setCartItem(cartItem.splice(index, 1));
                setCartItem([...cartItem, {...cart, quantity: quantity}]);
            } else if(cart.quantity === 0 ) {
                setCartItem(cartItem.splice(index, 1));
            } else {
                setCartItem([...cartItem, {...item, quantity: quantity}]);
            }
        })
    }

    const handleCart = (item, action, quantity) => {
        addAndUpdateTheCart(cartItem, item, quantity)

        if (action === 'add') {
            setcartQuantity(cartQuantity + 1);
        } else if (action === 'remove') {
            setcartQuantity(cartQuantity - 1);
        } else {
            setcartQuantity(cartQuantity + 1);
            setCartItem([...cartItem, {...item, quantity: quantity}]);
        }
    }

    console.log(cartItem);

    const cartContext = {
        isClosed,
        handleIsClosed,
        cartQuantity,
        setcartQuantity,
        setCartItem,
        handleCart,
        cartItem
    }

    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    );
}