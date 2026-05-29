"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Cairo } from "next/font/google";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const cairo = Cairo({
  subsets: ["arabic"],
  weight: ["400", "600", "700"],
});

const Contact = () => {
  const whatsappNumber = "966559002060";
  const whatsappLink = `https://wa.me/${whatsappNumber}`;
  const phoneNumber = "966559002060";
  
  // Google Maps link للمؤسسة
  const googleMapsLink = "https://www.google.com/maps/place/%D9%85%D8%A4%D8%B3%D8%B3%D8%A9+%D8%A8%D9%88%D8%A7%D8%A8%D8%A9+%D8%A7%D9%84%D8%B7%D8%A7%D8%A6%D9%81+%D8%A7%D9%84%D8%B9%D9%82%D8%A7%D8%B1%D9%8A%D8%A9%E2%80%AD/@21.5352471,40.6238915,702m/data=!3m2!1e3!4b1!4m6!3m5!1s0x15ea35c92b1ed10d:0xba313713c2bb2b69!8m2!3d21.5352421!4d40.6213166!16s%2Fg%2F11vjl5xkxg?hl=ar&entry=ttu&g_ep=EgoyMDI2MDUyNy4wIKXMDSoASAFQAw%3D%3D";

  return (
    <section className="py-24 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 bg-linear-to-b from-white to-[#f9f6ec]" dir="rtl">
      <div className="max-w-6xl mx-auto">
        
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

          <div className="w-20 h-0.5 bg-linear-to-r from-[#7a9ed4] to-transparent mx-auto mt-4 rounded-full"></div>

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
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              
              <h3 className={`${cairo.className} text-xl font-bold text-gray-800 mb-6 flex items-center gap-2`}>
                <FaWhatsapp className="w-6 h-6 text-green-600" />
                معلومات التواصل
              </h3>
              
              <div className="space-y-5">

                {/* الهاتف */}
                <div className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50">
                  <div className="bg-[#274b97]/10 p-3 rounded-full">
                    <Phone className="w-5 h-5 text-[#274b97]" />
                  </div>
                  <div>
                    <p className={`${cairo.className} text-sm text-gray-500`}>رقم الهاتف</p>
                    <a href={`tel:+${phoneNumber}`} dir='ltr' className="font-semibold text-gray-800 hover:text-[#274b97]">
                      +966 55 900 2060
                    </a>
                  </div>
                </div>

                {/* واتساب */}
                <div className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50">
                  <div className="bg-green-100 p-3 rounded-full">
                    <FaWhatsapp className="w-5 h-5 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-500">واتساب</p>
                    <a href={whatsappLink} target="_blank" dir='ltr' className="font-semibold text-gray-800 hover:text-green-600">
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
                <div className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50">
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

                {/* العنوان الجديد */}
                <div className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50">
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
                <div className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50">
                  <div className="bg-[#274b97]/10 p-3 rounded-full">
                    <Clock className="w-5 h-5 text-[#274b97]" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">ساعات العمل</p>
                    <p className="font-semibold text-gray-800">
                      السبت - الخميس:  3.30 مساءً - 12 مساءً
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </motion.div>

          {/* الخريطة - عند الضغط تفتح الرابط */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div 
              className="bg-white rounded-2xl overflow-hidden shadow-lg cursor-pointer"
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
              ></iframe>
              <div className="text-center py-2 text-sm text-[#274b97] bg-gray-50 border-t">
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