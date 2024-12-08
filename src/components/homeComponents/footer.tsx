import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        {/* Brand and Logo Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-12">
          <div className="text-center sm:text-left mb-6 sm:mb-0">
            
            <p className="text-lg mt-2 text-red-400">Stylish & Comfortable Footwear for All</p>
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-6">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-red-600 transition duration-300"
            >
              <FaFacebookF size={24} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-red-600 transition duration-300"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-red-600 transition duration-300"
            >
              <FaTwitter size={24} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-red-600 transition duration-300"
            >
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="flex flex-col sm:flex-row items-center justify-between mb-12">
          <div className="sm:w-1/2 text-center sm:text-left mb-6 sm:mb-0">
            <h3 className="text-2xl font-semibold mb-4 text-red-400">Join Our Newsletter</h3>
            <p className="text-lg text-gray-400">Get the latest updates, deals, and offers directly to your inbox.</p>
          </div>

          {/* Newsletter Form */}
          <form className="flex flex-col sm:flex-row items-center w-full sm:w-1/2">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-l-md text-black focus:outline-none focus:ring-2 focus:ring-red-600"
            />
            <button
              type="submit"
              className="bg-red-600 text-white px-6 py-2 rounded-r-md mt-2 sm:mt-0 sm:ml-2 hover:bg-red-700 transition duration-300"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Footer Links */}
        <div className="mt-12 border-t border-gray-700 pt-6 text-center">
          <p className="text-gray-400 text-sm">&copy; 2024 AdoreTheBrand. All Rights Reserved.</p>
          <div className="mt-2">
            <a href="/terms" className="text-gray-400 hover:text-white mx-2 text-sm">
              Terms of Service
            </a>
            <a href="/privacy" className="text-gray-400 hover:text-white mx-2 text-sm">
              Privacy Policy
            </a>
            <a href="/refunds" className="text-gray-400 hover:text-white mx-2 text-sm">
              Refund Policy
            </a>
            <a href="/shipping" className="text-gray-400 hover:text-white mx-2 text-sm">
              Shipping Info
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
