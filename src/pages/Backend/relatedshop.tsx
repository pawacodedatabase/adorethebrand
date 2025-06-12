import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const JSON_BIN_ID = "67e547978561e97a50f3f013";
const API_KEY = "$2a$10$M/z2e.cKX1SUsOT62D4pk.gbhiuJhRx0u3VzNAe.DsTPIHHAQE6Zu";
const BASE_URL = `https://api.jsonbin.io/v3/b/${JSON_BIN_ID}`;
const EXCHANGE_RATE = 0.0013;

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  images: string[];
  category: "male" | "female" | "unisex";
  sizes: string[];
  onSale?: true;
  originalPrice?: number;
}

const RelatedShop: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [featured, setFeatured] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [currency, setCurrency] = useState<"NGN" | "USD">("NGN");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(BASE_URL, {
          headers: { "X-Master-Key": API_KEY },
        });
        const allProducts = response.data.record.products || [];
        setProducts(allProducts);
        console.log(setCurrency)

        // Select 5 random products for featured
        const shuffled = [...allProducts].sort(() => 0.5 - Math.random());
        setFeatured(shuffled.slice(0, 5));
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const convertPrice = (price: number) => {
    return currency === "USD" ? price * EXCHANGE_RATE : price;
  };

  return (
    <div className="max-w-5xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-3xl font-semibold text-center mb-4">Featured Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
        {featured.map((product) => (
          <div key={product.id} className="border p-4 rounded bg-gray-100 relative">
            {product.onSale && (
              <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                ON SALE
              </span>
            )}
            <img
              src={product.images[0]}
              alt={product.name}
              className="w-full h-40 object-cover rounded-md"
            />
            <h4 className="text-xl font-bold mt-3">{product.name}</h4>
            <p className="text-sm text-gray-600 mt-2">
              {product.description.split(" ").slice(0, 20).join(" ")}...
            </p>
            <p className="font-semibold mt-2 text-red-500 text-2xl">
              {new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: currency,
              }).format(convertPrice(product.price))}
            </p>
            <Link
              to={`/shop/${product.id}`}
              className="block bg-black text-white text-center mt-3 py-2 rounded"
            >
              View Product
            </Link>
          </div>
        ))}
      </div>

      <div className="text-center mb-8">
        <Link to={'/shop'}>
        
        <p className="bg-black text-white px-6 py-2 rounded">
          View All Products
        </p></Link>
      </div>

      <h2 id="all-products" className="text-3xl font-semibold text-center mb-4">
        More Products
      </h2>
      <p className="text-sm text-center mb-3 animate-bounce">
        You can't add these products to cart, just order directly
      </p>

      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {Array(4)
            .fill(null)
            .map((_, index) => (
              <div key={index} className="border p-4 rounded bg-gray-100 animate-pulse">
                <div className="w-full h-40 bg-gray-300 rounded-md"></div>
                <div className="mt-3 h-4 bg-gray-300 rounded w-3/4"></div>
                <div className="mt-2 h-3 bg-gray-300 rounded w-1/2"></div>
                <div className="mt-2 h-3 bg-gray-300 rounded w-1/3"></div>
              </div>
            ))}
        </div>
      ) : products.length === 0 ? (
        <p className="text-gray-500 text-center">No products available.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {products.map((product) => (
            <div key={product.id} className="border p-4 rounded bg-gray-100 relative">
              {product.onSale && (
                <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                  ON SALE
                </span>
              )}
              <img
                src={product.images[0]}
                alt={product.name}
                className="w-full h-40 object-cover rounded-md"
              />
              <h4 className="text-xl font-bold mt-3">{product.name}</h4>
              <p className="text-sm text-gray-600 mt-2">
                {product.description.split(" ").slice(0, 20).join(" ")}...
              </p>
              <p className="font-semibold mt-2 text-red-500 text-2xl">
                {new Intl.NumberFormat("en-US", {
                  style: "currency",
                  currency: currency,
                }).format(convertPrice(product.price))}
              </p>
              <Link
                to={`/shop/${product.id}`}
                className="block bg-black text-white text-center mt-3 py-2 rounded"
              >
                View Product
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RelatedShop;
