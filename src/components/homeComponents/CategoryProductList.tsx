import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {  products } from "../../pages/Products/products"; // Import the products array
import {  FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import Pagination from "./pagination"; // Import Pagination component

const ProductListPage: React.FC = () => {
  const { category } = useParams<{ category: string }>(); // Get category from the URL
  const [currentPage, setCurrentPage] = useState(1);
  const [cart, setCart] = useState<any[]>([]); // Manage cart state
  const itemsPerPage = 20; // Number of items per page
  const [filters, setFilters] = useState({
    size: "",
    name: "",
    category: category || "", // If category exists in URL, set it in filters
  });

  useEffect(() => {
    // Update filters when category changes in URL
    if (category) {
      setFilters((prev) => ({ ...prev, category }));
    }
  }, [category]);

  // Filter logic
  const filteredProducts = products.filter((product) => {
    const matchesSize = filters.size ? product.sizes?.includes(filters.size) : true;
    const matchesName = filters.name
      ? product.name.toLowerCase().includes(filters.name.toLowerCase())
      : true;
    const matchesCategory = filters.category
      ? product.category === filters.category
      : true;
    return matchesSize && matchesName && matchesCategory;
  });

  // Pagination logic
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const currentProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Add to cart function


  // Update quantity in cart
  const updateQuantity = (productId: number, action: "increase" | "decrease") => {
    setCart((prevCart) => {
      return prevCart.map((item) =>
        item.id === productId
          ? {
              ...item,
              quantity: action === "increase" ? item.quantity + 1 : Math.max(0, item.quantity - 1),
            }
          : item
      );
    });
  };

  // Helper to get the quantity of an item in the cart
  const getItemQuantity = (productId: number) => {
    const item = cart.find((product) => product.id === productId);
    return item ? item.quantity : 0;
  };

  return (
    <div className="container mx-auto px-4 py-8 font-sans text-gray-800">
      <h1 className="text-4xl font-semibold text-center mb-6">Shop Our Collection</h1>

      {/* Filter Section */}
      <div className="mb-6">
        <div className="flex flex-wrap gap-1 justify-evenly">
          <input
            type="text"
            placeholder="Search by name"
            value={filters.name}
            onChange={(e) => setFilters({ ...filters, name: e.target.value })}
            className="border border-gray-300 rounded-md px-4 py-2 w-72"
          />
          <input
            type="text"
            placeholder="Filter by size (e.g., M, L)"
            value={filters.size}
            onChange={(e) => setFilters({ ...filters, size: e.target.value })}
            className="border border-gray-300 rounded-md px-4 py-2 w-72"
          />
        </div>
        <div className="flex justify-center">
          <select
            value={filters.category}
            onChange={(e) => setFilters({ ...filters, category: e.target.value })}
            className="border border-gray-300 rounded-md px-4 py-2 w-60 mt-4"
          >
            <option value="">All Categories</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {currentProducts.map((product) => (
          <div
            key={product.id}
            className="flex flex-col bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition duration-300"
          >
            <div className="relative group">
              <img
                src={product.images[0]}
                alt={product.name}
                className="w-full h-60 object-cover rounded-md"
              />
              <div className="absolute inset-0 flex items-center justify-center space-x-4 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300">
                {/* <button
                  onClick={() => addToCart(product)}
                  className="bg-white text-black p-2 rounded-full shadow hover:animate-bounce"
                  aria-label="Add to Cart"
                >
                  <FaShoppingCart />
                </button>
                <button
                  className="bg-white text-red-500 p-2 rounded-full shadow hover:animate-pulse"
                  aria-label="Add to Wishlist"
                >
                  <FaHeart />
                </button> */}
                <Link
                  to={`/product/${product.id}`}
                  className="bg-white text-gray-500 p-2 rounded-full shadow hover:animate-spin"
                >
                  <FaEye />
                </Link>
              </div>
            </div>
            <div className="mt-4">
              <h2 className="text-lg font-bold">{product.name}</h2>
              <p className="text-sm text-gray-500">{product.category}</p>
              <p className="text-xl font-semibold text-red-600">₦{product.price}</p>
              <div className="mt-4">
                {getItemQuantity(product.id) > 0 ? (
                  <div className="flex items-center space-x-4">
                    <button
                      onClick={() => updateQuantity(product.id, "decrease")}
                      className="px-3 py-1 bg-gray-300 rounded-md"
                    >
                      -
                    </button>
                    <span className="text-lg font-bold">
                      {getItemQuantity(product.id)}
                    </span>
                    <button
                      onClick={() => updateQuantity(product.id, "increase")}
                      className="px-3 py-1 bg-gray-300 rounded-md"
                    >
                      +
                    </button>
                  </div>
                ) : (
                  <div className="flex items-center space-x-4 justify-center">
                    {/* <button
                      onClick={() => addToCart(product)}
                      className="mt-2 px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800"
                    >
                      Add to Cart
                    </button> */}
                    {/* View Product Button */}
                    <Link
                      to={`/product/${product.id}`}
                      className="mt-2 px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-600"
                    >
                      View Product
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={setCurrentPage} // Passing setCurrentPage directly
      />
    </div>
  );
};

export default ProductListPage;
