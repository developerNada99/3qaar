"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Cairo } from "next/font/google";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const cairo = Cairo({
  subsets: ["arabic"],
  weight: ["400", "600", "700"],
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

const Contact = () => {
  const whatsappNumber = "966559002060";
  const whatsappLink = `https://wa.me/${whatsappNumber}`;
  const phoneNumber = "966559002060";
  const googleMapsLink = "https://www.google.com/maps/place/%D9%85%D8%A4%D8%B3%D8%B3%D8%A9+%D8%A8%D9%88%D8%A7%D8%A8%D8%A9+%D8%A7%D9%84%D8%B7%D8%A7%D8%A6%D9%81+%D8%A7%D9%84%D8%B9%D9%82%D8%A7%D8%B1%D9%8A%D8%A9%E2%80%AD/@21.5352471,40.6238915,702m/data=!3m2!1e3!4b1!4m6!3m5!1s0x15ea35c92b1ed10d:0xba313713c2bb2b69!8m2!3d21.5352421!4d40.6213166!16s%2Fg%2F11vjl5xkxg?hl=ar&entry=ttu&g_ep=EgoyMDI2MDUyNy4wIKXMDSoASAFQAw%3D%3D";

  return (
    <section className="relative py-24 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 bg-white overflow-hidden" dir="rtl">

      {/* ══ مجسمات الخلفية ══ */}
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
              background: s.filled ? "rgba(39,75,151,0.05)" : "transparent",
              border: s.filled ? "none" : "2px solid rgba(39,75,151,0.10)",
              transform: `rotate(${s.rotate}deg)`,
            }}
          />
        ))}
        <svg className="absolute inset-0 w-full h-full opacity-[0.025]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="contactgrid" width="52" height="52" patternUnits="userSpaceOnUse">
              <path d="M 52 0 L 0 0 0 52" fill="none" stroke="#274b97" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#contactgrid)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* العنوان */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <p className={`${cairo.className} text-sm text-[#274b97] font-semibold`}>
            تواصل معنا
          </p>
          <h2 className={`${cairo.className} text-3xl md:text-5xl font-bold text-gray-800 mt-2 mb-4`}>
            <span className="text-[#274b97]">نحن</span> هنا لخدمتك
          </h2>
          <div className="flex justify-center mt-3 mb-4 gap-1.5 items-center">
            <div className="w-10 h-0.5 bg-[#274b97] rounded-full" />
            <div className="w-2.5 h-2.5 border-2 border-[#274b97] rotate-45 rounded-sm" />
            <div className="w-10 h-0.5 bg-[#274b97] rounded-full" />
          </div>
          <p className={`${cairo.className} text-gray-500 mt-4 text-sm max-w-2xl mx-auto`}>
            تواصل معنا عبر أي من القنوات التالية وسنرد عليك في أقرب وقت
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">

          {/* معلومات التواصل */}
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-[#274b97]/8">
              <h3 className={`${cairo.className} text-xl font-bold text-gray-800 mb-6 flex items-center gap-2`}>
                <FaWhatsapp className="w-6 h-6 text-green-600" />
                معلومات التواصل
              </h3>
              <div className="space-y-5">

                {/* الهاتف */}
                <div className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50 transition-colors">
                  <div className="bg-[#274b97]/10 p-3 rounded-full">
                    <Phone className="w-5 h-5 text-[#274b97]" />
                  </div>
                  <div>
                    <p className={`${cairo.className} text-sm text-gray-500`}>رقم الهاتف</p>
                    <a href={`tel:+${phoneNumber}`} dir="ltr" className="font-semibold text-gray-800 hover:text-[#274b97]">
                      +966 55 900 2060
                    </a>
                  </div>
                </div>

                {/* واتساب */}
                <div className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50 transition-colors">
                  <div className="bg-green-100 p-3 rounded-full">
                    <FaWhatsapp className="w-5 h-5 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-500">واتساب</p>
                    <a href={whatsappLink} target="_blank" dir="ltr" className="font-semibold text-gray-800 hover:text-green-600">
                      +966 55 900 2060
                    </a>
                  </div>
                  <motion.a
                    href={whatsappLink}
                    target="_blank"
                    whileHover={{ scale: 1.05 }}
                    className="bg-green-600 text-white px-4 py-2 rounded-full text-sm font-semibold"
                  >
                    تواصل
                  </motion.a>
                </div>

                {/* ايميل */}
                <div className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50 transition-colors">
                  <div className="bg-[#274b97]/10 p-3 rounded-full">
                    <Mail className="w-5 h-5 text-[#274b97]" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">البريد الإلكتروني</p>
                    <a href="mailto:3qeertaif@gmail.com" className="font-semibold text-gray-800 hover:text-[#274b97]">
                      3qeertaif@gmail.com
                    </a>
                  </div>
                </div>

                {/* العنوان */}
                <div className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50 transition-colors">
                  <div className="bg-[#274b97]/10 p-3 rounded-full">
                    <MapPin className="w-5 h-5 text-[#274b97]" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">العنوان</p>
                    <p className="font-semibold text-gray-800 leading-relaxed">
                      TFGA7544، 5736 حذيفة ابن امية, C13، 7544
                      <br />
                      Taif 26331, Saudi Arabia
                    </p>
                  </div>
                </div>

                {/* ساعات العمل */}
                <div className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50 transition-colors">
                  <div className="bg-[#274b97]/10 p-3 rounded-full">
                    <Clock className="w-5 h-5 text-[#274b97]" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">ساعات العمل</p>
                    <p className="font-semibold text-gray-800">
                      السبت - الخميس: 3.30 مساءً - 12 مساءً
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </motion.div>

          {/* الخريطة */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div
              className="bg-white rounded-2xl overflow-hidden shadow-lg border border-[#274b97]/8 cursor-pointer"
              onClick={() => window.open(googleMapsLink, '_blank')}
              role="button"
              aria-label="افتح الموقع على خرائط جوجل"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3024.123456789!2d40.5087!3d21.4326!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDI1JzU3LjQiTiA0MMKwMzAnMzEuMyJF!5e0!3m2!1sar!2ssa!4v1234567890"
                width="100%"
                height="350"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="موقع مؤسسة بوابة الطائف العقارية"
              />
              <div className="text-center py-2 text-sm text-[#274b97] bg-gray-50 border-t border-[#274b97]/8">
                اضغط هنا للفتح في خرائط جوجل
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;