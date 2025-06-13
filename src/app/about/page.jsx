// import  { Metadata } from 'next';

export const metadata = {
  title: 'About Us | Your Company Name',
  description: 'With 26+ years in the valve industry, we provide reliable industrial valves and build lasting customer relationships. Learn more about our journey.',
  keywords: ['industrial valves', 'valve supplier', 'Mumbai valve company', 'trusted valve distributor'],
};

const AboutUs = () => {
  return (
    <section className="px-6 py-12 bg-white text-gray-800 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-8">About Us</h1>

      <div className="prose lg:prose-xl mx-auto">
        <p className="mb-6">
          With roots in the valve industry that go back over twenty six years, we bring a wealth of experience, practical know-how, and a deep understanding of the market. What started as a humble local shop has steadily evolved — and today, we are proud to operate as a valve supplier based in Mumbai.
        </p>

        <p className="mb-6">
          Our core focus lies in offering a wide range of industrial valves from various trusted brands, catering to the diverse needs of our clients. While we currently serve the local market, our ambition is clear — to grow from a local presence to a recognized name across India, and eventually, beyond.
        </p>

        <p className="mb-6">
          At the heart of our business lies a simple promise: <strong>reliability and customer satisfaction</strong>. We strive to maintain long-term relationships by ensuring transparent communication, genuine products, and dependable service.
        </p>

        <p className="mb-6">
          Though we are early in our formal journey, we carry forward decades of goodwill and trust. We believe in clean work, solid connections, and growing through integrity and commitment — from the shop floor to the customer's hands.
        </p>
      </div>

      <div className="mt-10 text-center">
        <blockquote className="italic text-xl text-gray-600 max-w-2xl mx-auto">
          &ldquo;We don&rsquo;t just supply valves — we build trust, one order at a time.&rdquo;
        </blockquote>
      </div>
    </section>
  );
};

export default AboutUs;