import './App.css';
import './style.scss';
import cart from "./img/shopping-cart (1).png";
function App() {
  return (
    <div className="App">
      <div className="box">
     <div className="container">
     <div className="content">
      <div className="row">
        <div className="col-sm-6 p-0  img-col"></div>
        <div className="col-sm-6  p-4 text-start">
          <p className="product__comment">PERFUME</p>
          <h2 className="product__owner">Gabrielle Essense Eau De Parfum</h2>
        <p className="product__description">A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer Creator for the House of CHANEL.</p>
        <div className="product__price">$149.99<span className="product__price--old">$169.99</span></div>
        <div className="product__buy" href="/"><img src={cart} alt="shopping cart" className="cart img-fluid"/><span>Add to Cart</span></div>        
        </div>
      </div>
      </div>
     </div>
     </div>
    </div>
  );
}

export default App;
