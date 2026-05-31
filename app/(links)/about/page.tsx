"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Cairo } from "next/font/google";

const cairo = Cairo({
  subsets: ["arabic"],
  weight: ["400", "600", "700", "800"],
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



const About = () => {
  return (
    <section
      className={`${cairo.className} relative py-24 px-4 sm:px-6 md:px-8 bg-[#f0f4fb] overflow-hidden`}
      dir="rtl"
    >
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
              background: s.filled ? "rgba(39,75,151,0.07)" : "transparent",
              border: s.filled ? "none" : "2px solid rgba(39,75,151,0.13)",
              transform: `rotate(${s.rotate}deg)`,
            }}
          />
        ))}
        <svg className="absolute inset-0 w-full h-full opacity-[0.035]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="aboutgrid" width="52" height="52" patternUnits="userSpaceOnUse">
              <path d="M 52 0 L 0 0 0 52" fill="none" stroke="#274b97" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#aboutgrid)" />
        </svg>
      </div>

      {/* خط علوي */}

      <div className="relative z-10 max-w-6xl mx-auto mt-10">

        {/* ══ Header ══ */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-4 mb-4"
          >
            <div className="h-px w-16 bg-linear-to-l from-[#274b97] to-transparent" />
            <span className="text-[#274b97] text-xs tracking-[0.4em] font-bold uppercase border border-[#274b97]/25 rounded-full px-4 py-1.5 bg-[#274b97]/5">
              تعرف علينا
            </span>
            <div className="h-px w-16 bg-linear-to-r from-[#274b97] to-transparent" />
          </motion.div>

          <h2 className="text-[#0e1d3d] text-4xl md:text-5xl font-black leading-tight">
            من{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-l from-[#274b97] to-[#3c63ac]">
              نحن
            </span>
          </h2>

          <div className="flex justify-center mt-4 gap-1.5 items-center">
            <div className="w-10 h-0.5 bg-[#274b97] rounded-full" />
            <div className="w-2.5 h-2.5 border-2 border-[#274b97] rotate-45 rounded-sm" />
            <div className="w-10 h-0.5 bg-[#274b97] rounded-full" />
          </div>
        </motion.div>

        {/* ══ المحتوى ══ */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">

          {/* ── قسم الصورة الجديد ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 flex justify-center"
          >
            <div className="relative w-full max-w-md">

              {/* الصورة الرئيسية */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-4/3">
                <Image
                  src="/herosec.jpg"
                  alt="مؤسسة بوابة الطائف العقارية"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover hover:scale-105 transition duration-700"
                />
                {/* تدرج على الصورة */}
                <div className="absolute inset-0 bg-linear-to-t from-[#0e1d3d]/60 via-transparent to-transparent" />

                {/* بادج اسم المؤسسة */}
                <div className="absolute bottom-4 right-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-4 py-2">
                  <p className="text-white text-xs font-bold tracking-wide">بوابة الطائف العقارية</p>
                  <p className="text-white/60 text-[10px]">Taif Real Estate Portal</p>
                </div>
              </div>



              {/* مربع زخرفي خلف الصورة */}
              <div className="absolute -top-4 -right-4 w-24 h-24 rounded-2xl border-2 border-[#274b97]/20 -z-10" />
              <div className="absolute -bottom-2 -right-2 w-16 h-16 rounded-xl bg-[#274b97]/8 -z-10" />
            </div>
          </motion.div>

          {/* ── النص ── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="w-full lg:w-1/2 space-y-5"
          >
            <h3 className="text-2xl md:text-3xl font-extrabold text-[#0e1d3d] leading-snug">
              مؤسسة{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-l from-[#274b97] to-[#3c63ac]">
                بوابة الطائف
              </span>{" "}
              العقارية
            </h3>

            {/* خط */}
            <div className="w-12 h-0.75 rounded-full bg-linear-to-l from-[#7a9ed4] to-[#274b97]" />

            <p className="text-gray-600 leading-relaxed text-sm sm:text-base md:text-lg">
              <span className="text-[#274b97] font-bold">مؤسسة بوابة الطائف العقارية</span> هي مؤسسة سعودية رائدة ومتخصصة في قطاع التطوير والتسويق العقاري في مدينة الطائف،
              تأسست وتُقاد بإشراف وتوجيه من صاحب المؤسسة{" "}
              <span className="text-[#274b97] font-bold">الأستاذ/ عبدالرحمن العمري (أبو سعد)</span>.
            </p>

            <p className="text-gray-600 leading-relaxed text-sm sm:text-base md:text-lg">
              انطلقنا برؤية طموحة تهدف إلى تقديم حلول عقارية متكاملة وذكية تتواكب مع النهضة العمرانية الشاملة التي تشهدها المملكة وفق{" "}
              <span className="text-[#274b97] font-bold">رؤية 2030</span>.
            </p>

            <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
              ونرتكز في عملنا على قيم{" "}
              <span className="text-[#274b97] font-bold">الشفافية، المصداقية، والمعرفة الدقيقة</span> بأحياء ومخططات الطائف.
              نسعى دائماً لبناء علاقات مستدامة مع عملائنا من خلال تقديم استشارات عقارية موثوقة، وإدارة احترافية للأملاك،
              ومشاريع استثمارية تضمن أعلى مستويات الأمان والربحية.
            </p>

            {/* قيم سريعة */}
            <div className="flex flex-wrap gap-3 pt-2">
              {["الشفافية", "المصداقية", "الاحترافية", "الأمان"].map((val) => (
                <span
                  key={val}
                  className="px-4 py-1.5 rounded-full border border-[#274b97]/20 bg-[#274b97]/5
                             text-[#274b97] text-xs font-bold"
                >
                  {val}
                </span>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;