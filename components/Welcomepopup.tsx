"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Cairo } from "next/font/google";

const cairo = Cairo({
  subsets: ["arabic"],
  weight: ["400", "600", "700", "800"],
});

export default function WelcomePopup() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <>
          {/* Overlay - متجاوب مع جميع الشاشات */}
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setShow(false)}
            className="fixed inset-0 z-50 bg-black/40 sm:bg-black/50 backdrop-blur-[2px] sm:backdrop-blur-sm"
          />

          {/* Popup - متجاوب بالكامل */}
          <motion.div
            key="popup"
            initial={{ opacity: 0, scale: 0.88, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            transition={{ duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
            dir="rtl"
            className={`
              ${cairo.className} 
              fixed z-50
              /* الوضع على الموبايل (شاشات أقل من 640px) */
              inset-x-3 top-1/2 -translate-y-1/2
              w-[calc(100%-24px)] max-w-[400px] mx-auto
              
              /* الوضع على التابلت (640px - 768px) */
              sm:inset-auto sm:top-1/2 sm:left-1/2 
              sm:-translate-x-1/2 sm:-translate-y-1/2
              sm:w-[440px] sm:max-w-[90vw]
              
              /* الوضع على الشاشات المتوسطة (768px - 1024px) */
              md:w-[480px] md:max-w-[90vw]
              
              /* الوضع على الشاشات الكبيرة (1024px فأكثر) */
              lg:w-[500px]
              
              /* التصميم العام */
              bg-white rounded-2xl sm:rounded-3xl overflow-hidden 
              shadow-xl sm:shadow-2xl
            `}
          >
            {/* الشريط العلوي - متجاوب */}
            <div className="h-1 sm:h-1.5 bg-gradient-to-l from-[#274b97] via-[#7a9ed4] to-transparent" />

            {/* زر الإغلاق - متجاوب */}
            <button
              onClick={() => setShow(false)}
              className="absolute top-3 left-3 sm:top-4 sm:left-4 
                         w-7 h-7 sm:w-8 sm:h-8 
                         flex items-center justify-center
                         rounded-full bg-gray-100 hover:bg-gray-200 
                         transition-colors duration-200
                         focus:outline-none focus:ring-2 focus:ring-[#274b97]/50"
            >
              <svg viewBox="0 0 24 24" fill="none" className="w-3.5 h-3.5 sm:w-4 sm:h-4" stroke="#6b7280" strokeWidth={2.5}>
                <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
              </svg>
            </button>

            {/* المحتوى - متجاوب */}
            <div className="px-5 pt-7 pb-7 sm:px-8 sm:pt-8 sm:pb-8">

              {/* الأيقونة - متجاوبة */}
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.4, type: "spring" }}
                className="w-14 h-14 sm:w-16 sm:h-16 
                           rounded-xl sm:rounded-2xl 
                           bg-[#274b97]/8 border border-[#274b97]/15
                           flex items-center justify-center 
                           mb-4 sm:mb-5 mx-auto"
              >
                <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7 sm:w-8 sm:h-8 text-[#274b97]" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                </svg>
              </motion.div>

              {/* النص - متجاوب */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25, duration: 0.4 }}
                className="text-center mb-5 sm:mb-7"
              >
                <p className="text-[#274b97] text-[10px] sm:text-xs 
                              tracking-[0.25em] sm:tracking-[0.35em] 
                              font-bold uppercase mb-1.5 sm:mb-2">
                  بوابة الطائف العقارية
                </p>

                <h2 className="text-[#0e1d3d] text-xl sm:text-2xl md:text-[28px] 
                               font-extrabold leading-snug mb-2 sm:mb-3 px-2">
                  اكتشف{" "}
                  <span className="text-transparent bg-clip-text 
                                   bg-gradient-to-l from-[#274b97] to-[#7a9ed4]">
                    عروضنا الحالية
                  </span>
                </h2>

                {/* خط تزييني - متجاوب */}
                <div className="flex justify-center gap-1 sm:gap-1.5 items-center mb-3 sm:mb-4">
                  <div className="w-6 h-0.5 sm:w-8 sm:h-0.5 bg-[#274b97] rounded-full" />
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 border-2 border-[#274b97] rotate-45 rounded-sm" />
                  <div className="w-6 h-0.5 sm:w-8 sm:h-0.5 bg-[#274b97] rounded-full" />
                </div>

                <p className="text-gray-500 text-xs sm:text-sm 
                              leading-relaxed max-w-xs mx-auto px-3 sm:px-0">
                  أراضي، عمائر، شقق تمليك، ومزارع في أفضل مواقع الطائف 
                  — بأسعار تنافسية وضمانات موثوقة.
                </p>
              </motion.div>

              {/* الأزرار - متجاوبة */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.4 }}
                className="flex flex-col gap-2.5 sm:gap-3"
              >
                {/* زر اكتشف الآن - متجاوب */}
                <Link
                  href="/offers"
                  onClick={() => setShow(false)}
                  className="relative flex items-center justify-center 
                             gap-2 sm:gap-2.5 
                             px-4 py-3 sm:px-6 sm:py-3.5
                             rounded-xl sm:rounded-2xl 
                             bg-[#274b97] text-white 
                             text-xs sm:text-sm font-bold
                             shadow-lg shadow-[#274b97]/25 
                             hover:bg-[#1f3d7a]
                             overflow-hidden group 
                             transition-all duration-300
                             active:scale-95 sm:active:scale-100"
                >
                  <span className="relative z-10 flex items-center gap-1.5 sm:gap-2">
                    اكتشف الآن
                    <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-[#1f3d7a] origin-right"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </Link>

                {/* زر إغلاق - متجاوب */}
                <button
                  onClick={() => setShow(false)}
                  className="px-4 py-2.5 sm:px-6 sm:py-3 
                             rounded-xl sm:rounded-2xl 
                             border border-gray-200 
                             text-gray-500 text-xs sm:text-sm 
                             font-semibold 
                             hover:bg-gray-50 
                             transition-colors duration-200
                             active:bg-gray-100"
                >
                  ربما لاحقاً
                </button>
              </motion.div>

            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}