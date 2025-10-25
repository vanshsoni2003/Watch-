"use client";
import React, { useState, useEffect } from "react";

export default function WatchFeaturesSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    const handleScroll = () => setScrollY(window.scrollY);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);

    // Generate particles only once on client to prevent hydration mismatch
    const newParticles = Array.from({ length: 30 }).map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: `${Math.random() * 5}s`,
      duration: `${5 + Math.random() * 10}s`,
    }));
    setParticles(newParticles);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const features = [
    {
      icon: "⚡",
      title: "Precision Engineering",
      description: "Swiss-made movements with atomic accuracy",
      gradient: "from-yellow-400 via-orange-500 to-red-500",
      particles: ["✨", "⭐", "💫"],
    },
    {
      icon: "🌍",
      title: "Global Warranty",
      description: "Worldwide coverage with 5-year protection",
      gradient: "from-cyan-400 via-blue-500 to-purple-500",
      particles: ["🌟", "✨", "⚡"],
    },
    {
      icon: "♾️",
      title: "Lifetime Value",
      description: "Investment pieces that appreciate over time",
      gradient: "from-pink-400 via-purple-500 to-indigo-500",
      particles: ["💎", "✨", "🌟"],
    },
    {
      icon: "🎯",
      title: "Exclusive Access",
      description: "Limited editions and pre-launch collections",
      gradient: "from-green-400 via-teal-500 to-cyan-500",
      particles: ["⭐", "💫", "✨"],
    },
  ];

  const experiences = [
    {
      year: "1850",
      title: "Heritage Craftsmanship",
      description: "Over 170 years of watchmaking excellence",
      icon: "🏛️",
    },
    {
      year: "2025",
      title: "Modern Innovation",
      description: "Cutting-edge technology meets timeless design",
      icon: "🚀",
    },
    {
      year: "∞",
      title: "Eternal Legacy",
      description: "Timepieces passed through generations",
      icon: "👑",
    },
  ];

  return (
    <div className="relative bg-black min-h-screen overflow-hidden">
      {/* Dynamic Gradient Background */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59,130,246,0.3), transparent 50%)`,
        }}
      />

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((p, i) => (
          <div
            key={i}
            className="absolute text-2xl opacity-20 animate-float-particle"
            style={{
              left: p.left,
              top: p.top,
              animationDelay: p.delay,
              animationDuration: p.duration,
            }}
          >
            ✨
          </div>
        ))}
      </div>

      {/* 3D Grid Background */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(59,130,246,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.1) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
            transform: `perspective(500px) rotateX(60deg) translateY(${scrollY * 0.1}px)`,
          }}
        />
      </div>

      {/* === MAIN CONTENT === */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-24">
          <h2
            className="text-6xl md:text-8xl font-black text-white mb-6 glitch-text"
            data-text="EXCELLENCE"
          >
            EXCELLENCE
          </h2>
          <p className="text-2xl text-gray-400 font-light tracking-wider animate-fade-slide-up">
            Where time meets perfection
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-32">
          {features.map((feature, index) => (
            <div
              key={index}
              onMouseEnter={() => setActiveIndex(index)}
              className="group relative h-96 perspective-1000"
            >
              <div
                className={`relative w-full h-full transition-all duration-700 transform-style-3d ${
                  activeIndex === index ? "rotate-y-180" : ""
                }`}
              >
                {/* Front */}
                <div className="absolute inset-0 backface-hidden">
                  <div
                    className={`h-full bg-gradient-to-br ${feature.gradient} p-1 rounded-3xl animate-border-pulse`}
                  >
                    <div className="h-full bg-black rounded-3xl p-8 flex flex-col items-center justify-center relative overflow-hidden">
                      {feature.particles.map((particle, i) => (
                        <div
                          key={i}
                          className="absolute text-3xl animate-orbit"
                          style={{
                            animationDelay: `${i * 0.5}s`,
                            left: "50%",
                            top: "50%",
                          }}
                        >
                          {particle}
                        </div>
                      ))}
                      <div className="text-8xl mb-6 animate-bounce-slow">
                        {feature.icon}
                      </div>
                      <h3 className="text-2xl font-bold text-white text-center mb-3">
                        {feature.title}
                      </h3>
                      <div className="mt-4 text-gray-400 text-sm animate-pulse">
                        Hover to explore →
                      </div>
                    </div>
                  </div>
                </div>

                {/* Back */}
                <div className="absolute inset-0 backface-hidden rotate-y-180">
                  <div
                    className={`h-full bg-gradient-to-br ${feature.gradient} p-1 rounded-3xl`}
                  >
                    <div className="h-full bg-gray-900 rounded-3xl p-8 flex flex-col items-center justify-center">
                      <div className="text-6xl mb-6">{feature.icon}</div>
                      <h3 className="text-xl font-bold text-white mb-4">
                        {feature.title}
                      </h3>
                      <p className="text-gray-300 text-center">
                        {feature.description}
                      </p>
                      <button className="mt-6 px-6 py-3 bg-white text-black rounded-full font-bold hover:scale-110 transition-transform">
                        Learn More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* === STYLES === */}
      <style jsx>{`
        @keyframes float-particle {
          0%,
          100% {
            transform: translate(0, 0) rotate(0deg);
            opacity: 0.2;
          }
          50% {
            transform: translate(-10px, -40px) rotate(180deg);
            opacity: 0.4;
          }
        }
        @keyframes orbit {
          0% {
            transform: translate(-50%, -50%) rotate(0deg) translateX(80px);
          }
          100% {
            transform: translate(-50%, -50%) rotate(360deg) translateX(80px);
          }
        }
        @keyframes bounce-slow {
          50% {
            transform: translateY(-20px);
          }
        }
        @keyframes border-pulse {
          50% {
            opacity: 1;
          }
        }
        @keyframes fade-slide-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .perspective-1000 {
          perspective: 1000px;
        }
        .transform-style-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
        .animate-float-particle {
          animation: float-particle infinite ease-in-out;
        }
        .animate-orbit {
          animation: orbit 4s linear infinite;
        }
        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
        .animate-border-pulse {
          animation: border-pulse 2s ease-in-out infinite;
        }
        .animate-fade-slide-up {
          animation: fade-slide-up 1s ease-out;
        }
        .glitch-text {
          animation: glitch 5s infinite;
        }
        @keyframes glitch {
          91% {
            transform: translate(-2px, 2px);
          }
          93% {
            transform: translate(2px, -2px);
          }
        }
      `}</style>
    </div>
  );
}
