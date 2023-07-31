import "./Checkout.css";
import { useState, useEffect, useContext } from "react";
import { CartContext } from "../Context/cart-context";
import CardComponent from "../Components/CardComponent";

export default function Checkout() {
    const [style, setStyle] = useState('checkout-container');
    const { items, isClosed, handleIsClosed } = useContext(CartContext);
    let totalPrice = 0;

    useEffect(() => {
        if (isClosed) {
            setStyle('checkout-container hidden');
        } else {
            setStyle('checkout-container');
        }
    }, [isClosed]);

    const renderItems = items.map((item) => {
        if (item.quantity && item.quantity > 0) {
            totalPrice += item.quantity * item.price;
            return <CardComponent card={item} quantity={item.quantity} key={item.id}/>
        }
        return '';
    });
    
    return (
        <div className={style}>
            <div className="checkout-close">
                <span className="material-symbols-outlined" onClick={handleIsClosed}>close</span>
            </div>
            <div className="cart-items-container">
                {renderItems}
            </div>
            { totalPrice > 0 ? <div className="total-amount">
                <div className="amount">
                    <span>Total: </span><span>${totalPrice}</span>
                </div>
                <div className="checkout-btn">
                    <button>Checkout</button>
                </div>
            </div> : ''}
        </div>
    )
}