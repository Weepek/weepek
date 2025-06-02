 

import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin,FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';

function Footer() {
  const socialIcons = [
    { Icon: FaFacebookF, color: 'hover:text-blue-600', href: '#' },
    { Icon: FaTwitter, color: 'hover:text-blue-400', href: '#' },
    { Icon: FaInstagram, color: 'hover:text-pink-500', href: 'https://www.instagram.com/weepek_?igsh=MTU2MTJqcW1iY3N1' },
    { Icon: FaWhatsapp, color: 'hover:text-green-600', href: 'https://wa.me/7010039610' },
  ];

  const footerLinks = [
    { id: "home", name: "Home", href: "#home" },
  { id: "about", name: "About", href: "#about" },
  { id: "project", name: "Project", href: "#project" },
  { id: "contact", name: "Contact Us", href: "#contact" },
  ];

  return (
    <div className="bg-gradient-to-b from-gray-900 to-black text-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)] pointer-events-none" />
      
      <footer className="py-12 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Social Media & Newsletter - Left */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex gap-4 justify-center md:justify-start">
              {socialIcons.map(({ Icon, color, href }, index) => (
                <motion.a
                  key={index}
                  href={href}
                  className={`text-white ${color} transition-colors duration-300`}
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon size={24} />
                </motion.a>
              ))}
            </div>
            <div className="mt-4">
              <p className="text-gray-300 mb-2 text-center md:text-left">Subscribe to our newsletter</p>
              <div className="flex gap-2 justify-center md:justify-start">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-2 rounded-l-full bg-gray-800 text-white border-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="px-4 py-2 bg-blue-500 rounded-r-full hover:bg-blue-600 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </motion.div>

          {/* Brand & Links - Right */}
          <motion.div 
            className="text-center md:text-right space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-4xl font-bold font-Audiowide bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent justify-center">
              Weepek
            </h3>
            <div className="flex justify-center md:justify-end gap-6">
              {footerLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                  whileHover={{ y: -2 }}
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div 
          className="mt-12 text-center text-sm text-gray-400 border-t border-gray-800 pt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          © {new Date().getFullYear()} Weepek. All rights reserved.
        </motion.div>

      </footer>
    </div>
  );
}

export default Footer;