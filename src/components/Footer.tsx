import React from 'react';
import { Instagram, Mail, Globe } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-12">
      <div className="container mx-auto px-5">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-2">
            <div className="flex items-center gap-2 text-2xl font-bold text-white mb-4">
              <img 
                src="/a-modern-logo-design-featuring-the-styli_mw6xyGyJT3KSb06rvWctew_ED5aOVeKTSOnXbafi2FrJw copy.jpeg"
                alt="Worvid Creation Logo" 
                className="h-24 w-auto"
              />
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Empowering businesses with innovative digital solutions. From web development 
              to marketing strategies, we create experiences that drive results.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/worvidcreation/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-teal-500 transition-colors duration-200"
              >
                <Instagram size={20} className="text-gray-400 hover:text-white" />
              </a>
              <a
                href="mailto:worvidcreations@gmail.com"
                className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-teal-500 transition-colors duration-200"
              >
                <Mail size={20} className="text-gray-400 hover:text-white" />
              </a>
              <a
                href="#home"
                className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-teal-500 transition-colors duration-200"
              >
                <Globe size={20} className="text-gray-400 hover:text-white" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-2">
              {['Web Development', 'Digital Marketing', 'UI/UX Design', 'SEO Optimization', 'Paid Advertising', 'Business Cards'].map((service) => (
                <li key={service}>
                  <a href="#services" className="text-gray-400 hover:text-teal-400 transition-colors duration-200 text-sm">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Portfolio', 'Contact'].map((link) => (
                <li key={link}>
                  <a 
                    href={`#${link.toLowerCase()}`} 
                    className="text-gray-400 hover:text-teal-400 transition-colors duration-200 text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-6 text-center text-gray-400 text-xs">
          &copy; 2025 Worvid Creation. All rights reserved. Crafted with passion for digital excellence.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
