const LegalTerms = () => {
  return (
    <div className="bg-gray-50 py-10 px-4 lg:px-20">
      <div className="max-w-5xl mx-auto">

        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Terms and Conditions
        </h1>

        <p className="text-gray-600 mb-4">
          Welcome to <strong>Red Oak Ranch</strong>! By accessing or using our
          website, placing an order, or purchasing our products, you agree to
          the following terms and conditions. Please read them carefully.
        </p>

        <div className="space-y-8">

          {/* Section 1 */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
              1. Introduction
            </h2>

            <p className="text-gray-600">
              These Terms and Conditions ("Terms") govern your use of the Red
              Oak Ranch website and your purchase of our beef products and
              related services. By accessing our website or placing an order,
              you agree to be bound by these Terms. If you do not agree, please
              refrain from using our website or placing an order.
            </p>
          </div>

          {/* Section 2 */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
              2. Products and Availability
            </h2>

            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>
                All beef products are subject to availability.
              </li>

              <li>
                Product descriptions, weights, photographs, and packaging may
                vary slightly from what is displayed on the website.
              </li>

              <li>
                Product prices may change at any time without prior notice.
              </li>

              <li>
                Actual product weights may vary from the estimated weight
                displayed on the website.
              </li>

              <li>
                Red Oak Ranch reserves the right to limit quantities or
                discontinue products at any time.
              </li>
            </ul>
          </div>

          {/* Section 3 */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
              3. Orders and Payment
            </h2>

            <p className="text-gray-600 mb-3">
              By placing an order through our website, you agree that the
              information provided is accurate and complete. Orders are
              subject to acceptance and product availability.
            </p>

            <p className="text-gray-600 mb-3">
              Payment must be completed according to the payment options
              available at checkout.
            </p>

            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Bank Transfers</li>
              <li>Mobile Payment Options</li>
              <li>Other payment methods displayed at checkout</li>
            </ul>
          </div>

          {/* Section 4 */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
              4. Order Processing and Delivery
            </h2>

            <p className="text-gray-600">
              Orders are processed after payment has been confirmed. Delivery
              times may vary depending on product availability, preparation
              requirements, delivery location, and carrier schedules.
            </p>

            <p className="text-gray-600 mt-3">
              Shipping or delivery fees will be displayed during checkout
              where applicable. Customers are responsible for providing an
              accurate delivery address and ensuring that someone is available
              to receive the order when required.
            </p>
          </div>

          {/* Section 5 */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
              5. Perishable Products, Returns and Refunds
            </h2>

            <p className="text-gray-600 mb-3">
              Because beef products are perishable goods, returns may be
              limited for food-safety reasons. Customers should inspect their
              order promptly upon delivery.
            </p>

            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>
                Contact Red Oak Ranch as soon as possible if an order arrives
                damaged, incorrect, or in an unacceptable condition.
              </li>

              <li>
                Refund or replacement requests may require photographs or
                other information about the order.
              </li>

              <li>
                Refunds and replacements are handled on a case-by-case basis
                in accordance with applicable consumer and food-safety laws.
              </li>

              <li>
                We cannot accept returns of products that have been improperly
                stored or handled after delivery.
              </li>
            </ul>
          </div>

          {/* Section 6 */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
              6. Safe Handling and Storage
            </h2>

            <p className="text-gray-600">
              Customers are responsible for properly storing and handling beef
              products after delivery. Follow the storage, refrigeration,
              freezing, thawing, and cooking instructions provided with your
              order or product packaging.
            </p>

            <p className="text-gray-600 mt-3">
              Red Oak Ranch recommends following applicable food-safety
              guidance when preparing and consuming beef.
            </p>
          </div>

          {/* Section 7 */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
              7. Use of Website
            </h2>

            <p className="text-gray-600">
              You agree not to use our website for unlawful purposes,
              interfere with its operation, attempt to gain unauthorized
              access, or violate the intellectual property rights of Red Oak
              Ranch or third parties.
            </p>
          </div>

          {/* Section 8 */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
              8. Privacy
            </h2>

            <p className="text-gray-600">
              Information submitted through our website may be used to process
              orders, provide customer support, communicate with customers,
              and improve our services. Please review our Privacy Policy for
              additional information about how customer information is
              handled.
            </p>
          </div>

          {/* Section 9 */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
              9. Contact Us
            </h2>

            <p className="text-gray-600">
              If you have questions about these Terms, an order, or our
              products, please contact Red Oak Ranch:
              <br />
              {/* <strong>Email:</strong>{" "}
              <a
                href="mailto:info@redoakranch.com"
                className="text-red-500 font-bold"
              >
                info@redoakranch.com
              </a>

              <br />

              <strong>Phone:</strong>{" "}
              <a
                href="tel:+1234567890"
                className="text-red-500 font-bold"
              >
                +1 (234) 567-890
              </a> */}
            </p>
          </div>

        </div>

        <p className="text-gray-500 mt-8">
          Last updated:{" "}
          <span className="font-semibold">
            September 4, 2023
          </span>
        </p>

      </div>
    </div>
  );
};

export default LegalTerms;
