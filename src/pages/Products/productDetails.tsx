import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FaHeart, FaInstagram, FaEnvelope, FaShoppingCart } from "react-icons/fa";
import { products } from "./products";
import RelatedProducts from "./RelatedProd";
import { Link } from "react-router-dom"; // For linking to the Cart page

const ProductDetail: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const product = products.find((p) => p.id.toString() === productId);

  if (!product) return <div className="container mx-auto">Product not found</div>;

  const [selectedImage, setSelectedImage] = useState(product.images[0]);
  const [cart, setCart] = useState<any[]>([]);

  // Load cart from localStorage when the component mounts
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  const addToCart = () => {
    // Check if the product already exists in the cart
    const existingItem = cart.find((item) => item.id === product.id);
    let updatedCart;
    if (existingItem) {
      // Update quantity if product already in cart
      updatedCart = cart.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    } else {
      // Add new product with quantity 1
      updatedCart = [...cart, { ...product, quantity: 1 }];
    }

    // Update cart state and localStorage
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  // Calculate total items in the cart
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <>
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          {/* Left: Product Images */}
          <div className="flex flex-col items-center md:w-1/2 space-y-4">
            <div className="flex flex-wrap gap-4 justify-center">
              {product.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Product Image ${index + 1}`}
                  className={`w-24 h-24 object-cover rounded-md cursor-pointer ${
                    selectedImage === image ? "border-2 border-black" : ""
                  }`}
                  onClick={() => setSelectedImage(image)}
                />
              ))}
            </div>
            <div className="mt-4">
              <img
                src={selectedImage}
                alt={product.name}
                className="w-full h-96 object-cover rounded-lg shadow-lg transform transition duration-500 ease-in-out hover:scale-105"
              />
            </div>
          </div>

          {/* Right: Product Details */}
          <div className="md:w-1/2 space-y-6">
            <button
              className="text-white font-semibold text-sm bg-[#000] hover:bg-transparent hover:border-2 hover:border-black hover:text-black p-2 rounded-md"
              onClick={() => window.history.back()}
            >
              Back to Products
            </button>

            <h2 className="text-3xl font-thin text-gray-900">{product.name}</h2>
            <p className="text-xl text-red-600">₦{product.price}</p>
            <p className="text-sm text-gray-500 mb-4">{product.category}</p>

            <div className="space-y-4">
              <p className="font-medium text-gray-800">Description</p>
              <p className="text-gray-600">{product.description}</p>
            </div>

            <div className="space-y-4">
              <p className="font-medium text-gray-800">About Our Brand</p>
              <p className="text-gray-600">
                Our bespoke shoes are designed to offer unmatched comfort and style. We use
                high-quality materials to craft shoes that perfectly fit your feet. Whether
                you need elegant dress shoes or casual wear, our brand guarantees both luxury
                and durability. Customize your pair and experience the perfect balance of
                craftsmanship and style.
              </p>
            </div>

            {/* Add to Wishlist */}
            <div className="flex items-center space-x-4 mb-6">
              <button className="bg-white text-red-600 py-2 px-6 rounded-md border-2 border-red-600 hover:bg-red-600 hover:text-white transition-all duration-300 flex items-center space-x-2">
                <FaHeart />
                <span>Add to Wishlist</span>
              </button>
            </div>

            {/* Add to Cart */}
            <div className="flex items-center space-x-4 mb-6">
              <button
                onClick={addToCart}
                className="bg-red-600 text-white py-2 px-6 rounded-md hover:bg-red-700 transition-all duration-300 flex items-center space-x-2"
              >
                <FaShoppingCart />
                <span>Add to Cart</span>
              </button>
            </div>

            {/* Social Media Links */}
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/yourbrand"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-black"
              >
                <FaInstagram />
              </a>
              <a
                href="mailto:yourbrand@email.com"
                className="text-gray-700 hover:text-black"
              >
                <FaEnvelope />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Sticky Add to Cart Button with Counter */}
      <div className="fixed bottom-6 right-6 z-50">
        <Link to="/cart">
          <button
            className="relative p-5 rounded-full shadow-lg flex items-center transition-all duration-300 bg-red-600 text-white hover:bg-red-700"
          >
            <FaShoppingCart size={20} />
            {totalItems > 0 && (
              <span className="absolute top-0 right-0 text-xs font-semibold text-white bg-black rounded-full w-5 h-5 flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </button>
        </Link>
      </div>

      <RelatedProducts />
    </>
  );
};

export default ProductDetail;
