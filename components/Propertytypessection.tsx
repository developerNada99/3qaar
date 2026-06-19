"use client";
import React, { useState } from "react";
import { motion, Variants, AnimatePresence } from "framer-motion";
import { Cairo } from "next/font/google";

import Amaar from "@/components/Amar";
import LandOne from "@/components/LandOne";
import Apartment from "@/components/Apartment";
import Farm from "@/components/Farm";
import LandTwo from "@/components/LandTwo";
import Invest from "@/components/Investment";
import { Property } from "@/app/actions/properties";

const cairo = Cairo({
  subsets: ["arabic"],
  weight: ["400", "600", "700", "800"],
});

const propertyTypes = [
  {
    id: 1,
    title: "أراضي",
    description: "قطع أراضي سكنية وتجارية في أفضل مواقع الطائف",
    popupKey: "landone",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <path d="M4 40h40M8 40V20l16-12 16 12v20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M16 40v-10h8v10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M28 28h4v6h-4z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    accent: "#274b97", accentLight: "#7a9ed4",
    borderColor: "border-[#274b97]/20", shadowColor: "rgba(39,75,151,0.15)",
  },
  {
    id: 2,
    title: "عمائر",
    description: "عمائر سكنية وتجارية متكاملة للاستثمار والسكن",
    popupKey: "amaar",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <rect x="6" y="10" width="36" height="30" rx="2" stroke="currentColor" strokeWidth="2"/>
        <path d="M6 20h36M6 30h36M18 10v30M30 10v30" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M24 4l-4 6h8l-4-6z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
      </svg>
    ),
    accent: "#1f3d7a", accentLight: "#5b82c4",
    borderColor: "border-[#1f3d7a]/20", shadowColor: "rgba(31,61,122,0.15)",
  },
  {
    id: 3,
    title: "شقق تمليك",
    description: "شقق تمليك بمواصفات عالية في أحياء الطائف الراقية",
    popupKey: "apartment",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <rect x="8" y="8" width="32" height="32" rx="3" stroke="currentColor" strokeWidth="2"/>
        <path d="M8 22h32M22 8v32" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="15" cy="15" r="3" stroke="currentColor" strokeWidth="2"/>
        <circle cx="33" cy="15" r="3" stroke="currentColor" strokeWidth="2"/>
        <path d="M14 33h8M26 33h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    accent: "#274b97", accentLight: "#4a9eb5",
    borderColor: "border-[#274b97]/20", shadowColor: "rgba(39,75,151,0.15)",
  },
  {
    id: 4,
    title: "مزارع",
    description: "مزارع ومساحات زراعية في الأحياء الخضراء بالطائف",
    popupKey: "farm",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <path d="M24 40V20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M24 20c0-8-8-12-8-12s0 8 8 12z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
        <path d="M24 26c0-8 8-12 8-12s0 8-8 12z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
        <path d="M8 40h32" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M12 40c0-6 4-10 4-10s4 4 4 10" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
        <path d="M28 40c0-6 4-10 4-10s4 4 4 10" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
      </svg>
    ),
    accent: "#1f6b45", accentLight: "#34a870",
    borderColor: "border-[#1f6b45]/20", shadowColor: "rgba(31,107,69,0.15)",
  },
  {
    id: 5,
    title: "أراضي خام",
    description: "أراضي خام بأسعار منافسة ومواقع استراتيجية مميزة",
    popupKey: "landtwo",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <path d="M4 36l10-14 8 8 8-12 14 18H4z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="36" cy="14" r="5" stroke="currentColor" strokeWidth="2"/>
        <path d="M36 9v2M36 17v2M31 14h2M39 14h2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    accent: "#8a5e1a", accentLight: "#c4984a",
    borderColor: "border-[#8a5e1a]/20", shadowColor: "rgba(138,94,26,0.15)",
  },
  {
    id: 6,
    title: "أخرى",
    description: "عروض وفرص عقارية متنوعة تناسب جميع الاحتياجات",
    popupKey: "invest",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <circle cx="24" cy="24" r="18" stroke="currentColor" strokeWidth="2"/>
        <circle cx="24" cy="24" r="6" stroke="currentColor" strokeWidth="2"/>
        <path d="M24 6v12M24 30v12M6 24h12M30 24h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    accent: "#5a2d8a", accentLight: "#a47ad4",
    borderColor: "border-[#5a2d8a]/20", shadowColor: "rgba(90,45,138,0.15)",
  },
];

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

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

