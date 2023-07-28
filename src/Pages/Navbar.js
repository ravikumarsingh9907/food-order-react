import "./Navbar.css";
import CartComponent from "../Components/CartComponent.js";

export default function NavBar() {
    return (
        <nav className="navbar-container">
            <div className="navbar-content-container">
                <div className="site-name">
                    <h2>Food App</h2>
                </div>
                <CartComponent />
            </div>
        </nav>
    )
}