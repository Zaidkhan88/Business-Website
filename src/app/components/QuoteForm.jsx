"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Loader2 } from "lucide-react";

export default function QuoteForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData({
    ...formData,
    [name]: value, // <-- update only the field that changed
  });
};


  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({ name: "", email: "", phone: "", message: "" });
    }, 1500);
  };

  return (
    <Card className="max-w-lg mx-auto shadow-xl rounded-2xl">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center text-gray-800">
          Get a Free Quote
        </CardTitle>
        <p className="text-sm text-gray-500 text-center">
          Fill in the details below and we’ll get back to you shortly.
        </p>
      </CardHeader>

      <CardContent>
        {submitted ? (
          <div className="text-center py-6">
            <p className="text-green-600 font-semibold text-lg">
              ✅ Thank you! Your request has been received.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              required
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
            />
            <Input
              required
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
            />
            <Input
              required
              type="tel"
              name="phone"
              placeholder="Your Phone Number"
              value={formData.phone}
              onChange={handleChange}
            />
            <Textarea
              required
              name="message"
              placeholder="Tell us about your requirements..."
              rows={4}
              value={formData.message}
              onChange={handleChange}
            />
            <Button
              type="submit"
              className="w-full rounded-xl"
              disabled={loading}
            >
              {loading ? (
                <Loader2 className="animate-spin mr-2 h-4 w-4" />
              ) : (
                "Request Quote"
              )}
            </Button>
          </form>
        )}
      </CardContent>
    </Card>
  );
}




// 'use client'
// import React, { useState } from "react";
// import toast, { Toaster } from "react-hot-toast";

// const QuoteForm = () => {
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     const form = e.target;
//     const formData = {
//       name: form.name.value,
//       email: form.email.value,
//       phone: form.phone.value,
//       company: form.company.value,
//       message: form.message.value,
//     };

//     try {
//       const res = await fetch('/api/quote', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(formData),
//       });

//       const result = await res.json();

//       if (result.success) {
//         toast.success("Quote sent successfully!");
//         form.reset();
//       } else {
//         toast.error("Failed to send quote.");
//       }
//     } catch (err) {
//       console.error(err);
//       toast.error("Something went wrong. Please try again.");
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <section className="py-10 px-4 sm:px-6 lg:px-8 bg-white">
//       <Toaster position="top-right" />
//       <div className="max-w-4xl mx-auto bg-gray-50 p-6 md:p-8 rounded-lg shadow-md border border-gray-200">
//         <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-gray-800">
//           Ask for a Quote
//         </h2>

//         <form onSubmit={handleSubmit} className="space-y-6">
//           <input type="hidden" name="_redirect" value="https://your-site.com/thank-you" />
//           <input type="hidden" name="_captcha" value="false" />

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             <input type="text" name="name" required placeholder="Your Name" className="input" />
//             <input type="email" name="email" required placeholder="Your Email" className="input" />
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             <input type="tel" name="phone" placeholder="Phone Number" className="input" />
//             <input type="text" name="company" placeholder="Company Name" className="input" />
//           </div>

//           <textarea
//             name="message"
//             required
//             rows="5"
//             placeholder="What product or service do you need?"
//             className="input"
//           ></textarea>

//           <div className="flex justify-center">
//             <button
//               type="submit"
//               disabled={isSubmitting}
//               className={`px-8 py-3 font-medium rounded-md transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
//                 isSubmitting
//                   ? 'bg-blue-300 cursor-not-allowed'
//                   : 'bg-blue-600 hover:bg-blue-700 text-white'
//               }`}
//             >
//               {isSubmitting ? "Sending..." : "Submit Quote Request"}
//             </button>
//           </div>
//         </form>
//       </div>
//     </section>
//   );
// };

// export default QuoteForm;
