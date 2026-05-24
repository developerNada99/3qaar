"use client";

import React from 'react';
import Image from "next/image";
import { motion } from "framer-motion";
import { Cairo } from "next/font/google";

const cairo = Cairo({
  subsets: ["arabic"],
  weight: ["400", "600", "700"],
});

const Offplan = () => {
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
              <span className="text-[#274b97]">البيع على الخارطة</span>
            </h3>
            
            <p className={`${cairo.className} text-gray-600 leading-relaxed text-sm sm:text-base md:text-lg`}>
              نقدم في <span className="text-[#274b97] font-semibold">مؤسسة بوابة الطائف العقارية</span> أحدث المشاريع العقارية بنظام 
              <span className="text-[#274b97] font-semibold"> البيع على الخارطة</span>، حيث يمكنك شراء وحدتك السكنية أو التجارية قبل الإنشاء 
              بأسعار تنافسية وخطط سداد مرنة.
            </p>
            
            <p className={`${cairo.className} text-gray-600 leading-relaxed text-sm sm:text-base`}>
              نوفر لك فرصة الاستثمار المبكر في المشاريع العقارية الجديدة في شمال الطائف، 
              مع ضمان أعلى معايير الجودة والالتزام بمواعيد التسليم. فريقنا القانوني 
              يضمن لك عقود آمنة وشفافة تحمي حقوقك وتضمن لك أفضل العوائد على استثمارك.
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
                src="/offplan.jpg"
                alt="البيع على الخارطة"
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

export default Offplan;