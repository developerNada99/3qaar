"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Cairo } from 'next/font/google';

const cairo = Cairo({
  subsets: ['arabic'],
  weight: ['400', '600', '700', '800'],
});

const LandTwo = () => {
  return (
    <section className="relative w-full h-[90vh] min-h-150 overflow-hidden" dir="rtl">

      <Image
        src="/landtwo.jpg"
        alt="أراضي خام في الطائف"
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/50 to-black/20" />

      <div className={`${cairo.className} absolute inset-0 flex flex-col justify-end pb-16 px-6 sm:px-12 md:px-20 max-w-4xl`}>

        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-white/40 text-xs tracking-[0.4em] font-light mb-3 block"
        >
          05
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-white text-4xl sm:text-5xl md:text-6xl font-black leading-tight mb-4"
        >
          أراضي{' '}
          <span className="text-transparent bg-clip-text bg-linear-to-l from-[#7a9ed4] to-[#274b97]">
            خام
          </span>
        </motion.h2>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-16 h-0.5 bg-linear-to-l from-[#7a9ed4] to-[#274b97] rounded-full mb-5 origin-right"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="text-white/75 text-base sm:text-lg leading-relaxed max-w-xl mb-8"
        >
          أراضي خام بأسعار منافسة في مواقع استراتيجية مميزة بالطائف، فرص استثمارية
          نادرة لمن يبحث عن التوسع والبناء في أكثر المناطق نمواً وتطوراً.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.35 }}
        >
          <span className="px-4 py-2 rounded-full border border-white/30 text-white/80 text-sm font-semibold backdrop-blur-sm bg-white/5">
            أراضي خام
          </span>
        </motion.div>

      </div>
    </section>
  );
};

export default LandTwo;