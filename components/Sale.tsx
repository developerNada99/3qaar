"use client";

import React from 'react';
import Image from "next/image";
import { motion } from "framer-motion";
import { Cairo } from "next/font/google";

const cairo = Cairo({
  subsets: ["arabic"],
  weight: ["400", "600", "700"],
});

const Sale = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 bg-white" dir="rtl">
      <div className="max-w-6xl mx-auto">
        
        {/* المحتوى: صورة + نص */}
        <div className="flex max-md:flex-col-reverse gap-8 lg:gap-12 items-center">
          
                    {/* قسم النص */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 space-y-4 text-center lg:text-right"
          >
            <h3 className={`${cairo.className} text-xl sm:text-2xl md:text-3xl font-bold text-gray-800`}>
              <span className="text-[#274b97]">بيع</span> عقارك بأعلى سعر
            </h3>
            
            <p className={`${cairo.className} text-gray-600 leading-relaxed text-sm sm:text-base md:text-lg`}>
              نقدم في <span className="text-[#274b97] font-semibold">مؤسسة بوابة الطائف العقارية</span> خدمات متكاملة لبيع العقارات تشمل تقييم دقيق 
              لعقارك، تسويقه بأحدث الأساليب، والوصول إلى أكبر شريحة من المشترين المحتملين. 
              نضمن لك تحقيق أعلى عائد ممكن من بيع عقارك في أقل وقت.
            </p>
            
            <p className={`${cairo.className} text-gray-600 leading-relaxed text-sm sm:text-base`}>
              فريقنا المتخصص يدير عملية البيع من البداية إلى النهاية، بدءاً من تجهيز 
              العقار وتصويره احترافياً، مروراً بالتفاوض مع المشترين، وصولاً إلى إنهاء 
              إجراءات البيع ونقل الملكية بأمان وشفافية تامة.
            </p>
          </motion.div>
          {/* قسم الصورة */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2"
          >
            <div className="rounded-2xl overflow-hidden shadow-xl relative w-full aspect-4/3">
              <Image
                src="/sales.jpg"
                alt="بيع العقارات"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </motion.div>
          
        

        </div>
      </div>
    </section>
  );
};

export default Sale;