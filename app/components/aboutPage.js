"use client";
import React, { useState, useEffect } from 'react';

export default function AboutPage() {
  const [scrollY, setScrollY] = useState(0);
  const [activeTab, setActiveTab] = useState('story');

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const teamMembers = [
    {
      name: "James Harrison",
      role: "Master Watchmaker",
      image: "👨‍💼",
      experience: "25 Years",
      specialty: "Swiss Complications"
    },
    {
      name: "Sarah Chen",
      role: "Design Director",
      image: "👩‍🎨",
      experience: "15 Years",
      specialty: "Luxury Aesthetics"
    },
    {
      name: "Michael Laurent",
      role: "Quality Specialist",
      image: "👨‍🔬",
      experience: "20 Years",
      specialty: "Precision Testing"
    },
    {
      name: "Emma Williams",
      role: "Heritage Curator",
      image: "👩‍💼",
      experience: "18 Years",
      specialty: "Vintage Collection"
    }
  ];

  const milestones = [
    { year: "1850", title: "Foundation", desc: "Started in Geneva, Switzerland", icon: "🏛️" },
    { year: "1920", title: "Innovation", desc: "First automatic movement", icon: "⚙️" },
    { year: "1975", title: "Global Expansion", desc: "Worldwide presence established", icon: "🌍" },
    { year: "2010", title: "Digital Era", desc: "Smart technology integration", icon: "💻" },
    { year: "2025", title: "Future Vision", desc: "Sustainable luxury watches", icon: "🌱" }
  ];

  const values = [
    {
      icon: "💎",
      title: "Craftsmanship",
      description: "Every detail perfected by master artisans",
      color: "from-yellow-400 to-orange-500"
    },
    {
      icon: "🔬",
      title: "Innovation",
      description: "Pushing boundaries of horological technology",
      color: "from-blue-400 to-cyan-500"
    },
    {
      icon: "🌟",
      title: "Excellence",
      description: "Uncompromising quality in every timepiece",
      color: "from-purple-400 to-pink-500"
    },
    {
      icon: "🤝",
      title: "Integrity",
      description: "Building trust through transparency",
      color: "from-green-400 to-teal-500"
    }
  ];

  return (
    <div className="bg-black min-h-screen">
      
      {/* Hero Section with Parallax */}
      <div className="relative h-screen overflow-hidden">
        {/* Animated Background */}
        <div 
          className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900"
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        >
          <div className="absolute inset-0 opacity-20">
            {[...Array(50)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-white rounded-full animate-twinkle"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`
                }}
              />
            ))}
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
          <div>
            <div className="text-8xl mb-8 animate-float-watch">⌚</div>
            <h1 className="text-6xl md:text-8xl font-black text-white mb-6 animate-title-appear">
              Our Story
            </h1>
            <p className="text-2xl text-gray-300 max-w-3xl mx-auto mb-12 animate-fade-in-up">
              Crafting timeless masterpieces for over 175 years
            </p>
            <div className="flex flex-wrap gap-4 justify-center animate-fade-in-up-delay">
              <div className="bg-white/10 backdrop-blur-md px-8 py-4 rounded-full border border-white/20">
                <div className="text-3xl font-bold text-white">175+</div>
                <div className="text-sm text-gray-300">Years Legacy</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md px-8 py-4 rounded-full border border-white/20">
                <div className="text-3xl font-bold text-white">500K+</div>
                <div className="text-sm text-gray-300">Timepieces Sold</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md px-8 py-4 rounded-full border border-white/20">
                <div className="text-3xl font-bold text-white">120+</div>
                <div className="text-sm text-gray-300">Countries</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="sticky top-0 z-50 bg-black/80 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex justify-center gap-4">
            {['story', 'team', 'values'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeTab === tab
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white scale-110'
                    : 'bg-white/5 text-gray-400 hover:bg-white/10'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Story Section */}
      {activeTab === 'story' && (
        <div className="relative py-24 px-4">
          <div className="max-w-7xl mx-auto">
            
            {/* Company Story */}
            <div className="grid lg:grid-cols-2 gap-16 mb-32 items-center">
              <div className="animate-slide-in-left">
                <h2 className="text-5xl font-black text-white mb-6">
                  A Legacy of <span className="text-gradient">Precision</span>
                </h2>
                <p className="text-xl text-gray-300 leading-relaxed mb-6">
                  Founded in 1850 in the heart of Geneva, our journey began with a simple vision: to create timepieces that transcend generations. What started as a small workshop has evolved into a global symbol of luxury and precision.
                </p>
                <p className="text-xl text-gray-300 leading-relaxed mb-8">
                  Each watch is a testament to our unwavering commitment to excellence, combining traditional craftsmanship with cutting-edge innovation.
                </p>
                <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-full hover:scale-105 transition-transform duration-300">
                  Explore Heritage Collection
                </button>
              </div>
              
              <div className="relative animate-slide-in-right">
                <div className="relative bg-gradient-to-br from-blue-500 to-purple-500 p-1 rounded-3xl">
                  <div className="bg-gray-900 rounded-3xl p-12 text-center">
                    <div className="text-9xl mb-6 animate-rotate-slow">⌚</div>
                    <h3 className="text-3xl font-bold text-white mb-4">Swiss Excellence</h3>
                    <p className="text-gray-400">Handcrafted in Geneva since 1850</p>
                  </div>
                </div>
                <div className="absolute -top-8 -right-8 w-32 h-32 bg-blue-500 rounded-full blur-3xl opacity-50 animate-pulse-slow"></div>
                <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-purple-500 rounded-full blur-3xl opacity-50 animate-pulse-slow" style={{animationDelay: '1s'}}></div>
              </div>
            </div>

            {/* Timeline */}
            <div className="mb-32">
              <h2 className="text-5xl font-black text-white text-center mb-16">
                Our Journey Through Time
              </h2>
              
              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 transform -translate-x-1/2"></div>
                
                {milestones.map((milestone, index) => (
                  <div
                    key={index}
                    className={`relative flex items-center mb-16 ${
                      index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                    } animate-milestone`}
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-12' : 'text-left pl-12'}`}>
                      <div className="bg-white/5 backdrop-blur-xl p-8 rounded-2xl border border-white/10 hover:border-white/30 hover:scale-105 transition-all duration-500">
                        <div className="text-5xl mb-4">{milestone.icon}</div>
                        <div className="text-4xl font-black text-gradient mb-2">{milestone.year}</div>
                        <h4 className="text-2xl font-bold text-white mb-2">{milestone.title}</h4>
                        <p className="text-gray-400">{milestone.desc}</p>
                      </div>
                    </div>
                    
                    <div className="w-2/12 flex justify-center">
                      <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse-ring"></div>
                    </div>
                    
                    <div className="w-5/12"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Team Section */}
      {activeTab === 'team' && (
        <div className="relative py-24 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-5xl font-black text-white text-center mb-6 animate-fade-in">
              Meet Our Craftsmen
            </h2>
            <p className="text-xl text-gray-400 text-center mb-16 max-w-3xl mx-auto animate-fade-in-up">
              The talented individuals behind every masterpiece
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="group relative animate-card-appear"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"></div>
                  
                  <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-white/30 transition-all duration-500">
                    <div className="text-8xl mb-6 filter grayscale group-hover:grayscale-0 transition-all duration-500">
                      {member.image}
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
                    <p className="text-blue-400 mb-4 font-semibold">{member.role}</p>
                    
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between text-gray-400">
                        <span>Experience:</span>
                        <span className="text-white font-semibold">{member.experience}</span>
                      </div>
                      <div className="flex justify-between text-gray-400">
                        <span>Specialty:</span>
                        <span className="text-white font-semibold">{member.specialty}</span>
                      </div>
                    </div>

                    <button className="mt-6 w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:scale-105">
                      View Profile
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Values Section */}
      {activeTab === 'values' && (
        <div className="relative py-24 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-5xl font-black text-white text-center mb-6 animate-fade-in">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-400 text-center mb-16 max-w-3xl mx-auto animate-fade-in-up">
              The principles that guide every decision we make
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-24">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="group relative animate-card-appear"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <div className={`absolute -inset-1 bg-gradient-to-r ${value.color} rounded-3xl opacity-50 group-hover:opacity-100 blur-xl transition-opacity duration-500`}></div>
                  
                  <div className="relative bg-black rounded-3xl p-12 border border-white/10 hover:border-white/30 transition-all duration-500 h-full flex flex-col">
                    <div className="text-7xl mb-6 group-hover:scale-125 transition-transform duration-500">
                      {value.icon}
                    </div>
                    <h3 className="text-3xl font-black text-white mb-4">{value.title}</h3>
                    <p className="text-xl text-gray-400 leading-relaxed flex-grow">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Section */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-3xl blur-2xl opacity-50 group-hover:opacity-100 transition-opacity duration-1000"></div>
              <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-3xl p-16 text-center border border-white/20">
                <h3 className="text-4xl font-black text-white mb-6">
                  Join Our Legacy
                </h3>
                <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
                  Become part of our story. Explore career opportunities with a heritage brand.
                </p>
                <button className="px-12 py-5 bg-white text-black font-bold text-lg rounded-full hover:scale-110 transition-transform duration-300">
                  View Careers
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 1; }
        }

        @keyframes float-watch {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(10deg); }
        }

        @keyframes title-appear {
          from { opacity: 0; transform: scale(0.8); }
          to { opacity: 1; transform: scale(1); }
        }

        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes fade-in-up-delay {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes bounce-slow {
          0%, 100% { transform: translate(-50%, 0); }
          50% { transform: translate(-50%, -10px); }
        }

        @keyframes slide-in-left {
          from { opacity: 0; transform: translateX(-100px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes slide-in-right {
          from { opacity: 0; transform: translateX(100px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes rotate-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.8; }
        }

        @keyframes milestone {
          from { opacity: 0; transform: translateY(50px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes pulse-ring {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.5); }
        }

        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes card-appear {
          from { opacity: 0; transform: translateY(50px) scale(0.9); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }

        .text-gradient {
          background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 50%, #ec4899 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .animate-twinkle { animation: twinkle 3s ease-in-out infinite; }
        .animate-float-watch { animation: float-watch 4s ease-in-out infinite; }
        .animate-title-appear { animation: title-appear 1s ease-out; }
        .animate-fade-in-up { animation: fade-in-up 1s ease-out 0.3s both; }
        .animate-fade-in-up-delay { animation: fade-in-up-delay 1s ease-out 0.6s both; }
        .animate-bounce-slow { animation: bounce-slow 2s ease-in-out infinite; }
        .animate-slide-in-left { animation: slide-in-left 1s ease-out; }
        .animate-slide-in-right { animation: slide-in-right 1s ease-out; }
        .animate-rotate-slow { animation: rotate-slow 20s linear infinite; }
        .animate-pulse-slow { animation: pulse-slow 3s ease-in-out infinite; }
        .animate-milestone { animation: milestone 1s ease-out both; }
        .animate-pulse-ring { animation: pulse-ring 2s ease-in-out infinite; }
        .animate-fade-in { animation: fade-in 1s ease-out; }
        .animate-card-appear { animation: card-appear 1s ease-out both; }
      `}</style>
    </div>
  );
}