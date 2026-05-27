"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Cairo } from "next/font/google";

const cairo = Cairo({
  subsets: ["arabic"],
  weight: ["400", "600", "700"],
});

/* ── مربعات الخلفية الديكورية ── */
const BG_SHAPES = [
  // مربعات صلبة كبيرة — شفافية خفيفة
  { x: "4%",  y: "8%",  size: 72, filled: true,  rotate: 18,  delay: 0    },
  { x: "88%", y: "6%",  size: 56, filled: true,  rotate: -12, delay: 0.2  },
  { x: "92%", y: "72%", size: 80, filled: true,  rotate: 30,  delay: 0.4  },
  { x: "1%",  y: "78%", size: 64, filled: true,  rotate: -20, delay: 0.15 },
  // مربعات مفرغة
  { x: "14%", y: "2%",  size: 44, filled: false, rotate: 10,  delay: 0.3  },
  { x: "76%", y: "14%", size: 60, filled: false, rotate: -25, delay: 0.1  },
  { x: "60%", y: "80%", size: 50, filled: false, rotate: 15,  delay: 0.35 },
  { x: "28%", y: "85%", size: 36, filled: false, rotate: -8,  delay: 0.25 },
  { x: "48%", y: "0%",  size: 28, filled: false, rotate: 45,  delay: 0.5  },
  { x: "82%", y: "45%", size: 22, filled: false, rotate: -35, delay: 0.45 },
  { x: "5%",  y: "48%", size: 30, filled: false, rotate: 20,  delay: 0.6  },
  // مربعات صلبة صغيرة
  { x: "38%", y: "5%",  size: 18, filled: true,  rotate: 38,  delay: 0.7  },
  { x: "70%", y: "60%", size: 14, filled: true,  rotate: -50, delay: 0.55 },
  { x: "22%", y: "62%", size: 20, filled: true,  rotate: 22,  delay: 0.65 },
];

