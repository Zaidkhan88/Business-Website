import Link from 'next/link';
import { Menu, X, Phone, Mail } from 'lucide-react';
import MobileMenu from './MobileMenu'; // We'll extract the mobile menu to a client component
import Image from 'next/image';

const navLinks = [
  { name: 'Home', path: '/' },
  { 
    name: 'About Us', 
    path: '/about',
    dropdown: [
      
      { name: 'Who We Are', path: '/about#who-we-are' },
      { name: 'Vision & Mission', path: '/about#mission' },
      { name: 'What We Offer', path: '/about#what-we-offer' },
      { name: 'Why Choose Us', path: '/about#why-choose-us' },
      { name: 'Our Promise', path: '/about#our-promise' },
    ],
  },
  { name: 'Products', path: '/products' },
  // { name: 'Contact', path: '/contact' },
];

const Header = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/images/logovalve.png" 
            alt="AK Valves Logo" 
            className="h-10 w-10"
            width={40}
            height={40}
          />
          <span className="text-xl font-bold text-gray-800">AK Valves</span>
        </Link>

        {/* Desktop Nav + CTA */}
        <div className="hidden md:flex items-center space-x-8">
          <nav className="flex space-x-6 relative">
  {navLinks.map((link) => (
    <div key={link.name} className="group relative">
      <Link
        href={link.path}
        className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
      >
        {link.name}
      </Link>
      {link.dropdown && (
        <div className="absolute left-0 mt-2 w-48 bg-white border rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition">
          {link.dropdown.map((sublink) => (
            <Link
              key={sublink.name}
              href={sublink.path}
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
            >
              {sublink.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  ))}
</nav>
          <a href="mailto:akvalves.sales@gmail.com" className="text-gray-700 hover:text-blue-600">
      <Mail className="w-5 h-5" />
    </a>
          <div className="flex items-center space-x-4">
            <a href="tel:+919987972131" className="flex items-center text-gray-700 hover:text-blue-600">
              <Phone size={16} className="mr-1" /> +919987972131
            </a>
            <Link
              href="/contact"
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors font-medium"
            >
              Get a Quote
            </Link>
          </div>
        </div>

        {/* Mobile Menu Button (Client Component) */}
        <MobileMenu navLinks={navLinks} />
      </div>
    </header>
  );
};

export default Header;