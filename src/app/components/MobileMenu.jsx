'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Menu, X, Phone, Mail } from 'lucide-react';

const MobileMenu = ({ navLinks }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const handleNav = (path) => {
    setMenuOpen(false);
    router.push(path);
  };

  return (
    <>
      {/* Toggle Button */}
      <button
        className="md:hidden text-gray-700 hover:text-blue-600 transition-colors"
        onClick={toggleMenu}
        aria-label="Toggle menu"
        aria-expanded={menuOpen}
      >
        {menuOpen ? <X size={26} /> : <Menu size={26} />}
      </button>

      {/* Dark Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-30"
          onClick={toggleMenu}
        />
      )}

      {/* Sliding Mobile Menu */}
      <div
        className={`md:hidden fixed top-0 left-0 h-full w-72 bg-white shadow-2xl z-40 transform ${
          menuOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out rounded-r-2xl`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-800">Menu</h2>
          <button
            onClick={toggleMenu}
            aria-label="Close menu"
            className="text-gray-600 hover:text-red-500"
          >
            <X size={22} />
          </button>
        </div>

        {/* Navigation Links */}
        <div className="px-6 py-4 space-y-4">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleNav(link.path)}
              className="block py-2 w-full text-left text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              {link.name}
            </button>
          ))}
        </div>

        {/* Contact & CTA */}
        <div className="px-6 py-4 border-t border-gray-200 space-y-3">
          <a
            href="tel:+919987972131"
            className="flex items-center text-gray-700 hover:text-blue-600 transition-colors"
          >
            <Phone size={18} className="mr-2" /> +91 99879 72131
          </a>
          <a
            href="mailto:akvalves.sales@gmail.com"
            className="flex items-center text-gray-700 hover:text-blue-600 transition-colors"
          >
            <Mail size={18} className="mr-2" /> akvalves.sales@gmail.com
          </a>
          <button
            onClick={() => handleNav('/contact')}
            className="block mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white text-center py-2.5 rounded-lg font-semibold shadow-md transition-all"
          >
            Get a Quote
          </button>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
