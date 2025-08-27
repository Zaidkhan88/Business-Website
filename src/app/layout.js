// app/layout.js
import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';

export const metadata = {
  title: {
    default: 'AK Valves - Certified Industrial Valve Manufacturer',
    template: '%s | AK Valves',
  },
  description:
    'Leading manufacturer and supplier of high-performance industrial valves including gate, ball, globe, butterfly, and check valves. Trusted by industries across India.',
  keywords: [
    'industrial valves',
    'valve manufacturer',
    'gate valves',
    'ball valves',
    'check valves',
    'butterfly valves',
    'valve supplier India',
    'AK Valves',
  ],
  openGraph: {
    title: 'AK Valves - Certified Industrial Valve Manufacturer',
    description:
      'Discover top-quality industrial valves from AK Valves. Trusted by oil & gas, power plants, and process industries.',
    url: 'https://yourdomain.com', // replace with your real domain
    siteName: 'AK Valves',
    images: [
      {
        url: '/images/og-image.jpg', // use an actual OG image
        width: 1200,
        height: 630,
        alt: 'Industrial Valves by AK Valves',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AK Valves - Trusted Industrial Valve Supplier',
    description: 'API/ASME-certified valve supplier in India. Request a quote today.',
    images: ['/images/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://yourdomain.com',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
