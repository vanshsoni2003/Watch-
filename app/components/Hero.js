"use client";

import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight / 2);
    let t = 0;

    const waves = [
      { amplitude: 50, wavelength: 150, speed: 0.02, color: "#6366f1" },
      { amplitude: 30, wavelength: 100, speed: 0.015, color: "#8b5cf6" },
      { amplitude: 20, wavelength: 50, speed: 0.01, color: "#ec4899" },
    ];

    const draw = () => {
      ctx.clearRect(0, 0, w, h);

      waves.forEach((wave) => {
        ctx.beginPath();
        ctx.moveTo(0, h / 2);

        for (let x = 0; x < w; x++) {
          const y =
            h / 2 +
            Math.sin((x / wave.wavelength) + t * wave.speed) * wave.amplitude;
          ctx.lineTo(x, y);
        }

        ctx.strokeStyle = wave.color;
        ctx.lineWidth = 2;
        ctx.stroke();
      });

      t += 1;
      requestAnimationFrame(draw);
    };

    draw();

    const resize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight / 2;
    };

    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-center h-[90vh] px-4 overflow-hidden bg-gray-900">
      {/* Canvas Wavy Background */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      {/* Hero Text */}
      <motion.h1
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative text-5xl md:text-7xl font-bold text-white text-center z-10"
      >
        Buy watch and change your Time 
      </motion.h1>

      <motion.p
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="mt-4 text-lg md:text-2xl text-gray-200 max-w-2xl text-center z-10"
      >
        Discover premium watches that define your style.
      </motion.p>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="mt-8 px-8 py-3 bg-white text-black font-semibold rounded-full shadow-lg hover:bg-gray-200 transition-all z-10"
      >
        Explore Collection
      </motion.button>
    </div>
  );
};

export default Hero; 