import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { HiMenu, HiX } from 'react-icons/hi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Skills', href: '#skills' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <a href="#home" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-primary-600">&lt;/&gt;</span>
            <span className="text-xl font-bold text-gray-800">Lucien</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-600 hover:text-primary-600 transition-colors duration-200 font-medium"
              >
                {link.name}
              </a>
            ))}
            <div className="flex items-center space-x-4 ml-4">
              <a href="https://github.com/allaingaye" target="_blank" rel="noopener noreferrer">
                <FaGithub className="w-5 h-5 text-gray-600 hover:text-primary-600 transition-colors" />
              </a>
              <a href="https://linkedin.com/in/allaingaye" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="w-5 h-5 text-gray-600 hover:text-primary-600 transition-colors" />
              </a>
              <a href="mailto:lucienallingaye@gmail.com">
                <FaEnvelope className="w-5 h-5 text-gray-600 hover:text-primary-600 transition-colors" />
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isOpen ? <HiX className="w-6 h-6" /> : <HiMenu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-white shadow-lg`}>
        <div className="px-4 py-2 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block px-3 py-2 text-gray-600 hover:text-primary-600 hover:bg-gray-50 rounded-lg transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <div className="flex space-x-4 px-3 py-2">
            <a href="https://github.com/allaingaye" target="_blank" rel="noopener noreferrer">
              <FaGithub className="w-5 h-5 text-gray-600 hover:text-primary-600" />
            </a>
            <a href="https://www.linkedin.com/in/lucien-alla%C3%AFngaye/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="w-5 h-5 text-gray-600 hover:text-primary-600" />
            </a>
            <a href="mailto:lucienallingaye@gmail.com">
              <FaEnvelope className="w-5 h-5 text-gray-600 hover:text-primary-600" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;