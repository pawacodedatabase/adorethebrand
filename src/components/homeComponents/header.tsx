import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaHeart, FaBars, FaTimes, FaShoppingBasket, FaShoppingBag } from 'react-icons/fa';
import logo from '../../assets/logo.png';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 bg-white z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-light">
          <Link to="/" className="text-black hover:text-gray-700">
            <img src={logo} alt="logo" width={200} />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex space-x-8 items-center text-gray-800 text-sm">
          <Link
            to="/"
            className="relative group font-medium text-gray-800 hover:text-black transition duration-300"
          >
            Home
            <span className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-black transition-all duration-300 transform -translate-x-1/2 group-hover:w-full group-hover:scale-x-100"></span>
          </Link>
          <Link
            to="/products"
            className="relative group font-medium text-gray-800 hover:text-black transition duration-300"
          >
            Shop
            <span className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-black transition-all duration-300 transform -translate-x-1/2 group-hover:w-full group-hover:scale-x-100"></span>
          </Link>
          <Link
            to="/cart"
            className="relative group font-medium text-gray-800 hover:text-black transition duration-300"
          >
            Cart
            <span className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-black transition-all duration-300 transform -translate-x-1/2 group-hover:w-full group-hover:scale-x-100"></span>
          </Link>
          <Link
            to="/checkout"
            className="relative group font-medium text-gray-800 hover:text-black transition duration-300"
          >
            Checkout
            <span className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-black transition-all duration-300 transform -translate-x-1/2 group-hover:w-full group-hover:scale-x-100"></span>
          </Link>

          {/* Wishlist Icon */}
          <Link to="/wishlist" className="text-xl cursor-pointer text-gray-800">
            <FaHeart />
          </Link>

          {/* Cart Icon */}
          <Link to="/cart" className="text-xl cursor-pointer text-gray-800">
            <FaShoppingCart />
          </Link>
        </nav>

        {/* Hamburger and Icons for Small Screens */}
        <div className="lg:hidden flex items-center space-x-4">
          <Link to="/wishlist" className="text-xl cursor-pointer text-gray-800 hover:text-red-500 ">
            <FaHeart />
          </Link>

          <Link to="/cart" className="text-xl cursor-pointer text-gray-800 hover:text-red-500 ">
            <FaShoppingCart />
          </Link>
          <Link to="/products" className="text-xl cursor-pointer text-gray-800 hover:text-red-500 ">
            <FaShoppingBag />
          </Link>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="focus:outline-none"
          >
            <div className="text-xl cursor-pointer text-gray-800">
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-gray-50 shadow-md">
          <ul className="flex flex-col space-y-4 py-6 px-6 text-gray-800 text-sm">
            <li>
              <Link
                to="/"
                onClick={() => setIsMenuOpen(false)}
                className="relative group block hover:text-black transition duration-300"
              >
                Home
                <span className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-black transition-all duration-300 transform -translate-x-1/2 group-hover:w-full group-hover:scale-x-100"></span>
              </Link>
            </li>
            <hr />
            <li>
              <Link
                to="/products"
                onClick={() => setIsMenuOpen(false)}
                className="relative group block hover:text-black transition duration-300"
              >
                Shop
                <span className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-black transition-all duration-300 transform -translate-x-1/2 group-hover:w-full group-hover:scale-x-100"></span>
              </Link>
            </li>
            <hr />
            <li>
              <Link
                to="/cart"
                onClick={() => setIsMenuOpen(false)}
                className="relative group block hover:text-black transition duration-300"
              >
                Cart
                <span className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-black transition-all duration-300 transform -translate-x-1/2 group-hover:w-full group-hover:scale-x-100"></span>
              </Link>
            </li>
            <hr />
            <li>
              <Link
                to="/wishlist"
                onClick={() => setIsMenuOpen(false)}
                className="relative group block hover:text-black transition duration-300"
              >
                Wishlist
                <span className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-black transition-all duration-300 transform -translate-x-1/2 group-hover:w-full group-hover:scale-x-100"></span>
              </Link>
            </li>
            <hr />
            <li>
              <Link
                to="/guide"
                onClick={() => setIsMenuOpen(false)}
                className="relative group block hover:text-black transition duration-300"
              >
                Guide
                <span className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-black transition-all duration-300 transform -translate-x-1/2 group-hover:w-full group-hover:scale-x-100"></span>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
