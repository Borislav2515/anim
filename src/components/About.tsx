"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Grid */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="space-y-4">
              <div className="relative h-48 rounded-lg overflow-hidden">
                <Image
                  src="/about-1.jpg"
                  alt="Помощь животным"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-64 rounded-lg overflow-hidden">
                <Image
                  src="/about-2.jpg"
                  alt="Забота о животных"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="relative h-64 rounded-lg overflow-hidden">
                <Image
                  src="/about-3.jpg"
                  alt="Спасение животных"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-48 rounded-lg overflow-hidden">
                <Image
                  src="/about-4.jpg"
                  alt="Уход за животными"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:pl-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              О нас
            </h2>
            <div className="space-y-6 text-lg text-gray-300">
              <p>
                <span className='text-orange-500 font-semibold'>«Пушистый друг»</span> — это современный приют для кошек и собак, созданный с любовью и заботой.
              </p>
              <p>
                Мы обеспечиваем комфортные условия, медицинскую помощь и социализацию, чтобы каждый наш подопечный был готов к жизни в семье.
              </p>
              <p>
                Пока они ждут своего человека, мы делаем всё, чтобы им было тепло, спокойно и безопасно.
              </p>
              <button className="mt-4 bg-orange-500 text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-orange-600 transition-colors">
                Присоединиться к нам
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 