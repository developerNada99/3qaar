"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Cairo } from "next/font/google";

const cairo = Cairo({
  subsets: ["arabic"],
  weight: ["400", "600", "700"],
});

const About = () => {
  return (
    <section className="py-12 h-full sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 bg-white" dir="rtl">
      <div className="max-w-6xl mx-auto mt-10">
        
        {/* عنوان القسم */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 2 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-10 md:mb-12"
        >
          <h2 className={`${cairo.className} text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800`}>
            من <span className="text-[#274b97]">نحن</span>
          </h2>
          <div className="w-20 h-0.5 bg-linear-to-r from-[#7a9ed4] to-transparent mx-auto mt-4 rounded-full"></div>
        </motion.div>

        {/* محتوى الصور المتعددة + النبذة */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
          
          {/* قسم الصور */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 2 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 flex justify-center"
          >
            <div className="relative w-70 sm:w-90 md:w-105 aspect-square">
              {/* الخلفية */}
              <div className="absolute top-0 right-0 w-[40%] aspect-square 
                              rounded-2xl overflow-hidden shadow-lg bg-[#274b97]/30">
               
              </div>

              {/* الوسط */}
              <div className="absolute bottom-0 -left-9 w-[55%] aspect-square 
                              rounded-2xl overflow-hidden shadow-lg bg-[#7a9ed4]">
               
              </div>

              {/* الرئيسية */}
              <div className="absolute inset-0 m-auto w-[70%] aspect-square 
                              rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/herosec.jpg"
                  alt="مؤسسة بوابة الطائف العقارية"
                  fill
                  priority
                  sizes="(max-width: 640px) 45vw, (max-width: 768px) 40vw, 35vw"
                  className="object-cover hover:scale-105 transition duration-500"
                />
              </div>
            </div>
          </motion.div>

          {/* النبذة - النص المعدل */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 2 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 space-y-4 sm:space-y-5 text-center lg:text-right"
          >
            <h3 className={`${cairo.className} text-xl sm:text-2xl md:text-3xl font-bold text-gray-800`}>
              مؤسسة <span className="text-[#274b97]">بوابة الطائف</span> العقارية
            </h3>
            
            <p className={`${cairo.className} text-gray-600 leading-relaxed text-sm sm:text-base md:text-lg`}>
              <span className="text-[#274b97] font-semibold">مؤسسة بوابة الطائف العقارية</span> هي مؤسسة سعودية رائدة ومتخصصة في قطاع التطوير والتسويق العقاري في مدينة الطائف، 
              تأسست وتُقاد بإشراف وتوجيه من صاحب المؤسسة <span className="text-[#274b97] font-semibold">الأستاذ/ عبدالرحمن العمري (أبو سعد)</span>.
            </p>
            
            <p className={`${cairo.className} text-gray-600 leading-relaxed text-sm sm:text-base md:text-lg`}>
              انطلقنا برؤية طموحة تهدف إلى تقديم حلول عقارية متكاملة وذكية تتواكب مع النهضة العمرانية الشاملة التي تشهدها المملكة وفق 
              <span className="text-[#274b97] font-semibold"> رؤية 2030</span>.
            </p>
            
            <p className={`${cairo.className} text-gray-600 leading-relaxed text-sm sm:text-base`}>
              ونرتكز في عملنا على قيم <span className="text-[#274b97] font-semibold">الشفافية، المصداقية، والمعرفة الدقيقة</span> بأحياء ومخططات الطائف. 
              نسعى دائماً لبناء علاقات مستدامة مع عملائنا من خلال تقديم استشارات عقارية موثوقة، وإدارة احترافية للأملاك، 
              ومشاريع استثمارية تضمن أعلى مستويات الأمان والربحية.
            </p>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default About;