import React from "react";
import { Product } from "./products";
import { Link } from "react-router-dom";

const RelatedProducts: React.FC<{ products: Product[] }> = ({ products }) => {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Related Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
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
            <p className="text-sm text-gray-500">{product.description}</p>
            <p className="text-xl font-semibold text-red-600">₦{product.price}</p>
            <Link
              to={`/product/${product.id}`}
              className="mt-4 bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800"
            >
              View Product
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
