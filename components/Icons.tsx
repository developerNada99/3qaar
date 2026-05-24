"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from "framer-motion";
import { Cairo } from "next/font/google";
import { 
  TrendingUp, 
  Building2, 
  ShoppingCart,
  Map,
  ArrowLeft,
} from "lucide-react";
import Link from 'next/link';

const cairo = Cairo({
  subsets: ["arabic"],
  weight: ["400", "600", "700"],
});

const Icons = () => {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // تأثير بارالاكس ناعم
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);

  const services = [
    { name: "بيع عقارات", icon: TrendingUp, desc: "نبيع عقارك بأعلى عائد وبأسرع وقت", href: "/sale" },
    { name: "شراء عقارات", icon: ShoppingCart, desc: "نساعدك في شراء العقار المناسب بأفضل سعر", href: "/buying" },
    { name: "إدارة الأملاك", icon: Building2, desc: "ندير ممتلكاتك بكل احترافية وكفاءة", href: "/management" },
    { name: "بيع على الخارطة", icon: Map, desc: "أحدث المشاريع العقارية بنظام البيع على الخارطة", href: "/offplan" },
  ];

  return (
    <section 
      ref={sectionRef}
      className="relative py-20 px-4 sm:px-6 md:px-8 overflow-hidden"
      dir="rtl"
    >

      {/* الخلفية مع تأثير بارالاكس */}
      <motion.div 
        style={{ y, scale }}
        className="absolute inset-0 w-full h-full"
      >
        <div className="w-full h-full bg-[url(/icons.jpg)] bg-cover bg-center"></div>
      </motion.div>

      {/* طبقة داكنة */}
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* العنوان */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className={`${cairo.className} text-sm text-[#7a9ed4] font-semibold tracking-wider`}>
            ماذا نقدم لك؟
          </p>

          <h2 className={`${cairo.className} text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-2`}>
            خدماتنا <span className="text-[#7a9ed4]">العقارية</span>
          </h2>

          <div className="w-20 h-0.5 bg-linear-to-r from-[#7a9ed4] to-transparent mx-auto mt-4 rounded-full"></div>
        </motion.div>

        {/* الكروت */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Link href={service.href} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8 }}
                  className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-6 
                  shadow-lg hover:shadow-2xl hover:bg-white/15 transition-all duration-300 group h-full"
                >

                  {/* أيقونة */}
                  <div className="flex justify-center mb-4">
                    <div className="bg-white/10 backdrop-blur-sm p-4 rounded-2xl group-hover:rounded-full transition-all duration-300">
                      <Icon className="w-14 h-14 text-[#7a9ed4] group-hover:scale-110 transition-transform duration-300" />
                    </div>
                  </div>

                  {/* عنوان الخدمة */}
                  <h3 className={`${cairo.className} text-xl font-bold text-white text-center mb-2`}>
                    {service.name}
                  </h3>

                  {/* وصف الخدمة */}
                  <p className={`${cairo.className} text-gray-200 text-sm text-center leading-relaxed`}>
                    {service.desc}
                  </p>

                  {/* معرفة المزيد */}
                  <div className="flex justify-center mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-[#7a9ed4] text-sm font-semibold flex items-center gap-1">
                      معرفة المزيد <ArrowLeft className="w-4 h-4" />
                    </span>
                  </div>

                </motion.div>
              </Link>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Icons;