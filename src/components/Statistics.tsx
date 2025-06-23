"use client";

import { motion } from 'framer-motion';
import CountUp from 'react-countup';

export default function Statistics() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <span className="flex items-center justify-center">
                <CountUp
                  end={17000}
                  duration={2.5}
                  separator=" "
                  useEasing
                  className="text-5xl font-bold text-orange-500 mb-2"
                />
                <span className="text-5xl font-bold text-orange-500 mb-2 ml-1">+</span>
              </span>
              <p className="text-gray-600 font-semibold">животных в приютах Москвы</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.7 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, type: 'spring' }}
              className="text-center"
            >
              <motion.span
                initial={{ opacity: 0, scale: 0.7 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4, type: 'spring' }}
                className="text-5xl font-bold text-orange-500 mb-2 inline-block"
              >
                1%
              </motion.span>
              <p className="text-gray-600 font-semibold">находят новый дом за год</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.7 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6, type: 'spring' }}
              className="text-center"
            >
              <motion.span
                initial={{ opacity: 0, scale: 0.7 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.8, type: 'spring' }}
                className="text-5xl font-bold text-orange-500 mb-2 inline-block"
              >
                ∞
              </motion.span>
              <p className="text-gray-600 font-semibold">нуждаются в помощи</p>
            </motion.div>
          </div>

          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-xl text-gray-700 leading-relaxed"
          >
            Наша цель — подарить дом и заботу тем, кто ежедневно надеется и ждет. <br />
            Сегодня под нашей опекой — более <span className="font-semibold text-orange-500">250</span> кошек и <span className="font-semibold text-orange-500">100</span> котят, и каждый из них мечтает стать чьим-то пушистым другом.
          </motion.p>
        </div>
      </div>
    </section>
  );
} 