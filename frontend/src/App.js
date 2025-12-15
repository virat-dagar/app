import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import "./App.css";
import Home from "./pages/Home";
import RestaurantDetail from "./pages/RestaurantDetail";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Orders from "./pages/Orders";
import Profile from "./pages/Profile";
import Navbar from "./components/Navbar";
import { Toaster } from "./components/ui/sonner";

function App() {
  const [cart, setCart] = useState([]);
  const [favorites, setFavorites] = useState([]);

  // Load cart and favorites from localStorage
  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    const savedFavorites = localStorage.getItem('favorites');
    
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites));
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  // Save favorites to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const addToCart = (item, restaurantId, restaurantName) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(cartItem => cartItem.id === item.id);
      if (existingItem) {
        return prevCart.map(cartItem =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }
      return [...prevCart, { ...item, quantity: 1, restaurantId, restaurantName }];
    });
  };

  const removeFromCart = (itemId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== itemId));
  };

  const updateQuantity = (itemId, newQuantity) => {
    if (newQuantity === 0) {
      removeFromCart(itemId);
    } else {
      setCart(prevCart =>
        prevCart.map(item =>
          item.id === itemId ? { ...item, quantity: newQuantity } : item
        )
      );
    }
  };

  const clearCart = () => {
    setCart([]);
  };

  const toggleFavorite = (restaurantId) => {
    setFavorites(prevFavorites => {
      if (prevFavorites.includes(restaurantId)) {
        return prevFavorites.filter(id => id !== restaurantId);
      }
      return [...prevFavorites, restaurantId];
    });
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar cartCount={cart.reduce((sum, item) => sum + item.quantity, 0)} />
        <Routes>
          <Route
            path="/"
            element={<Home favorites={favorites} toggleFavorite={toggleFavorite} />}
          />
          <Route
            path="/restaurant/:id"
            element={
              <RestaurantDetail
                addToCart={addToCart}
                favorites={favorites}
                toggleFavorite={toggleFavorite}
              />
            }
          />
          <Route
            path="/cart"
            element={
              <Cart
                cart={cart}
                updateQuantity={updateQuantity}
                removeFromCart={removeFromCart}
              />
            }
          />
          <Route
            path="/checkout"
            element={<Checkout cart={cart} clearCart={clearCart} />}
          />
          <Route path="/orders" element={<Orders />} />
          <Route
            path="/profile"
            element={<Profile favorites={favorites} />}
          />
        </Routes>
        <Toaster />
      </BrowserRouter>
    </div>
  );
}

export default App;
