'use client';
import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'general',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [activeMethod, setActiveMethod] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', subject: 'general', message: '' });
    }, 3000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactMethods = [
    {
      icon: '📞',
      title: 'Phone',
      detail: '+1 (555) 123-4567',
      desc: 'Mon-Fri 9AM-6PM EST',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: '✉️',
      title: 'Email',
      detail: 'support@watchnext.com',
      desc: 'We reply within 24 hours',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: '💬',
      title: 'Live Chat',
      detail: 'Chat with Expert',
      desc: 'Available now',
      color: 'from-green-500 to-teal-500'
    },
    {
      icon: '📍',
      title: 'Visit Us',
      detail: 'Geneva, Switzerland',
      desc: 'Schedule a boutique visit',
      color: 'from-orange-500 to-red-500'
    }
  ];

  const locations = [
    {
      city: 'Geneva',
      country: 'Switzerland',
      address: '123 Rue du Rhône, 1204 Geneva',
      hours: 'Mon-Sat: 10AM-7PM',
      image: '🇨🇭'
    },
    {
      city: 'New York',
      country: 'United States',
      address: '456 Fifth Avenue, NY 10018',
      hours: 'Mon-Sat: 10AM-8PM',
      image: '🇺🇸'
    },
    {
      city: 'Tokyo',
      country: 'Japan',
      address: '789 Ginza, Chuo City, Tokyo',
      hours: 'Mon-Sun: 10AM-9PM',
      image: '🇯🇵'
    },
    {
      city: 'Dubai',
      country: 'UAE',
      address: 'Dubai Mall, Downtown Dubai',
      hours: 'Sun-Thu: 10AM-10PM',
      image: '🇦🇪'
    }
  ];

  const faqs = [
    {
      q: 'What is your warranty policy?',
      a: 'All our watches come with a 5-year international warranty covering manufacturing defects.'
    },
    {
      q: 'Do you offer servicing?',
      a: 'Yes, we provide comprehensive servicing at all our authorized service centers worldwide.'
    },
    {
      q: 'Can I customize my watch?',
      a: 'Absolutely! We offer bespoke customization services for select models.'
    },
    {
      q: 'What payment methods do you accept?',
      a: 'We accept all major credit cards, wire transfers, and cryptocurrency for select purchases.'
    }
  ];

  return (
    <div className="relative bg-gradient-to-br from-gray-900 via-slate-900 to-black text-white min-h-screen overflow-hidden">
      
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500 rounded-full blur-3xl opacity-20 animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-500 rounded-full blur-3xl opacity-20 animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      {/* Hero Section */}
      <div className="relative z-10 pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-block mb-6 animate-fade-in">
            <span className="px-6 py-2 bg-blue-500/20 backdrop-blur-sm rounded-full border border-blue-500/30 text-blue-400 font-semibold">
              We're Here to Help
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black mb-6 animate-title-pop">
            Get in <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Touch</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-12 animate-fade-up">
            Have a question about our timepieces? Our expert team is ready to assist you.
          </p>

          <div className="flex items-center justify-center gap-4 text-gray-400 animate-fade-up" style={{animationDelay: '0.3s'}}>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
              <span>Available Now</span>
            </div>
            <span>•</span>
            <span>Response within 24 hours</span>
          </div>
        </div>
      </div>

      {/* Contact Methods */}
      <div className="relative z-10 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => (
              <div
                key={index}
                onMouseEnter={() => setActiveMethod(index)}
                onMouseLeave={() => setActiveMethod(null)}
                className="group relative animate-card-in"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className={`absolute -inset-1 bg-gradient-to-r ${method.color} rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500`}></div>
                
                <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-white/30 transition-all duration-500 h-full">
                  <div className="text-6xl mb-4 group-hover:scale-125 transition-transform duration-500">
                    {method.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{method.title}</h3>
                  <p className="text-xl text-blue-400 mb-2 font-semibold">{method.detail}</p>
                  <p className="text-sm text-gray-400">{method.desc}</p>
                  
                  {activeMethod === index && (
                    <button className="mt-6 w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full font-semibold hover:scale-105 transition-transform duration-300">
                      Connect Now
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Form & Info Section */}
      <div className="relative z-10 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Contact Form */}
            <div className="animate-slide-in-left">
              <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10">
                <h2 className="text-3xl font-black mb-6">Send us a Message</h2>
                
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-gray-300">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-all duration-300"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold mb-2 text-gray-300">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-all duration-300"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold mb-2 text-gray-300">Phone</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+1 (555) 000-0000"
                        className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-all duration-300"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2 text-gray-300">Subject</label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-blue-500 transition-all duration-300 cursor-pointer"
                    >
                      <option value="general">General Inquiry</option>
                      <option value="purchase">Purchase Question</option>
                      <option value="service">Service & Repair</option>
                      <option value="custom">Custom Order</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2 text-gray-300">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us how we can help you..."
                      rows="6"
                      className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-all duration-300 resize-none"
                    ></textarea>
                  </div>

                  <button
                    onClick={handleSubmit}
                    disabled={submitted}
                    className={`w-full py-4 rounded-xl font-bold text-lg transition-all duration-300 ${
                      submitted 
                        ? 'bg-green-500 text-white' 
                        : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:scale-105'
                    }`}
                  >
                    {submitted ? '✓ Message Sent!' : 'Send Message'}
                  </button>

                  {submitted && (
                    <p className="text-center text-green-400 text-sm animate-fade-in">
                      Thank you! We'll get back to you within 24 hours.
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Info & Map */}
            <div className="space-y-8 animate-slide-in-right">
              
              {/* Quick Info */}
              <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10">
                <h3 className="text-2xl font-bold mb-6">Visit Our Boutiques</h3>
                <div className="space-y-6">
                  {locations.map((location, index) => (
                    <div
                      key={index}
                      className="group p-6 bg-white/5 rounded-2xl border border-white/10 hover:border-white/30 hover:scale-105 transition-all duration-300 cursor-pointer"
                    >
                      <div className="flex items-start gap-4">
                        <div className="text-5xl">{location.image}</div>
                        <div className="flex-1">
                          <h4 className="text-xl font-bold mb-1">{location.city}</h4>
                          <p className="text-gray-400 text-sm mb-2">{location.country}</p>
                          <p className="text-gray-300 text-sm mb-2">{location.address}</p>
                          <p className="text-blue-400 text-sm font-semibold">{location.hours}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10">
                <h3 className="text-2xl font-bold mb-6">Follow Us</h3>
                <div className="flex gap-4">
                  {[
                    { icon: '📘', name: 'Facebook', color: 'hover:text-blue-500' },
                    { icon: '📷', name: 'Instagram', color: 'hover:text-pink-500' },
                    { icon: '🐦', name: 'Twitter', color: 'hover:text-blue-400' },
                    { icon: '📺', name: 'YouTube', color: 'hover:text-red-500' }
                  ].map((social, index) => (
                    <button
                      key={index}
                      className={`w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center text-3xl border border-white/10 hover:border-white/30 ${social.color} transition-all duration-300 hover:scale-110`}
                      title={social.name}
                    >
                      {social.icon}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="relative z-10 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-black text-center mb-12">
            Frequently Asked <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Questions</span>
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-white/30 transition-all duration-300 animate-faq-in"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <h4 className="text-xl font-bold mb-3 text-white">{faq.q}</h4>
                <p className="text-gray-400 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative z-10 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="relative overflow-hidden rounded-3xl">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600"></div>
            <div className="relative z-10 p-16 text-center">
              <div className="text-8xl mb-6 animate-bounce-slow">⌚</div>
              <h3 className="text-4xl font-black text-white mb-4">
                Ready to Find Your Perfect Timepiece?
              </h3>
              <p className="text-xl text-white/80 mb-8">
                Book a private consultation with our watch experts
              </p>
              <button className="px-10 py-5 bg-white text-black font-bold text-lg rounded-full hover:scale-110 transition-transform duration-300 shadow-2xl">
                Schedule Appointment
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes title-pop {
          from { opacity: 0; transform: scale(0.8); }
          to { opacity: 1; transform: scale(1); }
        }

        @keyframes fade-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes card-in {
          from { opacity: 0; transform: translateY(50px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes slide-in-left {
          from { opacity: 0; transform: translateX(-50px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes slide-in-right {
          from { opacity: 0; transform: translateX(50px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes faq-in {
          from { opacity: 0; transform: translateX(-30px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }

        .animate-fade-in { animation: fade-in 1s ease-out; }
        .animate-title-pop { animation: title-pop 1s ease-out; }
        .animate-fade-up { animation: fade-up 1s ease-out both; }
        .animate-card-in { animation: card-in 1s ease-out both; }
        .animate-slide-in-left { animation: slide-in-left 1s ease-out; }
        .animate-slide-in-right { animation: slide-in-right 1s ease-out; }
        .animate-faq-in { animation: faq-in 1s ease-out both; }
        .animate-bounce-slow { animation: bounce-slow 3s ease-in-out infinite; }
      `}</style>
    </div>
  );
};

export default Contact;