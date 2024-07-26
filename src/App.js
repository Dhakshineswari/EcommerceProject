import './App.css';
import { useState } from 'react';
import Home from './pages/Home';
import Header1 from './components/Header1';
import Footer from './components/Footer';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [cartItems, setCartItems] = useState([]);
  return (
    <div className="App">
      <Router>
        <div>
          <ToastContainer theme="dark" position='top-center'/>
          <Header1 cartItems={cartItems} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Home />} />
            <Route path="/product/:id" element={<ProductDetail cartItems={cartItems} setCartItems={setCartItems} />} />
            <Route path="/cart" element ={<Cart cartItems={cartItems} setCartItems={setCartItems}/>}/>
          </Routes>
        </div>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