export default function Images() {
  return (
    <section
      className={`${cairo.className} relative py-20 sm:py-28 px-4 sm:px-6 md:px-10 bg-white overflow-hidden`}
      dir="rtl"
    >
      {/* ═══ خلفية المجسمات الهندسية ═══ */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        {BG_SHAPES.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.5, rotate: s.rotate - 20 }}
            whileInView={{ opacity: 1, scale: 1, rotate: s.rotate }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: s.delay, ease: "easeOut" }}
            style={{
              position: "absolute",
              left: s.x,
              top: s.y,
              width: s.size,
              height: s.size,
              transform: `rotate(${s.rotate}deg)`,
              borderRadius: "4px",
              background: s.filled ? "rgba(39,75,151,0.06)" : "transparent",
              border: s.filled ? "none" : "2px solid rgba(39,75,151,0.12)",
            }}
          />
        ))}

        {/* خطوط شبكة خلفية */}
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.04]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern id="grid" width="48" height="48" patternUnits="userSpaceOnUse">
              <path d="M 48 0 L 0 0 0 48" fill="none" stroke="#274b97" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative max-w-6xl mx-auto">

        {/* ══ العنوان ══ */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          {/* شريط علوي صغير */}
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-10 bg-[#274b97]/40" />
            <span className="text-[#274b97] text-xs tracking-[0.35em] font-semibold uppercase">
              من نحن
            </span>
            <div className="h-px w-10 bg-[#274b97]/40" />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 leading-snug">
                      <span className="text-transparent bg-clip-text bg-linear-to-l from-[#7a9ed4] to-[#274b97]">
بوابة الطائف</span> العقارية
          </h2>

          {/* خط تزييني تحت العنوان */}
          <div className="flex justify-center mt-5 gap-1.5 items-center">
            <div className="w-10 h-0.5 bg-[#274b97] rounded-full" />
            <div className="w-2.5 h-2.5 border-2 border-[#274b97] rotate-45 rounded-sm" />
            <div className="w-10 h-0.5 bg-[#274b97] rounded-full" />
          </div>
        </motion.div>

        {/* ══ المحتوى الرئيسي ══ */}
        <div className="flex flex-col lg:flex-row gap-12 items-center">

          {/* ─── الصور بتخطيط متداخل ─── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 relative"
            style={{ minHeight: 360 }}
          >
            {/* إطار ديكوري خلف الصور */}
            <div className="absolute -top-4 -right-4 w-48 h-56 border-2 border-[#274b97]/20 rounded-2xl z-0" />
            <div className="absolute -bottom-4 -left-4 w-36 h-44 border border-[#274b97]/15 rounded-2xl z-0" />

            {/* مربع لون صلب صغير */}
            <div className="absolute top-2 left-2 w-10 h-10 bg-[#274b97]/08 rotate-12 rounded z-0" />

            <div className="flex gap-3 justify-center items-end relative z-10">
              {/* صورة 1 — أطول */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="relative w-1/3 rounded-2xl overflow-hidden shadow-lg"
                style={{ height: 300 }}
                whileHover={{ scale: 1.03 }}
              >
                <Image src="/img1.png" alt="عقار" fill sizes="25vw" className="object-cover" />
                <div className="absolute inset-0 bg-linear-to-t from-[#274b97]/30 to-transparent" />
              </motion.div>

              {/* صورة 2 — متوسطة */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.35 }}
                viewport={{ once: true }}
                className="relative w-1/3 rounded-2xl overflow-hidden shadow-xl -mb-6"
                style={{ height: 270 }}
                whileHover={{ scale: 1.03 }}
              >
                <Image src="/img2.png" alt="عقار" fill sizes="25vw" className="object-cover" />
                <div className="absolute inset-0 bg-linear-to-t from-[#274b97]/25 to-transparent" />
              </motion.div>

              {/* صورة 3 — أقصر */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
                className="relative w-1/3 rounded-2xl overflow-hidden shadow-md -mb-12"
                style={{ height: 240 }}
                whileHover={{ scale: 1.03 }}
              >
                <Image src="/img3.jpg" alt="عقار" fill sizes="25vw" className="object-cover" />
                <div className="absolute inset-0 bg-linear-to-t from-[#274b97]/20 to-transparent" />
              </motion.div>
            </div>

            {/* بادج تحت الصور */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.7 }}
              viewport={{ once: true }}
              className="relative z-10 mt-10 flex justify-center"
            >
              <div className="inline-flex items-center gap-3 bg-[#274b97]/05 mt-10 border border-[#274b97]/15 rounded-xl px-5 py-2.5">
                <div className="w-2 h-2 rounded-sm bg-[#274b97] rotate-45" />
                <span className="text-[#274b97] text-sm font-semibold">خبرة تمتد لسنوات في سوق الطائف</span>
                <div className="w-2 h-2 rounded-sm bg-[#274b97] rotate-45" />
              </div>
            </motion.div>
          </motion.div>

          {/* ─── النص ─── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 space-y-6"
          >
            {/* فقرة 1 */}
            <div className="relative pr-5 border-r-2 border-[#274b97]/30">
              <p className="text-gray-600 leading-relaxed text-base sm:text-lg text-center lg:text-right">
                في مؤسسة{" "}
                <span className="text-[#274b97] font-semibold">بوابة الطائف العقارية</span>،
                لا نبيع مجرد عقارات، بل نصنع{" "}
                <span className="text-[#274b97] font-semibold">فرصاً استثمارية مستدامة</span>.
              </p>
            </div>

            {/* فقرة 2 */}
            <div className="relative pr-5 border-r-2 border-[#274b97]/15">
              <p className="text-gray-600 leading-relaxed text-base sm:text-lg text-center lg:text-right">
                نضع كامل خبرتنا ومعرفتنا العميقة بالسوق العقاري في مدينة الطائف ومخططاتها الحيوية
                لنقدم لكم أفضل الأراضي والمشاريع التي تلبي تطلعاتكم المستقبلية، سواء كنتم تبحثون
                عن{" "}
                <span className="text-[#274b97] font-semibold">السكن الملائم</span> أو{" "}
                <span className="text-[#274b97] font-semibold">الاستثمار المربح</span>.
              </p>
            </div>

            {/* أرقام إحصائية */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45 }}
              viewport={{ once: true }}
              className="grid grid-cols-3 gap-3 pt-2"
            >
              {[
                { num: "+500", label: "عميل سعيد" },
                { num: "+200", label: "عقار منجز" },
                { num: "10+", label: "سنوات خبرة" },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="relative text-center py-4 px-2 rounded-xl border border-[#274b97]/12 bg-[#274b97]/03 overflow-hidden group"
                >
                  {/* مربع ديكوري داخل البادج */}
                  <div className="absolute -top-2 -right-2 w-6 h-6 border border-[#274b97]/15 rotate-45 rounded-sm" />
                  <div className="text-[#274b97] text-2xl font-bold">{stat.num}</div>
                  <div className="text-gray-500 text-xs mt-1">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}