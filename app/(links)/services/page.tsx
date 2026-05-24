"use client";

import React from 'react'
import { motion } from "framer-motion";
import { Cairo } from "next/font/google";
import Management from '@/components/Management'
import Sale from '@/components/Sale'
import Buying from '@/components/Buying'
import Offplan from '@/components/Offplan'

const cairo = Cairo({
  subsets: ["arabic"],
  weight: ["400", "600", "700"],
});

const Services = () => {
  return (
    <div>
      {/* عنوان خدماتنا */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 bg-white" dir="rtl">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
            className="text-center mt-10"
          >
            <h1 className={`${cairo.className} text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800`}>
              <span className="text-[#274b97]">خدمات</span> بوابة الطائف العقارية
            </h1>
          <div className="w-20 h-0.5 bg-linear-to-r from-[#7a9ed4] to-transparent mx-auto mt-4 rounded-full"></div>
            <p className={`${cairo.className} text-gray-600 mt-4 text-sm sm:text-base max-w-2xl mx-auto`}>
              نقدم لك مجموعة متكاملة من الحلول العقارية لتحقيق أهدافك بكل احترافية وثقة
            </p>
          </motion.div>
        </div>
      </section>

      {/* جميع الخدمات */}
      <Management />
      <Sale />
      <Buying />
      <Offplan />
    </div>
  )
}

export default Services;