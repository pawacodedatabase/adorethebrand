import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaSearch, FaBars, FaTimes } from 'react-icons/fa';
import logo from '../../assets/logo.png';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);  // State for search bar visibility
  const [searchQuery, setSearchQuery] = useState('');  // State for search input

  const handleSearch = () => {
    console.log('Search Query:', searchQuery); // Placeholder for search logic
  };

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
          <Link to="/" className="hover:text-black transition">Home</Link>
          <Link to="/products" className="hover:text-black transition">Shop</Link>
          <Link to="/cart" className="hover:text-black transition">Cart</Link>
          <Link to="/checkout" className="hover:text-black transition">Checkout</Link>

          {/* Search Icon */}
          <div
            className="text-xl cursor-pointer text-gray-800"
            onClick={() => setIsSearchOpen(!isSearchOpen)} // Toggle search bar visibility
          >
            <FaSearch />
          </div>
          <div className="text-xl cursor-pointer text-gray-800">
            <FaShoppingCart />
          </div>
        </nav>

        {/* Hamburger and Icons for Small Screens */}
        <div className="lg:hidden flex items-center space-x-4">
         
         <Link
            to="/search"
            className="text-xl cursor-pointer text-gray-800"
            onClick={() => setIsSearchOpen(!isSearchOpen)} // Toggle search bar visibility
          >
            <FaSearch />
          </Link>

       
          <Link to="/cart" className="text-xl cursor-pointer text-gray-800">
            <FaShoppingCart />
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
                className="block hover:text-black transition"
              >
                Home
              </Link>
            </li>

            <hr />
            <li>
              <Link
                to="/products"
                onClick={() => setIsMenuOpen(false)}
                className="block hover:text-black transition"
              >
                Shop
              </Link>
            </li>

            <hr />
            <li>
              <Link
                to="/cart"
                onClick={() => setIsMenuOpen(false)}
                className="block hover:text-black transition"
              >
                Cart
              </Link>
            </li>

            <hr />
            <li>
              <Link
                to="/checkout"
                onClick={() => setIsMenuOpen(false)}
                className="block hover:text-black transition"
              >
                Checkout
              </Link>
            </li>

            <hr />
          </ul>
        </div>
      )}

      {/* Search Bar for Both Large and Small Screens */}
      {isSearchOpen && (
        <div className="absolute top-16 left-0 right-0 bg-white shadow-md p-4 z-40">
          <div className="flex items-center space-x-2">
            <input
              type="text"
              className="px-4 py-2 border border-gray-300 rounded-md w-full"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)} // Update searchQuery state
            />
            <button
              onClick={handleSearch} // Trigger search logic
              className="bg-black text-white px-4 py-2 rounded-md"
            >
              Search
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
