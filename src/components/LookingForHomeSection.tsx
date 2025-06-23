"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
// import CanvasPawTrail from './CanvasPawTrail';

const cards = [
  {
    title: 'Кошки',
    img: '/cat1.jpg',
    color: 'from-pink-400 to-pink-600',
  },
  {
    title: 'Котята',
    img: '/cat2.jpg',
    color: 'from-purple-400 to-purple-600',
  },
];

export default function LookingForHomeSection() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">Ищут дом</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
        {cards.map((card, i) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: i * 0.15, type: 'spring' }}
            viewport={{ once: true }}
            className="relative w-full rounded-2xl shadow-lg overflow-hidden flex flex-col justify-end min-h-[340px] group hover:shadow-2xl transition-shadow"
          >
            <Image
              src={card.img}
              alt={card.title}
              fill
              className="object-cover object-center absolute inset-0 z-0 group-hover:scale-105 transition-transform duration-300"
              sizes="100vw"
              priority={i === 0}
            />
            <div className="absolute inset-0 bg-black/40 z-10" />
            <div className="relative z-20 h-full w-full bg-gradient-to-t from-black/70 via-black/30 to-transparent flex flex-col">
              <div className="flex items-center justify-center flex-1 w-full h-full">
                <h3 className="text-2xl text-white drop-shadow-lg">{card.title}</h3>
              </div>
              <button className="absolute cursor-pointer bottom-0 left-0 w-full bg-orange-500 text-white px-5 py-3 rounded-b-2xl font-medium hover:bg-orange-600 transition-colors shadow-lg">
                Смотреть всех →
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
} 