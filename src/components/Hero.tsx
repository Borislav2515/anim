"use client";

import { useState, useEffect } from 'react';

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth: width, innerHeight: height } = window;
      const x = ((e.clientX / width) * 40) - 20;
      const y = ((e.clientY / height) * 40) - 20;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundColor: '#f7f7f7',
          backgroundImage: 'url("/hero2.png")',
          backgroundSize: '120%',
          backgroundPosition: 'center bottom',
          backgroundRepeat: 'no-repeat',
          transform: 'translateY(20px)',
          height: 'calc(100% + 100px)',
          width: '100%',
        }}
      />

      {/* Eyes */}
      <div 
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          backgroundImage: 'url("/hero-eyes.png")',
          backgroundSize: '120%',
          backgroundPosition: 'center bottom',
          backgroundRepeat: 'no-repeat',
          transform: `translateY(20px) translate(${mousePosition.x * 0.15}px, ${mousePosition.y * 0.15}px)`,
          transition: 'transform 0.1s ease-out',
          height: 'calc(100% + 100px)',
          width: '100%',
        }}
      />

      {/* Content */}
      <div className="relative z-20 h-full flex items-start pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6">
              Помогите животным обрести дом
            </h1>
            <p className="text-lg md:text-xl text-black/80 mb-8">
              Каждое животное заслуживает любящую семью. Вместе мы можем помочь бездомным питомцам найти свой дом и заботливых хозяев.
            </p>
            <button className="bg-orange-500 text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-orange-600 transition-colors cursor-pointer">
              Помочь сейчас
            </button>
          </div>
        </div>
      </div>
    </section>
  );
} 