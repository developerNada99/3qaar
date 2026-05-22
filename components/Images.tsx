"use client";

import React from 'react';
import Image from "next/image";
import { motion } from "framer-motion";
import { Cairo } from "next/font/google";

const cairo = Cairo({
  subsets: ["arabic"],
  weight: ["400", "600", "700"],
});

const Images = () => {
  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 md:px-8 bg-white" dir="rtl">
      <div className="max-w-6xl mx-auto">
        
        {/* عنوان القسم */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className={`${cairo.className} text-3xl sm:text-4xl font-bold text-gray-800`}>
            <span className="text-[#274b97]">بوابة الطائف</span> العقارية
          </h2>
          <div className="w-16 h-0.5 bg-[#274b97] mx-auto mt-4 rounded-full"></div>
        </motion.div>

        {/* المحتوى */}
        <div className="flex flex-col lg:flex-row gap-10 items-center">
          
          {/* 3 صور */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2"
          >
            <div className="flex gap-3 justify-center items-end">
              
              <div className="relative w-1/3 h-80 rounded-2xl overflow-hidden">
                <Image
                  src="/img1.png"
                  alt="عقار"
                  fill
                                  className="object-cover"
                                 
                />
              </div>

              <div className="relative w-1/3 h-72 rounded-2xl overflow-hidden -mb-8">
                <Image
                  src="/img2.png"
                  alt="عقار"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="relative w-1/3 h-64 rounded-2xl overflow-hidden -mb-16">
                <Image
                  src="/img3.jpg"
                  alt="عقار"
                  fill
                  className="object-cover"
                />
              </div>

            </div>
          </motion.div>

          {/* النص الجديد */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 text-center lg:text-right mt-10"
          >
            <p className={`${cairo.className} text-gray-600 leading-relaxed text-base sm:text-lg`}>
              في مؤسسة <span className="text-[#274b97] font-semibold">بوابة الطائف العقارية</span>، 
              لا نبيع مجرد عقارات، بل نصنع <span className="text-[#274b97] font-semibold">فرصاً استثمارية مستدامة</span>.
            </p>
            
            <p className={`${cairo.className} text-gray-600 leading-relaxed text-base sm:text-lg mt-4`}>
              نركز خبرتنا في <span className="text-[#274b97] font-semibold">شمال الطائف</span> 
              وتحديداً في <span className="text-[#274b97] font-semibold">مخططات العرفاء</span> 
              لنقدم لكم أفضل الأراضي والمشاريع التي تلبي تطلعاتكم المستقبلية، سواء كنتم تبحثون عن السكن أو الاستثمار المربح.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Images;