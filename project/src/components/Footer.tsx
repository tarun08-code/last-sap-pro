import React from 'react';
import { Calendar, Mail, MapPin, Phone, Twitter, Linkedin, Github, ExternalLink } from 'lucide-react';

const Footer: React.FC = () => {
  const socialLinks = [
    { icon: Twitter, href: 'https://twitter.com/techedusummit', label: 'Twitter' },
    { icon: Linkedin, href: 'https://linkedin.com/company/techedusummit', label: 'LinkedIn' },
    { icon: Github, href: 'https://github.com/techedusummit', label: 'GitHub' }
  ];

  const quickLinks = [
    { label: 'Event Schedule', href: '#event' },
    { label: 'Speakers', href: '#speakers' },
    { label: 'Registration', href: '#' },
    { label: 'Sponsors', href: '#' },
    { label: 'Contact', href: '#' },
    { label: 'FAQ', href: '#' }
  ];

  const contactInfo = [
    { icon: Mail, text: 'summit@techedu2025.com', href: 'mailto:summit@techedu2025.com' },
    { icon: Phone, text: '+1 (555) 123-4567', href: 'tel:+15551234567' },
    { icon: MapPin, text: 'Silicon Valley Convention Center', href: '#' }
  ];

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  TechEdu Summit 2025
                </h3>
                <p className="text-gray-400 text-sm">Shaping the Future of Education</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
              Join us for three days of innovation, learning, and networking as we explore the intersection 
              of technology and education with industry leaders and thought pioneers.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map(({ icon: Icon, href, label }, index) => (
                <a
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 hover:bg-gray-700 border border-gray-700 hover:border-gray-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                  aria-label={label}
                >
                  <Icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group"
                  >
                    <span>{link.label}</span>
                    <ExternalLink className="w-3 h-3 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Contact Info</h4>
            <ul className="space-y-4">
              {contactInfo.map(({ icon: Icon, text, href }, index) => (
                <li key={index}>
                  <a
                    href={href}
                    className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors duration-300 group"
                  >
                    <Icon className="w-5 h-5 text-blue-400 group-hover:text-blue-300 transition-colors" />
                    <span>{text}</span>
                  </a>
                </li>
              ))}
            </ul>

            {/* Event Date Highlight */}
            <div className="mt-6 p-4 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-xl">
              <div className="flex items-center space-x-2 mb-2">
                <Calendar className="w-4 h-4 text-blue-400" />
                <span className="text-sm font-medium text-blue-300">Save the Date</span>
              </div>
              <p className="text-white font-semibold">March 15-17, 2025</p>
              <p className="text-gray-400 text-sm">Don't miss out!</p>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="py-8 border-t border-gray-800">
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Stay Updated</h3>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              Subscribe to receive the latest updates about speakers, schedule changes, and exclusive content.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-gray-800 text-white placeholder-gray-400 px-4 py-3 rounded-xl border border-gray-700 focus:border-blue-500 focus:outline-none transition-colors"
              />
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 TechEdu Summit. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Code of Conduct</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;