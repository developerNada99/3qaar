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
          {/* Overlay */}
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setShow(false)}
            className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
          />

          {/* Popup */}
          <motion.div
            key="popup"
            initial={{ opacity: 0, scale: 0.88, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            transition={{ duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
            dir="rtl"
            className={`${cairo.className} fixed z-50 inset-x-4 top-1/2 -translate-y-1/2
                        sm:inset-auto sm:top-1/2 sm:left-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2
                        w-full sm:w-[440px] bg-white rounded-3xl overflow-hidden shadow-2xl`}
          >
            {/* الشريط العلوي */}
            <div className="h-1.5 bg-gradient-to-l from-[#274b97] via-[#7a9ed4] to-transparent" />

            {/* زر الإغلاق */}
            <button
              onClick={() => setShow(false)}
              className="absolute top-4 left-4 w-8 h-8 flex items-center justify-center
                         rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-200"
            >
              <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4" stroke="#6b7280" strokeWidth={2.5}>
                <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
              </svg>
            </button>

            {/* المحتوى */}
            <div className="px-8 pt-8 pb-8">

              {/* الأيقونة */}
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.4, type: "spring" }}
                className="w-16 h-16 rounded-2xl bg-[#274b97]/8 border border-[#274b97]/15
                           flex items-center justify-center mb-5 mx-auto"
              >
                <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8 text-[#274b97]" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                </svg>
              </motion.div>

              {/* النص */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25, duration: 0.4 }}
                className="text-center mb-7"
              >
                <p className="text-[#274b97] text-xs tracking-[0.35em] font-bold uppercase mb-2">
                  بوابة الطائف العقارية
                </p>

                <h2 className="text-[#0e1d3d] text-2xl font-extrabold leading-snug mb-3">
                  اكتشف{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-l from-[#274b97] to-[#7a9ed4]">
                    عروضنا الحالية
                  </span>
                </h2>

                {/* خط تزييني */}
                <div className="flex justify-center gap-1.5 items-center mb-4">
                  <div className="w-8 h-0.5 bg-[#274b97] rounded-full" />
                  <div className="w-2 h-2 border-2 border-[#274b97] rotate-45 rounded-sm" />
                  <div className="w-8 h-0.5 bg-[#274b97] rounded-full" />
                </div>

                <p className="text-gray-500 text-sm leading-relaxed max-w-xs mx-auto">
                  أراضي، عمائر، شقق تمليك، ومزارع في أفضل مواقع الطائف — بأسعار تنافسية وضمانات موثوقة.
                </p>
              </motion.div>

              {/* الأزرار */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.4 }}
                className="flex flex-col gap-3"
              >
                {/* زر اكتشف الآن */}
                <Link
                  href="/offers"
                  onClick={() => setShow(false)}
                  className="relative flex items-center justify-center gap-2.5 px-6 py-3.5
                             rounded-2xl bg-[#274b97] text-white text-sm font-bold
                             shadow-lg shadow-[#274b97]/25 hover:bg-[#1f3d7a]
                             overflow-hidden group transition-colors duration-300"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    اكتشف الآن
                    <svg className="w-4 h-4 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
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

                {/* زر إغلاق */}
                <button
                  onClick={() => setShow(false)}
                  className="px-6 py-3 rounded-2xl border border-gray-200 text-gray-500
                             text-sm font-semibold hover:bg-gray-50 transition-colors duration-200"
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