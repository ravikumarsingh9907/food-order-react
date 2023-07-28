import "./CartComponent.css";
import { CartContext } from "../Context/cart-context";
import { useContext } from "react";

export default function CartComponent() {
    const {cartQuantity, handleIsClosed} = useContext(CartContext);
    return (
        <div className="cart-container" onClick={handleIsClosed}>
            <span className="material-symbols-outlined">shopping_cart</span>
            <p className="item-count">{cartQuantity}</p>
        </div>
    );
}