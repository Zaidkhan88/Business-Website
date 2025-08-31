// app/about/page.jsx

export const metadata = {
  title: "About Us | AK Valves - Trusted Industrial Valve Manufacturer",
  description:
    "AK Valves has been a trusted name in the industrial valve industry since 2004. We manufacture and supply gate, globe, ball, butterfly, and check valves across India and globally.",
  keywords: [
    "AK Valves",
    "about AK Valves",
    "valve dealer India",
    "industrial valves supplier",
    "gate valves",
    "ball valves",
    "check valves",
    "globe valves",
    "safety valves",
    "strainers",
    "bluedown valves",
    "cryogenic valves",
    "bellow seal valves",
    "dual plate check valves",
    "valve manufacturer",
    "butterfly valves",
    "Mumbai valve company",
    "valve distributor India",
    "valve supplier",
    "valve stockist",
  ],
  openGraph: {
    title: "About AK Valves - Industrial Valve Manufacturer in India",
    description:
      "Learn about AK Valves’ 20+ years of expertise in delivering high-quality industrial valves with a customer-first approach.",
    url: "https://yourdomain.com/about",
    siteName: "AK Valves",
    images: [
      {
        url: "/images/about-og.jpg", // optional, create one for About page
        width: 1200,
        height: 630,
        alt: "About AK Valves",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About AK Valves | Trusted Valve Supplier",
    description:
      "Discover AK Valves’ journey, mission, and why industries across India trust us for reliable valve solutions.",
    images: ["/images/about-og.jpg"],
  },
  alternates: {
    canonical: "https://yourdomain.com/about",
  },
};


import { Mail, Phone, ArrowRight } from "lucide-react";

export default function AboutUs() {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section id = 'contact-details' className="bg-gray-100 py-16 text-center">
        <h1 className="text-4xl font-bold mb-4">
          Reliable Industrial Valves, Trusted Since 2004
        </h1>
        <p className="text-lg max-w-2xl mx-auto">
          Delivering quality valves in various sizes and materials to industries
          across India and beyond.
        </p>
        <div className="mt-6 flex justify-center gap-4">
          <a
            href="mailto:akvalves.sales@gmail.com"
            className="px-6 py-3 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700 transition flex items-center gap-2"
          >
            <Mail size={18} /> Email Us
          </a>
          <a
            href="tel:+919987972131"
            className="px-6 py-3 bg-green-600 text-white rounded-xl shadow hover:bg-green-700 transition flex items-center gap-2"
          >
            <Phone size={18} /> Call Us
          </a>
          <button className="px-6 py-3 bg-orange-600 text-white rounded-xl shadow hover:bg-orange-700 transition flex items-center gap-2">
            Request a Quote <ArrowRight size={18} />
          </button>
        </div>
      </section>

      {/* Who We Are */}
      <section id = 'who-we-are' className="py-16 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-4">Who We Are</h2>
        <p className="text-lg leading-relaxed">
          Since 2004, AK Valves has been dedicated to supplying industries with dependable valve solutions. Based in Mumbai, we combine decades of expertise with a commitment to quality and service, making us a trusted partner for businesses across sectors.
        </p>
      </section>

      {/* Mission */}
      <section id = 'mission' className="bg-gray-50 py-16 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
        <p className="text-lg max-w-3xl mx-auto">
          Our mission is simple — <b>
            to supply valves that ensure safety, efficiency, and durability
          </b>{" "}
          across industries. We believe in building long-term partnerships with
          our clients by consistently delivering products that meet global
          standards.
        </p>
      </section>

      {/* What We Offer */}
      <section id = 'what-we-offer' className="py-16 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-8">What We Offer</h2>
        <ul className="grid md:grid-cols-2 gap-6 text-left">
          <li className="p-4 bg-gray-100 rounded-xl shadow">
            Ball Valves (Soft & Metal Seated)
          </li>
          <li className="p-4 bg-gray-100 rounded-xl shadow">
            Gate, Globe & Check Valves
          </li>
          <li className="p-4 bg-gray-100 rounded-xl shadow">
            Butterfly Valves
          </li>
          <li className="p-4 bg-gray-100 rounded-xl shadow">
            Strainers (Y-Type, Basket Type)
          </li>
          <li className="p-4 bg-gray-100 rounded-xl shadow">
            Safety Relief Valves & Flush Bottom Valves
          </li>
        </ul>
        <p className="mt-6 text-lg">
          Available in <b>Cast Iron, Carbon Steel, Stainless Steel, Alloy
          Steel</b> and in <b>various sizes & pressure ratings</b> to suit
          diverse industrial requirements.
        </p>
      </section>

      {/* Why Choose Us */}
      <section id = 'why-choose-us' className="bg-gray-50 py-16 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-8">Why Choose Us</h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {[
            "20+ Years of Experience",
            "Strong Supplier Network",
            "Quality Assurance & Testing",
            "Customer-Centric Service",
            "On-Time Delivery",
            "Competitive Pricing",
          ].map((point, i) => (
            <div
              key={i}
              className="p-4 bg-white rounded-xl shadow text-lg font-medium"
            >
              {point}
            </div>
          ))}
        </div>
      </section>

      {/* Our Promise */}
      <section id = 'our-promise' className="py-16 px-6 text-center max-w-3xl mx-auto">
        <h2 className="text-3xl font-semibold mb-4">Our Promise</h2>
        <p className="text-lg">
          At <b>AK Valves</b>, we don’t just deliver valves —{" "}
          <b>we deliver trust</b>. Whether you’re a small business or a large
          enterprise, our promise is to provide the right product, at the right
          time, with the right support.
        </p>
      </section>

      {/* Final CTA */}
      <section className="bg-blue-600 py-16 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">Get In Touch With Us</h2>
        <p className="text-lg mb-6">
          Have a requirement? Let us help you with the best valve solutions.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <a
            href="mailto:akvalves.sales@gmail.com"
            className="px-6 py-3 bg-white text-blue-600 rounded-xl shadow hover:bg-gray-100 transition flex items-center gap-2"
          >
            <Mail size={18} /> akvalves.sales@gmail.com
          </a>
          <a
            href="tel:+919876543210"
            className="px-6 py-3 bg-white text-blue-600 rounded-xl shadow hover:bg-gray-100 transition flex items-center gap-2"
          >
            <Phone size={18} /> +91 9987972131
          </a>
          <button className="px-6 py-3 bg-orange-500 text-white rounded-xl shadow hover:bg-orange-600 transition flex items-center gap-2">
            Request a Quote <ArrowRight size={18} />
          </button>
        </div>
      </section>
    </div>
  );
}
