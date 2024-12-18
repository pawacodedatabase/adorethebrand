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

import Wishlist from "./pages/Products/wishlist";
import LegSizeGuide from "./pages/guide";
import OnSaleProducts from "./components/onSale";
import LegalTerms from "./components/homeComponents/LegalTerm";

const App: React.FC = () => {
  const [cart, setCart] = useState<any[]>([]);
  const [wishlist, setWishlist] = useState<any[]>([]);

  // Load cart from localStorage when the app starts
  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }

    const storedWishlist = localStorage.getItem("wishlist");
    if (storedWishlist) {
      setWishlist(JSON.parse(storedWishlist));
    }
  }, []);

  // Store cart and wishlist in localStorage when they change
  useEffect(() => {
    if (cart.length > 0) {
      localStorage.setItem("cart", JSON.stringify(cart));
    } else {
      localStorage.removeItem("cart");
    }

    if (wishlist.length > 0) {
      localStorage.setItem("wishlist", JSON.stringify(wishlist));
    } else {
      localStorage.removeItem("wishlist");
    }
  }, [cart, wishlist]);

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

  // Add product to wishlist
  const addToWishlist = (product: any) => {
    setWishlist((prevWishlist) => {
      if (!prevWishlist.some((item) => item.id === product.id)) {
        const updatedWishlist = [...prevWishlist, product];
        localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
        return updatedWishlist;
      }
      return prevWishlist;
    });
  };

  return (
    <Router>
      <ScrollToTop /> {/* Add ScrollToTop here */}
      <MovingText />
      <Header />
      <div className="font-sans">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/legal" element={<LegalTerms />} />
          <Route
          path="/sale"
          element={<OnSaleProducts addToWishlist={addToWishlist} wishlist={wishlist} />}
        />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/wishlist" element={<Wishlist wishlist={wishlist} />} />
          <Route
            path="/products"
            element={
              <ProductList
                addToCart={addToCart}
                updateQuantity={updateQuantity}
                cart={cart}
                addToWishlist={addToWishlist}
                wishlist={wishlist}
              />
            }
          />
          <Route path="/product/:productId" element={<ProductDetail />} />
          <Route
            path="/cart"
            element={<Cart cart={cart} updateQuantity={updateQuantity} removeFromCart={removeFromCart} />}
          />
          <Route path="/checkout" element={<Checkout cart={cart} />} />
          <Route path="/products/:category" element={<ProductListPage />} />
          <Route path="/guide" element={<LegSizeGuide />} /> 
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
