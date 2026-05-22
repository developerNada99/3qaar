"use client";
import React from 'react';
import { motion } from "framer-motion";
import { Cairo } from "next/font/google";
import Image from "next/image";

const cairo = Cairo({
  subsets: ["arabic"],
  weight: ["400", "600", "700"],
});

const HeroSection = () => {
  const whatsappNumber = "966559002060";
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  return (
    <section className="relative w-full h-screen overflow-hidden" dir="rtl">
      
      {/* الخلفية */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/herosec.jpg"
          alt="خلفية"
          fill
          priority
          className="object-cover"
        />
      </div>
      
      {/* طبقة غامقة فقط (بدون تدرج) */}
      <div className="absolute inset-0 backdrop-blur-xl bg-white/5 shadow-lg"></div>
      
      {/* المحتوى */}
      <div className="relative z-10 flex flex-col items-center justify-end h-full text-center px-6 pb-20 sm:pb-28 md:pb-32">
        
        {/* النص الرئيسي - يظهر سطر سطر وببطء */}
        <div className="max-w-4xl">
          
          {/* السطر الأول: بوابة الطائف العقارية */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className={`${cairo.className} text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4`}
          >
            مؤسسة بوابة <span className="text-[#7a9ed4]">الطائف</span> العقارية
          </motion.h1>
          
          {/* السطر الثاني: وجهتكم الأولى للاستثمار الآمن في مخططات العرفاء */}
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
            className={`${cairo.className} text-2xl sm:text-3xl md:text-4xl font-semibold text-[#7a9ed4] mb-6`}
          >
            وجهتكم الأولى للاستثمار الآمن في مخططات العرفاء
          </motion.p>
          
          {/* السطر الثالث: الوصف الطويل */}
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 1.0, ease: "easeOut" }}
            className={`${cairo.className} text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed max-w-2xl mx-auto`}
          >
            نفتح لكم أبواب الفرص العقارية في شمال الطائف. بيع، شراء، إدارة أملاك، وتطوير وفق أعلى معايير الموثوقية.
          </motion.p>
          
          {/* السطر الرابع: الزر - لون مطابق للتصميم */}
        <motion.a
  href={whatsappLink}
  target="_blank"
  rel="noopener noreferrer"
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1.2, delay: 1.5, ease: "easeOut" }}
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  className="inline-flex items-center gap-2 mt-8 px-8 py-3 bg-[#274b97] text-white font-semibold rounded-full shadow-lg hover:bg-[#1f3d7a] transition-all duration-300"
>
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.967-.94 1.165-.173.199-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.447-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.5-.67-.51-.173-.01-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
  </svg>
  تواصل معنا عبر واتساب
</motion.a>
          
        </div>
        
      </div>
    </section>
  );
};

export default HeroSection;