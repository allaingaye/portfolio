import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaHeart } from 'react-icons/fa';
import { socialLinks, personalInfo } from '../data/data';

const Footer = () => {
  // Direct mapping without getIcon function
  const iconMap = {
    Github: FaGithub,
    Linkedin: FaLinkedin,
    Twitter: FaTwitter,
    Mail: FaEnvelope
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <span className="text-2xl font-bold text-primary-400">&lt;/&gt;</span>
            <span className="text-2xl font-bold ml-2">Lucien</span>
            <p className="text-gray-400 mt-2">
              Building innovative digital solutions
            </p>
          </div>

          <div className="flex space-x-4">
            {socialLinks.map((link) => {
              const Icon = iconMap[link.icon] || FaGithub;
              return (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors duration-300"
                  aria-label={link.name}
                >
                  <Icon className="w-5 h-5" />
                </a>
              );
            })}
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm flex items-center mt-4 md:mt-0">
            Made with
            <FaHeart className="w-4 h-4 text-red-500 mx-1 fill-red-500" />
            in Rwanda
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;