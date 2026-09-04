import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
// import RandomProducts from "../Products/RelatedProd";
// import { FaWhatsapp } from "react-icons/fa";

const JSON_BIN_ID = "6a9ac0bdf5f4af5e296a0ae1";
const API_KEY = "$2a$10$M/z2e.cKX1SUsOT62D4pk.gbhiuJhRx0u3VzNAe.DsTPIHHAQE6Zu";
const BASE_URL = `https://api.jsonbin.io/v3/b/${JSON_BIN_ID}`;

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

const ShopDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [selectedImage, setSelectedImage] = useState<string>("");

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(BASE_URL, {
          headers: { "X-Master-Key": API_KEY },
        });
        const products: Product[] = response.data.record.products || [];

        const selectedProduct =
          products.find((p) => p.id === Number(id)) || null;
        setProduct(selectedProduct);

        // Set the first image as the default selected image
        if (selectedProduct) {
          setSelectedImage(selectedProduct.images[0]);
        }
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return (
      <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg animate-pulse">
        <div className="w-full h-64 bg-gray-300 rounded-md"></div>
        <div className="h-6 bg-gray-300 rounded w-3/4 mt-4"></div>
        <div className="h-4 bg-gray-300 rounded w-1/2 mt-2"></div>
        <div className="h-6 bg-gray-300 rounded w-1/4 mt-4"></div>
      </div>
    );
  }

  if (!product)
    return <p className="text-center text-red-500">Product not found.</p>;

  return (
    <>
      <div className="max-w-2xl mx-auto p-6 bg-white">
        <div className="space-y-4 mb-8">
          {" "}
          <p className="font-thin text-gray-800 text-center">
            How to Order This Product
          </p>{" "}
          <p className="text-gray-500 text-center p-3">
            {" "}
            This product cannot be added to your cart or wishlist. To make a
            purchase, please click the Email icon below to proceed with
            your order. {" "}
          </p>{" "}
        </div>

        {/* Main Image Display */}
        <img
          src={selectedImage}
          alt={product.name}
          className="w-full h-72 object-cover rounded-md border"
        />

        {/* Thumbnail Image Gallery */}
        <div className="flex gap-2 mt-4 overflow-x-auto">
          {product.images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Thumbnail ${index + 1}`}
              className={`w-20 h-20 object-cover rounded-md border cursor-pointer ${
                selectedImage === image
                  ? "border-2 border-black"
                  : "border-gray-300"
              }`}
              onClick={() => setSelectedImage(image)}
            />
          ))}
        </div>
        <button
          className="text-white font-semibold text-sm bg-black hover:bg-transparent hover:border-2 hover:border-black hover:text-black p-2 mt-5 mb-5"
          onClick={() => window.history.back()}
        >
          Back to Shop
        </button>

        {/* Product Info */}
        <h2 className="text-3xl font-thin text-gray-900 mb-3">
          {product.name}
        </h2>
                <p className="font-semibold mt-2 text-2xl flex items-center gap-3">
  <span className="text-red-500">
    {new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(product.price)}
  </span>

  {product.originalPrice != null && (
    <span className="text-gray-400 line-through text-lg">
      {new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(product.originalPrice)}
    </span>
  )}
</p>
        {/* <p className="text-sm text-center ">We are offering a  <span className="font-bold text-gray-500">20% discount, </span> so the price you will be paying is  <span className=" text-red-600">₦{product.originalPrice}</span></p> */}

        {/* <p className="text-sm text-gray-500 mb-4 mt-5">{product.category}</p> */}

     

        <div className="space-y-4 mt-5">
          <p className="font-thin text-gray-800 text-center">Description</p>
          <p className="text-gray-500 text-center p-3 ">
            {product.description}
          </p>
        </div>

     
      </div>


      {/* <Link
  to={`https://wa.me/+2349086471660?text=Hi,%20I'm%20interested%20in%20the%20${encodeURIComponent(
    product.name
  )}%20for%20₦${product.price}.`}
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-6 right-6 flex items-center gap-2 bg-green-500 text-white py-3 px-5 rounded-full shadow-lg hover:border-2 hover:border-black hover:bg-white hover:text-black transition duration-300"
>
  <FaWhatsapp size={24} />
  <span className="text-sm font-semibold">Contact Us</span>
</Link> */}

      {/* <RandomProducts /> */}
    </>
  );
};

export default ShopDetails;
