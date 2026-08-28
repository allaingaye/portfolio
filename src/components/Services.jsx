import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaCode, FaMobile, FaPalette, FaServer, 
  FaCloud, FaBriefcase 
} from 'react-icons/fa';
import { services } from '../data/data';

// Map service icons to react-icons
const iconMap = {
  'Code2': FaCode,
  'Smartphone': FaMobile,
  'Palette': FaPalette,
  'Server': FaServer,
  'Cloud': FaCloud,
  'Briefcase': FaBriefcase,
};

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="section-title">
            My <span className="gradient-text">Services</span>
          </h2>
          <p className="section-subtitle">
            I offer a wide range of services to help bring your digital ideas to life
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = iconMap[service.icon] || FaCode;
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary-600 transition-colors duration-300">
                  <IconComponent className="w-7 h-7 text-primary-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;