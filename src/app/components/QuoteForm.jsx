'use client'
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const QuoteForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.target;
    const formData = {
      name: form.name.value,
      email: form.email.value,
      phone: form.phone.value,
      company: form.company.value,
      message: form.message.value,
    };

    try {
      const res = await fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (result.success) {
        toast.success("Quote sent successfully!");
        form.reset();
      } else {
        toast.error("Failed to send quote.");
      }
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-10 px-4 sm:px-6 lg:px-8 bg-white">
      <Toaster position="top-right" />
      <div className="max-w-4xl mx-auto bg-gray-50 p-6 md:p-8 rounded-lg shadow-md border border-gray-200">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-gray-800">
          Ask for a Quote
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <input type="hidden" name="_redirect" value="https://your-site.com/thank-you" />
          <input type="hidden" name="_captcha" value="false" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input type="text" name="name" required placeholder="Your Name" className="input" />
            <input type="email" name="email" required placeholder="Your Email" className="input" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input type="tel" name="phone" placeholder="Phone Number" className="input" />
            <input type="text" name="company" placeholder="Company Name" className="input" />
          </div>

          <textarea
            name="message"
            required
            rows="5"
            placeholder="What product or service do you need?"
            className="input"
          ></textarea>

          <div className="flex justify-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`px-8 py-3 font-medium rounded-md transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                isSubmitting
                  ? 'bg-blue-300 cursor-not-allowed'
                  : 'bg-blue-600 hover:bg-blue-700 text-white'
              }`}
            >
              {isSubmitting ? "Sending..." : "Submit Quote Request"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default QuoteForm;
