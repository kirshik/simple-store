import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import ProductsPage from './components/ProductsPage';
import ProductPage from './components/ProductPage';
import NavBar from './components/NavBar';
import Cart from './components/Cart';
import { useState, useEffect } from 'react';

function App() {
  const [products, setProducts] = useState(new Map()); // a map from id -> product
  const [cart, setCart] = useState(getSavedCart()); // a map from id -> amount
  console.log(cart)

  useEffect(() => {
    const url = 'https://dummyjson.com/products';
    fetch(url)
      .then(response => response.json())
      .then(data => {
        // convert data.products from a list to a map
        const products = new Map(
          data.products.map(product => [product.id, product])
        );
        setProducts(products);
      });
  }, []);

  function getSavedCart() {
    if (localStorage.getItem('cart')) {
      return JSON.parse(localStorage.getItem('cart'));
    } else {
      return new Map([]);
    }
  }
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  function addToCart(id, amount) {
    if (cart.has(id)) {
      const newCart = new Map(cart.set(id, cart.get(id) + amount));
      setCart(newCart);
    } else {
      const newCart = new Map(cart.set(id, amount));
      setCart(newCart);
    }
    alert('Product was added successfully to the cart');
  }

  function deleteFromCart(id) {
    const newCart = new Map(cart);
    newCart.delete(id);
    setCart(newCart);
  }

  return (
    <div className="App">
      <Router>
        <NavBar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductsPage products={products} />} />
          <Route path="/products/:id" element={
            <ProductPage
              products={products}
              addToCart={addToCart}
            />}
          />
          <Route path="/cart" element={
            <Cart
              products={products}
              cart={cart}
              deleteFromCart={deleteFromCart}
            />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
