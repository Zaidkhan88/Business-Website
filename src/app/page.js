// app/page.js
// app/page.js
export const metadata = {
  title: "Industrial Valves Manufacturer | High-Quality API & ASME Valves",
  description:
    "Leading manufacturer of gate, globe, ball, butterfly, and check valves. API and ASME-certified products for oil & gas, power plants, and more.",
  keywords: [
    "Industrial valves manufacturer",
    "Gate valves supplier",
    "Ball valves API 600",
    "ASME B16.34 valves",
    "Check valves manufacturer",
    "Butterfly valves exporter",
    "Globe valves India",
    "Valve manufacturer oil and gas",
    "High pressure valves",
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Industrial Valve Solutions | Certified Valve Manufacturer",
    description:
      "Browse our range of high-performance industrial valves for oil & gas, water treatment, and power plants.",
    url: "https://yourdomain.com",
    siteName: "Your Brand Name",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Industrial Valves",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Top Industrial Valve Manufacturer",
    description:
      "Certified gate, globe, and check valves for critical applications.",
    images: ["/images/og-image.jpg"],
  },
  alternates: {
    canonical: "https://yourdomain.com",
  },
};

import HeroCarousel from './components/HeroCarousel';

import VisionMissionSection from './components/VisionMissionSection';
import ProductRange from './components/ProductRange';
import WhyChooseUs from './components/WhyChooseUs';
import AboutPreview from './components/Aboutpreview';

export default function Home() {
  return (
    <main>
      <HeroCarousel/>
     <AboutPreview/>
     <WhyChooseUs/>
     <ProductRange/>
     {/* <VisionMissionSection/> */}
      {/* Add other sections */}
    </main>
  );
}