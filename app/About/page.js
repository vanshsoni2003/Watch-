'use client';
import React, { useState, useEffect } from 'react';

const About = () => {
  const [activeCard, setActiveCard] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const watchFeatures = [
    {
      title: "Perpetual Calendar",
      desc: "Automatically adjusts for months and leap years",
      icon: "📅",
      color: "from-red-500 to-orange-500"
    },
    {
      title: "Tourbillon",
      desc: "Counteracts gravity's effect on timekeeping",
      icon: "🌀",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Moon Phase",
      desc: "Displays lunar cycle with precision",
      icon: "🌙",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Chronograph",
      desc: "Stopwatch function with split-second accuracy",
      icon: "⏱️",
      color: "from-green-500 to-teal-500"
    }
  ];

  const craftsmanship = [
    {
      step: "01",
      title: "Design & Blueprint",
      desc: "Every watch begins as a detailed sketch, refined by master designers",
      image: "✏️",
      duration: "3 months"
    },
    {
      step: "02",
      title: "Component Creation",
      desc: "Over 500 parts machined to microscopic tolerances",
      image: "⚙️",
      duration: "6 months"
    },
    {
      step: "03",
      title: "Assembly",
      desc: "Skilled watchmakers hand-assemble each movement",
      image: "🔧",
      duration: "2 months"
    },
    {
      step: "04",
      title: "Testing & Quality",
      desc: "Rigorous 30-day testing in all conditions",
      image: "🔬",
      duration: "1 month"
    }
  ];

  const achievements = [
    { year: "2024", award: "Best Luxury Watch", org: "Geneva Watch Awards", icon: "🏆" },
    { year: "2023", award: "Innovation Prize", org: "International Watch Fair", icon: "💡" },
    { year: "2022", award: "Excellence in Craftsmanship", org: "Swiss Watch Federation", icon: "⭐" },
    { year: "2021", award: "Design Excellence", org: "Red Dot Awards", icon: "🎨" }
  ];

  return (
    <div className="relative bg-black text-white overflow-hidden">
      
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-800 z-50">
        <div 
          className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Cursor Follow Effect */}
      <div
        className="fixed w-96 h-96 rounded-full pointer-events-none z-0 blur-3xl opacity-30 transition-all duration-1000"
        style={{
          left: mousePos.x - 192,
          top: mousePos.y - 192,
          background: 'radial-gradient(circle, rgba(59,130,246,0.6) 0%, transparent 70%)'
        }}
      />

      {/* Hero with Split Screen */}
      <div className="relative min-h-screen grid lg:grid-cols-2">
        {/* Left Side */}
        <div className="relative bg-gradient-to-br from-gray-900 to-black p-12 lg:p-24 flex flex-col justify-center">
          <div className="space-y-8">
            <div className="inline-block px-6 py-2 bg-blue-500/20 backdrop-blur-sm rounded-full border border-blue-500/30 text-blue-400 font-semibold animate-slide-in-left">
              Since 1850
            </div>
            
            <h1 className="text-6xl lg:text-8xl font-black leading-tight animate-slide-in-left" style={{animationDelay: '0.2s'}}>
              Time is
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient">
                Art
              </span>
            </h1>
            
            <p className="text-xl text-gray-400 leading-relaxed max-w-xl animate-slide-in-left" style={{animationDelay: '0.4s'}}>
              We don't just make watches. We create mechanical poetry, each piece a testament to human ingenuity and artistic vision.
            </p>
            
            <div className="flex gap-4 animate-slide-in-left" style={{animationDelay: '0.6s'}}>
              <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full font-bold overflow-hidden">
                <span className="relative z-10">Explore Collection</span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </button>
              <button className="px-8 py-4 border-2 border-white/20 rounded-full font-bold hover:bg-white/10 transition-all duration-300">
                Watch Video
              </button>
            </div>
          </div>
        </div>

        {/* Right Side - 3D Watch Showcase */}
        <div className="relative bg-gradient-to-br from-blue-900 to-purple-900 p-12 flex items-center justify-center">
          <div className="relative animate-slide-in-right">
            <div className="text-9xl animate-watch-spin">⌚</div>
            
            {/* Orbiting Features */}
            {[0, 90, 180, 270].map((angle, i) => (
              <div
                key={i}
                className="absolute top-1/2 left-1/2 text-4xl animate-orbit"
                style={{
                  animationDelay: `${i * 0.5}s`,
                  transform: `translate(-50%, -50%) rotate(${angle}deg) translateX(150px) rotate(-${angle}deg)`
                }}
              >
                {['⭐', '💎', '✨', '🌟'][i]}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Watch Features - Bento Grid Style */}
      <div className="relative py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-black text-center mb-16">
            Complications that <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Define Excellence</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {watchFeatures.map((feature, index) => (
              <div
                key={index}
                onMouseEnter={() => setActiveCard(index)}
                onMouseLeave={() => setActiveCard(null)}
                className={`group relative overflow-hidden rounded-3xl p-8 border border-white/10 transition-all duration-500 cursor-pointer ${
                  activeCard === index ? 'scale-105' : ''
                }`}
                style={{
                  background: activeCard === index 
                    ? `linear-gradient(135deg, rgba(59,130,246,0.2) 0%, rgba(139,92,246,0.2) 100%)`
                    : 'rgba(255,255,255,0.03)'
                }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
                
                <div className="relative z-10">
                  <div className="text-7xl mb-6 group-hover:scale-110 transition-transform duration-500">
                    {feature.icon}
                  </div>
                  <h3 className="text-3xl font-bold mb-4">{feature.title}</h3>
                  <p className="text-gray-400 text-lg">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Craftsmanship Process - Horizontal Scroll */}
      <div className="relative py-24 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl font-black text-center mb-4">
            The Art of <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Creation</span>
          </h2>
          <p className="text-xl text-gray-400 text-center mb-16">
            One year of dedication for a lifetime of precision
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {craftsmanship.map((step, index) => (
              <div
                key={index}
                className="relative group animate-step-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />
                
                <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 border border-white/10 h-full">
                  <div className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-4">
                    {step.step}
                  </div>
                  
                  <div className="text-6xl mb-6">{step.image}</div>
                  
                  <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                  <p className="text-gray-400 mb-4">{step.desc}</p>
                  
                  <div className="inline-block px-4 py-2 bg-blue-500/20 rounded-full border border-blue-500/30 text-blue-400 text-sm font-semibold">
                    {step.duration}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Awards Carousel */}
      <div className="relative py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-black text-center mb-16">
            Recognized <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Worldwide</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((award, index) => (
              <div
                key={index}
                className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/30 transition-all duration-500 hover:scale-105"
              >
                <div className="text-6xl mb-4 group-hover:scale-125 transition-transform duration-500">
                  {award.icon}
                </div>
                <div className="text-3xl font-black bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent mb-2">
                  {award.year}
                </div>
                <h4 className="text-xl font-bold text-white mb-2">{award.award}</h4>
                <p className="text-sm text-gray-400">{award.org}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section - Magazine Style */}
      <div className="relative py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="relative overflow-hidden rounded-3xl">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-90" />
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30" />
            
            <div className="relative z-10 p-16 text-center">
              <div className="text-8xl mb-8 animate-bounce-slow">⌚</div>
              <h2 className="text-5xl font-black text-white mb-6">
                Experience Timeless Luxury
              </h2>
              <p className="text-2xl text-white/80 mb-12 max-w-3xl mx-auto">
                Visit our boutique and discover the perfect timepiece for your collection
              </p>
              <div className="flex flex-wrap gap-6 justify-center">
                <button className="px-10 py-5 bg-white text-black font-bold text-lg rounded-full hover:scale-110 transition-transform duration-300 shadow-2xl">
                  Book Appointment
                </button>
                <button className="px-10 py-5 border-2 border-white text-white font-bold text-lg rounded-full hover:bg-white/10 transition-all duration-300">
                  Virtual Tour
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slide-in-left {
          from { opacity: 0; transform: translateX(-100px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes slide-in-right {
          from { opacity: 0; transform: translateX(100px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes watch-spin {
          0%, 100% { transform: rotateY(0deg); }
          50% { transform: rotateY(180deg); }
        }

        @keyframes orbit {
          0% { transform: translate(-50%, -50%) rotate(0deg) translateX(150px) rotate(0deg); }
          100% { transform: translate(-50%, -50%) rotate(360deg) translateX(150px) rotate(-360deg); }
        }

        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        @keyframes step-in {
          from { opacity: 0; transform: translateY(50px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }

        .animate-slide-in-left { animation: slide-in-left 1s ease-out both; }
        .animate-slide-in-right { animation: slide-in-right 1s ease-out; }
        .animate-watch-spin { animation: watch-spin 6s ease-in-out infinite; }
        .animate-orbit { animation: orbit 8s linear infinite; }
        .animate-gradient { 
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        .animate-step-in { animation: step-in 1s ease-out both; }
        .animate-bounce-slow { animation: bounce-slow 3s ease-in-out infinite; }
      `}</style>
    </div>
  );
};

export default About;