"use client";

import React from 'react';
import Image from "next/image";
import { motion } from "framer-motion";
import { Cairo } from "next/font/google";

const cairo = Cairo({
  subsets: ["arabic"],
  weight: ["400", "600", "700"],
});

const Buying = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 bg-transparent" dir="rtl">
      <div className="max-w-6xl mx-auto">
        
        {/* المحتوى: صورة + نص */}
        <div className="flex max-md:flex-col-reverse gap-8 lg:gap-12 items-center">
          
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
                src="/buy.jpg"
                alt="شراء العقارات"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </motion.div>
          
          {/* قسم النص */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 space-y-4 text-center lg:text-right"
          >
            <h3 className={`${cairo.className} text-xl sm:text-2xl md:text-3xl font-bold text-gray-800`}>
              <span className="text-[#274b97]">شراء</span> عقارك المناسب
            </h3>
            
            <p className={`${cairo.className} text-gray-600 leading-relaxed text-sm sm:text-base md:text-lg`}>
              نساعدك في <span className="text-[#274b97] font-semibold">مؤسسة بوابة الطائف العقارية</span> على شراء العقار المناسب 
              بكل سهولة وثقة، من خلال فريق متخصص يبحث عن أفضل الفرص العقارية في السوق. 
              نقدم لك استشارات دقيقة حول القيمة السوقية للعقار، ونساعدك في إجراءات التفاوض.
            </p>
            
            <p className={`${cairo.className} text-gray-600 leading-relaxed text-sm sm:text-base`}>
              نضمن لك تجربة شراء آمنة وشفافة، بدءاً من معاينة العقارات واختيار الأنسب، 
              وصولاً إلى إنهاء إجراءات الملكية وتسجيل العقار باسمك. فريقنا القانوني 
              يحرص على توثيق جميع العقود وحماية حقوقك في كل خطوة.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Buying;