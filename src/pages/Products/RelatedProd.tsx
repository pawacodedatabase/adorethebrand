import React from "react";
import { Link } from "react-router-dom";
import {  products } from "./products";

const RandomProducts: React.FC = () => {
  // Get 4 random products
  const randomProducts = [...products]
    .sort(() => Math.random() - 0.5)
    .slice(0, 4);

  // Add to Cart Handler (can be replaced with a context-based cart system)
 

  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-2xl font-semibold mb-6">Featured Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {randomProducts.map((product) => (
          <div
            key={product.id}
            className="flex flex-col bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition duration-300"
          >
            <img
              src={product.images[0]}
              alt={product.name}
              className="w-full h-60 object-cover rounded-md"
            />
            <h3 className="mt-4 text-lg font-bold">{product.name}</h3>
            <p className="text-sm text-gray-500">{product.description.split(" ").slice(0,20).join(' ')}...</p>
            <p className="text-xl font-semibold text-red-600">₦{product.price}</p>

            <div className="mt-4 flex flex-col gap-2">
              {/* View Product Button */}
              <Link
                to={`/product/${product.id}`}
                className="bg-black text-white px-4 py-2 rounded-md text-center hover:bg-gray-800"
              >
                View Product
              </Link>

              
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RandomProducts;
