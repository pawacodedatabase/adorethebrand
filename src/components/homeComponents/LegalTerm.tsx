

const LegalTerms = () => {
  return (
    <div className="bg-gray-50 py-10 px-4 lg:px-20">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Terms and Conditions</h1>
        <p className="text-gray-600 mb-4">
          Welcome to <strong>Adore the Brand</strong>! By accessing and using our website, you agree to the following
          terms and conditions. Please read them carefully.
        </p>

        <div className="space-y-8">
          {/* Section 1: Introduction */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">1. Introduction</h2>
            <p className="text-gray-600">
              These Terms and Conditions ("Terms") govern your use of our website, products, and services. By accessing
              or using our website, you agree to be bound by these Terms. If you do not agree, you must refrain from
              using our website.
            </p>
          </div>

          {/* Section 2: Products and Services */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">2. Products and Services</h2>
            <ul className="list-disc list-inside text-gray-600">
              <li>All products are subject to availability and customization preferences.</li>
              <li>We reserve the right to update product pricing and features without prior notice.</li>
              <li>Colors and materials displayed may vary slightly due to screen differences.</li>
            </ul>
          </div>

          {/* Section 3: Payment Terms */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">3. Payment Terms</h2>
            <p className="text-gray-600">
              Payments must be completed before production begins. We accept the following payment methods:
            </p>
            <ul className="list-disc list-inside text-gray-600">
              
              <li>Bank Transfers</li>
              <li>Mobile Payment Options</li>
            </ul>
          </div>

          {/* Section 4: Order Processing and Delivery */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">4. Order Processing and Delivery</h2>
            <p className="text-gray-600">
              Custom orders typically take <strong>7 working days</strong> for production and delivery. Delivery times vary
              based on your location. Shipping fees will be calculated at checkout.
            </p>
          </div>

          {/* Section 5: Returns and Refunds */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">5. Returns and Refunds</h2>
            <p className="text-gray-600">
              Due to the bespoke nature of our products, customized items cannot be returned or refunded unless there is
              a manufacturing defect. For standard items:
            </p>
            <ul className="list-disc list-inside text-gray-600">
              <li>Returns are accepted within 7 days of delivery.</li>
              <li>Items must be unworn and in their original packaging.</li>
              <li>Return shipping fees are the customer's responsibility unless the item is defective.</li>
            </ul>
          </div>

          {/* Section 6: Use of Website */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">6. Use of Website</h2>
            <p className="text-gray-600">
              You agree not to use our website for unlawful purposes or violate intellectual property rights. Any
              unauthorized use of our website may result in termination of your access.
            </p>
          </div>

          {/* Section 7: Contact Us */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">7. Contact Us</h2>
            <p className="text-gray-600">
              For questions about these Terms, please contact us at:
              <br />
              <strong>Email:</strong> <a
          href="mailto:adore_footies@yahoo.com"
          className="text-red-500 font-bold"
        >
          adore_footies@yahoo.com
        </a>
              <br />
              <strong>Phone:</strong>   <a
          href="tel:+2349086471660"
          className="text-red-500 font-bold"
        >
          +2349086471660
        </a>
            </p>
          </div>
        </div>

        <p className="text-gray-500 mt-8">
          Last updated: <span className="font-semibold">December 18, 2024</span>
        </p>
      </div>
    </div>
  );
};

export default LegalTerms;
