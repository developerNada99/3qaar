"use client";

import React from 'react';
import { motion } from "framer-motion";
import { Cairo } from "next/font/google";
import Management from '@/components/Management';
import Sale from '@/components/Sale';
import Buying from '@/components/Buying';
import Offplan from '@/components/Offplan';

const cairo = Cairo({
  subsets: ["arabic"],
  weight: ["400", "600", "700", "800"],
});

const BG_SHAPES = [
  { x: "2%",  y: "5%",  size: 80, filled: true,  rotate: 18,  delay: 0    },
  { x: "90%", y: "4%",  size: 60, filled: true,  rotate: -14, delay: 0.2  },
  { x: "93%", y: "70%", size: 90, filled: true,  rotate: 30,  delay: 0.4  },
  { x: "0%",  y: "75%", size: 70, filled: true,  rotate: -22, delay: 0.15 },
  { x: "12%", y: "1%",  size: 48, filled: false, rotate: 10,  delay: 0.3  },
  { x: "78%", y: "12%", size: 64, filled: false, rotate: -25, delay: 0.1  },
  { x: "58%", y: "82%", size: 54, filled: false, rotate: 15,  delay: 0.35 },
  { x: "26%", y: "88%", size: 38, filled: false, rotate: -8,  delay: 0.25 },
  { x: "46%", y: "0%",  size: 30, filled: false, rotate: 45,  delay: 0.5  },
  { x: "84%", y: "44%", size: 24, filled: false, rotate: -35, delay: 0.45 },
  { x: "4%",  y: "46%", size: 32, filled: false, rotate: 20,  delay: 0.6  },
  { x: "36%", y: "3%",  size: 20, filled: true,  rotate: 38,  delay: 0.7  },
  { x: "68%", y: "58%", size: 16, filled: true,  rotate: -50, delay: 0.55 },
  { x: "20%", y: "60%", size: 22, filled: true,  rotate: 22,  delay: 0.65 },
];

const Services = () => {
  return (
    <div>
      {/* ══ Hero Header ══ */}
      <section
        className={`${cairo.className} relative  bg-[#f0f4fb] py-24 px-4 overflow-hidden`}
        dir="rtl"
      >
        {/* مجسمات الخلفية */}
        <div className="absolute inset-0 pointer-events-none">
          {BG_SHAPES.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.4, rotate: s.rotate - 20 }}
              whileInView={{ opacity: 1, scale: 1, rotate: s.rotate }}
              viewport={{ once: true }}
              transition={{ duration: 1.3, delay: s.delay, ease: "easeOut" }}
              style={{
                position: "absolute",
                left: s.x,
                top: s.y,
                width: s.size,
                height: s.size,
                borderRadius: "5px",
                background: s.filled ? "rgba(39,75,151,0.07)" : "transparent",
                border: s.filled ? "none" : "2px solid rgba(39,75,151,0.13)",
                transform: `rotate(${s.rotate}deg)`,
              }}
            />
          ))}

          {/* شبكة خلفية */}
          <svg className="absolute inset-0 w-full h-full opacity-[0.035]" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="svgrid" width="52" height="52" patternUnits="userSpaceOnUse">
                <path d="M 52 0 L 0 0 0 52" fill="none" stroke="#274b97" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#svgrid)" />
          </svg>
        </div>

        {/* خط علوي */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-transparent via-[#274b97]/30 to-transparent" />

        {/* المحتوى */}
        <div className="relative z-10 max-w-4xl mx-auto text-center mt-10">

          {/* تاق */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-4 mb-5"
          >
            <div className="h-px w-16 bg-linear-to-l from-[#274b97] to-transparent" />
            <span className="text-[#274b97] text-xs tracking-[0.4em] font-bold uppercase border border-[#274b97]/25 rounded-full px-4 py-1.5 bg-[#274b97]/5">
              بوابة الطائف العقارية
            </span>
            <div className="h-px w-16 bg-linear-to-r from-[#274b97] to-transparent" />
          </motion.div>

          {/* العنوان */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-[#0e1d3d] text-5xl md:text-6xl font-black mb-4 leading-tight"
          >
            <span className="text-transparent bg-clip-text bg-linear-to-l from-[#274b97] to-[#3c63ac]">
              خدمات
            </span>{" "}
            بوابة الطائف العقارية
          </motion.h1>

          {/* خط تزييني */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="flex justify-center mt-4 mb-6 gap-1.5 items-center"
          >
            <div className="w-10 h-0.5 bg-[#274b97] rounded-full" />
            <div className="w-2.5 h-2.5 border-2 border-[#274b97] rotate-45 rounded-sm" />
            <div className="w-10 h-0.5 bg-[#274b97] rounded-full" />
          </motion.div>

          {/* الوصف */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed"
          >
            نقدم لك مجموعة متكاملة من الحلول العقارية لتحقيق أهدافك بكل احترافية وثقة
          </motion.p>
        </div>
      </section>

      {/* ══ الخدمات ══ */}
      <Management />
      <Sale />
      <Buying />
      <Offplan />
    </div>
  );
};

export default Services;