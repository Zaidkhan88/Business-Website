import { Metadata } from 'next';
import QuoteForm from '../components/QuoteForm';
import { Phone, Mail, MessageCircle } from 'lucide-react';

// app/contact/page.tsx
// import type { Metadata } from "next";

export const metadata = {
  title: "Contact Us | AK Valves",
  description:
    "Get in touch with AK Valves for high-quality industrial valves including gate, ball, and check valves. Reach us via phone, email, or our contact form.",
  keywords: [
    "AK Valves contact",
    "industrial valves supplier",
    "ball valves",
    "gate valves",
    "check valves",
    "globe valves",
    "safety valves",
    "strainers",
    "bluedown valves",
    "cryogenic valves",
    "bellow seal valves",
    "dual plate check valves",
    "valve manufacturer",
  ],
  authors: [{ name: "AK Valves" }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "https://www.akvalves.com/contact",
  },
  openGraph: {
    title: "Contact AK Valves",
    description:
      "Reach out to AK Valves for expert valve solutions. Contact us via phone, email, or form.",
    url: "https://www.akvalves.com/contact",
    siteName: "AK Valves",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact AK Valves",
    description:
      "Get in touch with AK Valves for premium industrial valves and support.",
    creator: "@akvalves",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  category: "Industrial Valves",
};


export default function ContactPage() {
  return (
    <div className="p-6 bg-white shadow-md mx-auto max-w-5xl rounded-lg">
      <h1 className="text-3xl font-bold text-gray-800 text-center">Contact Us</h1>
      <p className="mt-4 text-gray-600 text-center max-w-2xl mx-auto">
        We’d love to hear from you. Whether you need product details, pricing, or bulk order support, 
        our team ensures quick replies. Get in touch using the options below.
      </p>

      {/* Contact Info */}
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
        <div className="flex flex-col items-center bg-gray-50 p-6 rounded-xl shadow-sm">
          <Phone className="w-6 h-6 text-blue-600 mb-2" />
          <h3 className="font-semibold text-gray-700">Call / WhatsApp</h3>
          <a href="tel:+919987972131" className="text-blue-600 hover:underline">
            +91 99879 72131
          </a>
          <a
            href="https://wa.me/919987972131?text=Hello%20AK%20Valves%2C%20I%27d%20like%20to%20enquire%20about%20valves."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-green-600 mt-1 hover:underline"
          >
            <MessageCircle className="w-4 h-4" /> Chat on WhatsApp
          </a>
          <p className="text-sm text-gray-500 mt-1">Contact Person: Ayan Khan</p>
        </div>

        <div className="flex flex-col items-center bg-gray-50 p-6 rounded-xl shadow-sm">
          <Mail className="w-6 h-6 text-blue-600 mb-2" />
          <h3 className="font-semibold text-gray-700">Email Us</h3>
          <a
            href="mailto:akvalves.sales@gmail.com"
            className="text-blue-600 hover:underline"
          >
            akvalves.sales@gmail.com
          </a>
          <p className="text-sm text-gray-500 mt-1">Quick responses within 24 hrs</p>
        </div>

        <div className="flex flex-col items-center bg-gray-50 p-6 rounded-xl shadow-sm">
          <h3 className="font-semibold text-gray-700 mb-1">Working Hours</h3>
          <p className="text-gray-600">Mon - Sat</p>
          <p className="text-gray-600">9:30 AM – 7:00 PM</p>
        </div>
      </div>

      {/* Quote Form */}
      <div className="mt-12">
        <QuoteForm />
      </div>
    </div>
  );
}
