'use client';

import React, { useState } from 'react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setEmail('');
      }, 3000);
    }
  };

  const footerLinks = {
    shop: [
      { name: 'Luxury Watches', href: '#' },
      { name: 'Sport Watches', href: '#' },
      { name: 'Smart Watches', href: '#' },
      { name: 'Limited Editions', href: '#' },
      { name: 'New Arrivals', href: '#' }
    ],
    company: [
      { name: 'About Us', href: '#' },
      { name: 'Our Story', href: '#' },
      { name: 'Careers', href: '#' },
      { name: 'Press', href: '#' },
      { name: 'Sustainability', href: '#' }
    ],
    support: [
      { name: 'Contact Us', href: '#' },
      { name: 'Warranty', href: '#' },
      { name: 'Repairs', href: '#' },
      { name: 'Shipping Info', href: '#' },
      { name: 'Returns', href: '#' }
    ],
    legal: [
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
      { name: 'Cookie Policy', href: '#' },
      { name: 'Authenticity', href: '#' }
    ]
  };

  const socialLinks = [
    { name: 'Facebook', icon: '📘', href: '#', color: 'hover:text-blue-500' },
    { name: 'Instagram', icon: '📷', href: '#', color: 'hover:text-pink-500' },
    { name: 'Twitter', icon: '🐦', href: '#', color: 'hover:text-blue-400' },
    { name: 'YouTube', icon: '📺', href: '#', color: 'hover:text-red-500' },
    { name: 'LinkedIn', icon: '💼', href: '#', color: 'hover:text-blue-600' }
  ];

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-slate-900 to-black text-white overflow-hidden">
      
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="relative z-10 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="text-6xl">⌚</div>
                <h3 className="text-4xl font-black text-white">
                  Stay in <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Time</span>
                </h3>
              </div>
              <p className="text-xl text-gray-400 leading-relaxed">
                Subscribe to our newsletter for exclusive offers, new collections, and watchmaking insights.
              </p>
            </div>

            <div>
              <div className="relative">
                <div className="flex gap-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="flex-1 px-6 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-all duration-300"
                  />
                  <button
                    onClick={handleSubscribe}
                    className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-full hover:scale-105 transition-transform duration-300 whitespace-nowrap"
                  >
                    {subscribed ? '✓ Subscribed!' : 'Subscribe'}
                  </button>
                </div>
                {subscribed && (
                  <p className="mt-3 text-green-400 text-sm">
                    Thank you for subscribing! Check your inbox for exclusive offers.
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-16">
          
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="text-5xl">⌚</div>
              <h3 className="text-3xl font-black bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                WatchNext
              </h3>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Crafting timeless masterpieces since 1850. Swiss precision meets modern innovation.
            </p>
            
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className={`w-12 h-12 bg-white/5 backdrop-blur-md border border-white/10 rounded-full flex items-center justify-center text-2xl ${social.color} transition-all duration-300 hover:scale-110 hover:bg-white/10`}
                  title={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
              <span className="text-2xl">🛍️</span> Shop
            </h4>
            <ul className="space-y-3">
              {footerLinks.shop.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white hover:translate-x-2 inline-block transition-all duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
              <span className="text-2xl">🏢</span> Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white hover:translate-x-2 inline-block transition-all duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
              <span className="text-2xl">💬</span> Support
            </h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white hover:translate-x-2 inline-block transition-all duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
              <span className="text-2xl">⚖️</span> Legal
            </h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white hover:translate-x-2 inline-block transition-all duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

      

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © 2025 WatchNext. All rights reserved. Crafted with ❤️ in Switzerland.
            </p>
            
         
          </div>
        </div>

        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 w-14 h-14 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 flex items-center justify-center text-2xl z-50"
          title="Back to Top"
        >
          ⬆️
        </button>
      </div>
    </footer>
  );
};

export default Footer;