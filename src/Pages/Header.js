import "./Header.css";
import HeroCrousel from "../Asset/hero-crousel.jpg";

export default function Header() {
    return (
        <header className="header-container">
            <div className="header-content-container" style={{backgroundImage: `url(${HeroCrousel})`}}>
                <h2 className="heading">Choose your favorite food :)</h2>
            </div>
        </header>
    )
}