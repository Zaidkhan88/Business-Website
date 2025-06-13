import React from "react";

const QuoteForm = () => {
  return (
    <section className="py-10 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto bg-gray-50 p-6 md:p-8 rounded-lg shadow-md border border-gray-200">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-gray-800">
          Ask for a Quote
        </h2>

        <form
          action="https://formsubmit.io/send/akvalves.sales@gmail.com"
          method="POST"
          className="space-y-6"
        >
          <input type="hidden" name="_redirect" value="https://your-site.com/thank-you" />
          <input type="hidden" name="_captcha" value="false" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <input
                type="text"
                name="name"
                required
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-md border placeholder-gray-600 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                required
                placeholder="Your Email"
                className="w-full px-4 py-3 rounded-md border placeholder-gray-600 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                className="w-full px-4 py-3 rounded-md border placeholder-gray-600 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <input
                type="text"
                name="company"
                placeholder="Company Name"
                className="w-full px-4 py-3 rounded-md border placeholder-gray-600 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          <div>
            <textarea
              name="message"
              required
              rows="5"
              placeholder="What product or service do you need?"
              className="w-full px-4 py-3 placeholder-gray-600 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            ></textarea>
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="px-8 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Submit Quote Request
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default QuoteForm;