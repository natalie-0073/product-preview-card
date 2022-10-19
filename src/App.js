import './App.css';
import './style.scss';
import img from './img/image-product-desktop.jpg';
import cart from "./img/shopping-cart (1).png";

function App() {
  return (
    <div className="App">
      <div className="box">
     <div className="container">
     <div className="content">
      <div className="row">
        <div className="col-6 p-0 h-100"><img src={img} alt="smth"className="" /></div>
        <div className="col-6 h-100 p-4 text-start">
          <p className="comment">PERFUME</p>
          <h2 className="owner">Gabrielle Essense Eau De Parfum</h2>
        <p className="description">A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer Creator for the House of CHANEL.</p>
        <div className="price">$149.99 <span className="old-price">$169.99</span></div>
        <div className="buy" href="/"><img src={cart} alt="shopping cart" className="cart img-fluid"/><span>Add to Cart</span></div>
        </div>
      </div>
      </div>
     </div>
     </div>
    </div>
  );
}

export default App;
