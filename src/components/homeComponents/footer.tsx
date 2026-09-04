import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import log from '../../assets/logo.png';


const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">

        {/* Brand & Social Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-12">
          <div className="text-center sm:text-left mb-6 sm:mb-0">
            <img src={log} alt="" width={200} />

            <p className="text-lg mt-2 text-red-400">
              Raised Right. Tastes Better.
            </p>
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
            <h3 className="text-2xl font-semibold mb-4 text-red-400">
              Stay Connected to the Ranch
            </h3>

            <p className="text-lg text-gray-400">
              Get ranch updates, new beef releases, recipes, cooking tips,
              and special offers delivered straight to your inbox.
            </p>
          </div>

          {/* Newsletter Form */}
          <form className="flex w-full sm:w-1/2 max-w-xl">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-l-md text-black focus:outline-none focus:ring-2 focus:ring-red-600"
            />

            <button
              type="submit"
              className="bg-red-600 text-white px-6 py-3 rounded-r-md hover:bg-red-700 transition duration-300"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Footer Links */}
        <div className="mt-12 border-t border-gray-700 pt-6 text-center">

          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Red Oak Ranch. All Rights Reserved.
          </p>

          <div className="mt-3">

            <Link
              to="/legal"
              className="text-gray-400 hover:text-white mx-2 text-sm"
            >
              Terms of Service
            </Link>

            <Link
              to="/legal"
              className="text-gray-400 hover:text-white mx-2 text-sm"
            >
              Privacy Policy
            </Link>

            <Link
              to="/legal"
              className="text-gray-400 hover:text-white mx-2 text-sm"
            >
              Refund Policy
            </Link>

            <Link
              to="/legal"
              className="text-gray-400 hover:text-white mx-2 text-sm"
            >
              Shipping Info
            </Link>

          </div>

          {/* Website Credit */}
          <div className="text-sm text-center mt-8">
            <p className="text-gray-400">
              Website created by{" "}
              <span className="text-gray-600">|</span>{" "}
              <a
                href="https://instagram.com/pawacode"
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-500 hover:text-red-400 transition"
              >
                @pawacode
              </a>
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;