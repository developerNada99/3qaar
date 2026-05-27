"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { Cairo } from "next/font/google";

const cairo = Cairo({ subsets: ["arabic"], weight: ["300","400","600","700","900"] });

const services = [
  {
    id: 1,
    title: "بيع العقارات",
    subtitle: "أفضل العروض العقارية في الطائف",
    image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=800&q=80",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
      </svg>
    ),
  },
  {
    id: 2,
    title: "شراء العقارات",
    subtitle: "نساعدك في إيجاد منزل أحلامك",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
      </svg>
    ),
  },
  {
    id: 3,
    title: "إدارة الأملاك",
    subtitle: "إدارة احترافية لممتلكاتك",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
      </svg>
    ),
  },
  {
    id: 4,
    title: "البيع على الخارطة",
    subtitle: "استثمر في مشاريع المستقبل",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
      </svg>
    ),
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

function ServiceCard({ service, index }: { service: (typeof services)[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="group relative overflow-hidden cursor-pointer"
      style={{ aspectRatio: "3/4" }}
    >
      {/* Background Image */}
      <motion.div
        className="absolute inset-0 w-full h-full"
        whileHover={{ scale: 1.08 }}
        transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 50vw, 25vw"
        />
      </motion.div>

      {/* Default overlay */}
      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-500 group-hover:opacity-0" />

      {/* Hover overlay — أزرق */}
      <div className="absolute inset-0 bg-linear-to-t from-[#0e1d3d]/90 via-[#274b97]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* خط أزرق سفلي */}
      <motion.div
        className="absolute bottom-0 left-0 h-1 bg-linear-to-r from-[#274b97] to-[#3c63ac]"
        initial={{ width: "0%" }}
        whileHover={{ width: "100%" }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-6" dir="rtl">
        {/* Icon */}
        <motion.div
          className="text-white mb-3"
          initial={{ opacity: 0, y: 10 }}
          whileHover={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {service.icon}
        </motion.div>

        {/* Number */}
        <span className="text-white/40 text-xs font-light tracking-[0.3em] mb-2 block">
          {String(index + 1).padStart(2, "0")}
        </span>

        {/* Title */}
        <h3 className={`${cairo.className} text-white text-2xl font-bold mb-2 leading-tight`}>
          {service.title}
        </h3>

        {/* Subtitle on hover */}
        <motion.p
          className={`${cairo.className} text-white/70 text-sm leading-relaxed overflow-hidden`}
          initial={{ height: 0, opacity: 0 }}
          whileHover={{ height: "auto", opacity: 1 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          {service.subtitle}
        </motion.p>

        {/* CTA */}
        <motion.div
          className={`${cairo.className} mt-3 flex items-center gap-2 text-white text-sm`}
          initial={{ opacity: 0, x: 10 }}
          whileHover={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          <span>اعرف أكثر</span>
          <svg className="w-4 h-4 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function ServicesSection() {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true });

  return (
    <section
      className={`${cairo.className} relative bg-[#f0f4fb] py-24 px-4 overflow-hidden`}
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

        {/* شبكة خلفية */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.035]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="sgrid" width="52" height="52" patternUnits="userSpaceOnUse">
              <path d="M 52 0 L 0 0 0 52" fill="none" stroke="#274b97" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#sgrid)" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto">

        {/* ══ Header ══ */}
        <div ref={headerRef} className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-4 mb-4"
          >
            <div className="h-px w-16 bg-linear-to-l from-[#274b97] to-transparent" />
            <span className="text-[#274b97] text-sm tracking-[0.4em] font-light">
              بوابة الطائف العقارية
            </span>
            <div className="h-px w-16 bg-linear-to-r from-[#274b97] to-transparent" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-[#0e1d3d] text-5xl md:text-6xl font-black mb-4 leading-tight"
          >
            خدماتنا{" "}
          <span className="text-transparent bg-clip-text bg-linear-to-l from-[#7a9ed4] to-[#274b97]">
              العقارية
            </span>
          </motion.h2>

          {/* خط تزييني */}
          <div className="flex justify-center mt-3 mb-5 gap-1.5 items-center">
            <div className="w-10 h-0.5 bg-[#274b97] rounded-full" />
            <div className="w-2.5 h-2.5 border-2 border-[#274b97] rotate-45 rounded-sm" />
            <div className="w-10 h-0.5 bg-[#274b97] rounded-full" />
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isHeaderInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-gray-500 text-lg max-w-xl mx-auto leading-relaxed"
          >
            نقدم لك باقة متكاملة من الخدمات العقارية المتميزة في مدينة الطائف
          </motion.p>
        </div>

        {/* ══ الكروت ══ */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-0.5 rounded-2xl overflow-hidden shadow-xl">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>

        {/* ══ زر CTA ══ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-center mt-14"
        >
          <motion.button
            whileHover={{ scale: 1.03, boxShadow: "0 0 30px rgba(39,75,151,0.25)" }}
            whileTap={{ scale: 0.97 }}
            className="relative px-10 py-4 bg-transparent border border-[#274b97] text-[#274b97] text-base font-semibold tracking-wider overflow-hidden group rounded-sm"
          >
            <span className="relative z-10 flex items-center gap-3 group-hover:text-white transition-colors duration-300">
              تصفح جميع الخدمات
              <svg className="w-5 h-5 rotate-180 transition-transform group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </span>
            <motion.div
              className="absolute inset-0 bg-[#274b97] origin-right"
              initial={{ scaleX: 0 }}
              whileHover={{ scaleX: 1 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
            />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}