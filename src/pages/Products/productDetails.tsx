import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { FaHeart, FaHome, FaInstagram, FaEnvelope } from "react-icons/fa";
import { products } from "./products";


const ProductDetail: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const product = products.find((p) => p.id.toString() === productId);

  if (!product) return <div className="container mx-auto">Product not found</div>;

  const [selectedImage, setSelectedImage] = useState(product.images[0]);

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
            <div className="flex items-center">
              <button
                className="text-white font-semibold text-sm bg-[#000] hover:bg-transparent hover:border-2 hover:border-black hover:text-black p-2 rounded-md"
                onClick={() => window.history.back()}
              >
                Back to Products
              </button>
            </div>

            <h2 className="text-3xl font-thin text-gray-900">{product.name}</h2>
            <p className="text-xl text-red-600">₦{product.price}</p>
            <p className="text-sm text-gray-500 mb-4">{product.category}</p>

            <div className="space-y-4">
              <p className="font-medium text-gray-800">Description</p>
              <p className="text-gray-600">{product.description}</p>

              <div className="space-y-2">
                <p className="font-medium text-gray-800">Size</p>
                <div className="flex gap-3">
                  {product.sizes?.map((size) => (
                    <button
                      key={size}
                      className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300 transition-all duration-200"
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <p className="font-medium text-gray-800">Quantity</p>
                <div className="flex items-center space-x-4">
                  <button
                    className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300 transition-all duration-200"
                  >
                    -
                  </button>
                  <span className="text-lg font-semibold">1</span>
                  <button
                    className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300 transition-all duration-200"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-4 mb-6">
              <button className="bg-white text-red-600 py-2 px-6 rounded-md border-2 border-red-600 hover:bg-red-600 hover:text-white transition-all duration-300 flex items-center space-x-2">
                <div className="inline mr-2">
                  <FaHeart />
                </div>
                <span>Add to Wishlist</span>
              </button>
            </div>

            <div className="space-y-4">
              <p className="font-medium text-gray-800">About Our Brand</p>
              <p className="text-gray-600">
                Our bespoke shoes are designed to offer unmatched comfort and style. We use high-quality materials to craft shoes that perfectly fit your feet. Whether you need elegant dress shoes or casual wear, our brand guarantees both luxury and durability. Customize your pair and experience the perfect balance of craftsmanship and style.
              </p>
            </div>

            {/* Social Media Links */}
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/yourbrand"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-black"
              >
                <div className="inline mr-2">
                  <FaInstagram />
                </div>
              </a>
              <a
                href="mailto:yourbrand@email.com"
                className="text-gray-700 hover:text-black"
              >
                <div className="inline mr-2">
                  <FaEnvelope />
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Sticky Home Button */}
        <div className="fixed bottom-6 right-6 z-50">
          <button
            className="bg-red-600 text-white p-5 rounded-full shadow-lg hover:bg-red-700 transition-all duration-300 flex items-center"
            onClick={() => window.location.href = "/"} // Redirect to homepage
          >
            <div className="inline">
              <FaHome />
            </div>
          </button>
        </div>
      </div>

      {/* Related Products Section */}
      <div className="container mx-auto px-4 py-12">
        <h3 className="text-2xl font-semibold text-gray-900 mb-6">Related Products</h3>
        
      </div>
    </>
  );
};

export default ProductDetail;
