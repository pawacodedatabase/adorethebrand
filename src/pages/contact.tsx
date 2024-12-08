import React from "react";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa";

const ContactPage: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-2xl font-semibold text-center mb-6 text-gray-800">Thank You!</h1>
        <p className="text-center text-gray-600 mb-4">
          Your payment confirmation has been sent successfully.
        </p>
        <p className="text-center text-gray-800 mb-4">
          Please send your payment receipt via WhatsApp to complete the process and subscribe to our newsletter for updates.
        </p>

        {/* WhatsApp Button */}
        <a
          href="https://wa.me/+2347036038122"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full bg-green-600 text-white py-2 rounded-lg flex items-center justify-center space-x-2 mb-4"
        >
          <FaWhatsapp size={20} />
          <span>Send Receipt via WhatsApp</span>
        </a>

        {/* Newsletter Subscription */}
        <form className="mt-6 space-y-4">
          <h2 className="text-lg font-semibold text-gray-800">Subscribe to Newsletter</h2>
          <div className="relative">
            <input
              type="email"
              placeholder="Enter your email"
              required
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-red-500">
              <FaEnvelope />
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-red-600 text-white py-2 rounded-lg font-semibold hover:bg-red-700"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;