import './App.css';
import Navbar from './Pages/Navbar';
import Header from './Pages/Header';
import Card from './Pages/Card';
import Checkout from './Pages/Checkout';
import { CartProvider } from './Context/cartProvider';

function App() {
  return (
    <CartProvider>
      <Navbar />
      <Header />  
      <Card />
      <Checkout />
    </CartProvider>
  );
}

export default App;