// ══ Props اللي جايين من Server Component (page.tsx) ══
type Props = {
  landOne: Property[];
  amaar: Property[];
  apartment: Property[];
  farm: Property[];
  landTwo: Property[];
  investment: Property[];
};

const PropertyTypesSection = ({
  landOne,
  amaar,
  apartment,
  farm,
  landTwo,
  investment,
}: Props) => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [activePopup, setActivePopup] = useState<string | null>(null);

  // الـ popup components بتاخد البيانات اللي جايه من فوق
  const popupComponents: Record<string, React.ReactNode> = {
    landone:   <LandOne offers={landOne} />,
    amaar:     <Amaar offers={amaar} />,
    apartment: <Apartment offers={apartment} />,
    farm:      <Farm offers={farm} />,
    landtwo:   <LandTwo offers={landTwo} />,
    invest:    <Invest offers={investment} />,
  };

  return (
    <>
      <section dir="rtl" className={`${cairo.className} relative w-full py-24 bg-[#f0f4fb] overflow-hidden`}>

        {/* مجسمات الخلفية */}
        <div className="absolute inset-0 pointer-events-none">
          {BG_SHAPES.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.4, rotate: s.rotate - 20 }}
              whileInView={{ opacity: 1, scale: 1, rotate: s.rotate }}
              viewport={{ once: true }}
              transition={{ duration: 1.3, delay: s.delay, ease: "easeOut" }}
              style={{
                position: "absolute", left: s.x, top: s.y, width: s.size, height: s.size,
                borderRadius: "5px",
                background: s.filled ? "rgba(39,75,151,0.07)" : "transparent",
                border: s.filled ? "none" : "2px solid rgba(39,75,151,0.13)",
                transform: `rotate(${s.rotate}deg)`,
              }}
            />
          ))}
          <svg className="absolute inset-0 w-full h-full opacity-[0.035]" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="pgrid" width="52" height="52" patternUnits="userSpaceOnUse">
                <path d="M 52 0 L 0 0 0 52" fill="none" stroke="#274b97" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#pgrid)" />
          </svg>
        </div>

        <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-transparent via-[#274b97]/30 to-transparent" />

        {/* Header */}
        <div className="relative z-10 text-center mb-16 px-6">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block text-[#274b97] text-xs tracking-[4px] uppercase font-bold mb-4 border border-[#274b97]/25 rounded-full px-4 py-1.5 bg-[#274b97]/5"
          >
            بوابة الطائف العقارية
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="text-[#0a0f1e] text-4xl md:text-5xl font-extrabold leading-snug"
          >
            أحدث{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-l from-[#7a9ed4] to-[#274b97]">
              العروض العقارية
            </span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="flex justify-center mt-4 mb-2 gap-1.5 items-center"
          >
            <div className="w-10 h-0.5 bg-[#274b97] rounded-full" />
            <div className="w-2.5 h-2.5 border-2 border-[#274b97] rotate-45 rounded-sm" />
            <div className="w-10 h-0.5 bg-[#274b97] rounded-full" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="text-gray-500 text-sm mt-3 max-w-lg mx-auto"
          >
            اكتشف أفضل الفرص الاستثمارية المتاحة حالياً في مدينة الطائف — اضغط على النوع لعرض التفاصيل
          </motion.p>
        </div>

        {/* Cards grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto px-6"
        >
          {propertyTypes.map((item) => {
            const isHovered = hoveredId === item.id;
            return (
              <motion.div
                key={item.id}
                variants={cardVariants}
                onMouseEnter={() => setHoveredId(item.id)}
                onMouseLeave={() => setHoveredId(null)}
                onClick={() => setActivePopup(item.popupKey)}
                className={`relative group cursor-pointer rounded-2xl border bg-white p-7 ${item.borderColor}`}
                style={{
                  transition: "transform 0.35s ease, box-shadow 0.35s ease",
                  transform: isHovered ? "translateY(-6px)" : "translateY(0)",
                  boxShadow: isHovered
                    ? `0 20px 60px ${item.shadowColor}, 0 4px 20px rgba(0,0,0,0.06)`
                    : "0 2px 16px rgba(0,0,0,0.06)",
                }}
              >
                {/* Top accent line */}
                <motion.div
                  animate={{ scaleX: isHovered ? 1 : 0 }}
                  initial={{ scaleX: 0 }}
                  transition={{ duration: 0.35 }}
                  className="absolute top-0 left-6 right-6 h-[2.5px] rounded-full origin-right"
                  style={{ background: `linear-gradient(to left, ${item.accentLight}, ${item.accent})` }}
                />

                {/* Icon */}
                <motion.div
                  animate={{ scale: isHovered ? 1.08 : 1, y: isHovered ? -3 : 0 }}
                  transition={{ duration: 0.35 }}
                  className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-5"
                  style={{
                    background: isHovered ? `linear-gradient(135deg, ${item.accent}18, ${item.accentLight}22)` : `${item.accent}0d`,
                    color: item.accent,
                    transition: "background 0.35s ease",
                  }}
                >
                  {item.icon}
                </motion.div>

                {/* Title */}
                <h3
                  className="text-xl font-extrabold mb-2 leading-snug transition-colors duration-300"
                  style={{ color: isHovered ? item.accent : "#0a0f1e" }}
                >
                  {item.title}
                </h3>

                {/* Divider */}
                <motion.div
                  animate={{ width: isHovered ? "44px" : "28px" }}
                  transition={{ duration: 0.35 }}
                  className="h-[2.5px] rounded-full mb-3"
                  style={{ background: `linear-gradient(to left, ${item.accentLight}, ${item.accent})` }}
                />

                {/* Description */}
                <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>

                {/* CTA */}
                <motion.div
                  animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : 10 }}
                  transition={{ duration: 0.3 }}
                  className="mt-5 flex items-center gap-2 text-sm font-bold"
                  style={{ color: item.accent }}
                >
                  <span>استعرض العروض</span>
                  <svg className="w-4 h-4 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </motion.div>

                {/* Glow */}
                <div
                  className="absolute bottom-0 left-0 w-24 h-24 rounded-br-2xl pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at bottom left, ${item.accent}12, transparent 70%)`,
                    opacity: isHovered ? 1 : 0,
                    transition: "opacity 0.35s ease",
                  }}
                />
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      {/* ══ Popup ══ */}
      <AnimatePresence>
        {activePopup && (
          <>
            {/* Overlay */}
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setActivePopup(null)}
              className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm"
            />

            {/* Modal */}
            <motion.div
              key="modal"
              initial={{ opacity: 0, scale: 0.92, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 40 }}
              transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="fixed inset-4 sm:inset-8 md:inset-12 z-50 rounded-2xl shadow-2xl overflow-hidden"
            >
              {/* زر الإغلاق فوق كل حاجة داخل الـ modal */}
              <button
                onClick={() => setActivePopup(null)}
                className="absolute top-4 left-4 z-9999 w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-lg border border-gray-200 text-gray-700"
              >
                <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
                </svg>
              </button>

              {/* المحتوى */}
              <div className="w-full h-full overflow-y-auto rounded-2xl">
                {activePopup && popupComponents[activePopup]}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default PropertyTypesSection;