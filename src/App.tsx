import React, { useState, useEffect } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Cart from "./pages/shoppingCart";
import Checkout from "./pages/checkOut";
import Header from "./components/homeComponents/header";
import MovingText from "./components/movingText";
import ProductList from "../src/pages/Products/ProductList";
import ContactPage from "./pages/contact";
import ProductDetail from "./pages/Products/productDetails";
import ScrollToTop from "./components/scroll2top"; // Import ScrollToTop
import ProductListPage from "./components/homeComponents/CategoryProductList";
import Footer from "./components/homeComponents/footer";

const App: React.FC = () => {
  const [cart, setCart] = useState<any[]>([]);

  // Load cart from localStorage when the app starts
  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  // Store cart in localStorage when it changes
  useEffect(() => {
    if (cart.length > 0) {
      localStorage.setItem("cart", JSON.stringify(cart));
    } else {
      localStorage.removeItem("cart");
    }
  }, [cart]);

  // Add product to cart or update its quantity
  const addToCart = (product: any) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  // Update quantity of an item in the cart
  const updateQuantity = (productId: number, action: "increase" | "decrease") => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId
          ? {
              ...item,
              quantity: action === "increase" ? item.quantity + 1 : Math.max(item.quantity - 1, 1),
            }
          : item
      )
    );
  };

  // Remove item from cart
  const removeFromCart = (productId: number) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  return (
    <Router>
      <ScrollToTop /> {/* Add ScrollToTop here */}
      <MovingText />
      <Header />
      <div className="font-sans">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="contact" element={<ContactPage />} />
          <Route
            path="/products"
            element={<ProductList addToCart={addToCart} updateQuantity={updateQuantity} cart={cart} />}
          />
           <Route path="/product/:productId" element={<ProductDetail />} />
          <Route
            path="/cart"
            element={<Cart cart={cart} updateQuantity={updateQuantity} removeFromCart={removeFromCart} />}
          />
          <Route path="/checkout" element={<Checkout cart={cart} />} />
          <Route path="/products/:category" element={<ProductListPage />} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
};

export default App;
