'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Menu, X, Phone } from 'lucide-react';

const MobileMenu = ({ navLinks }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  const handleNav = (path) => {
    setMenuOpen(false);
    setTimeout(() => {
      router.push(path);
    }, 200); // small delay for closing animation
  };

  return (
    <>
      <button
        className="md:hidden text-gray-700"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        {menuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <div
        className={`md:hidden fixed inset-0 bg-white z-40 transform ${
          menuOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out`}
        style={{ top: '64px' }}
      >
        <div className="px-6 py-4 space-y-4">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleNav(link.path)}
              className="block py-2 text-gray-700 hover:text-blue-600 font-medium text-left w-full"
            >
              {link.name}
            </button>
          ))}

          <div className="pt-4 border-t border-gray-200">
            <a
              href="tel:+919987972131"
              className="flex items-center py-2 text-gray-700 hover:text-blue-600"
            >
              <Phone size={16} className="mr-2" /> Call Us
            </a>
            <button
              onClick={() => handleNav('/contact')}
              className="block mt-2 bg-blue-600 text-white text-center py-2 rounded-md font-medium w-full"
            >
              Request Quote
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
