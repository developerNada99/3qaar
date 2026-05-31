"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Cairo } from "next/font/google";
import Image from "next/image";

const cairo = Cairo({
  subsets: ["arabic"],
  weight: ["400", "600", "700", "800"],
});

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "الرئيسية", href: "/" },
    { name: "من نحن", href: "/about" },
    { name: "خدماتنا", href: "/services" },
    { name: "تواصل معنا", href: "/contact" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href;
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* ══ Navbar ══ */}
      <motion.header
        dir="rtl"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={`${cairo.className} fixed top-0 right-0 left-0 z-50 transition-all duration-500
          ${scrolled
            ? "bg-white/96 backdrop-blur-lg shadow-lg shadow-[#274b97]/10 border-b border-[#274b97]/10"
            : "bg-transparent"
          }`}
      >
        {/* خط علوي دقيق */}
        <div className={`absolute top-0 left-0 right-0 h-0.75 bg-linear-to-l from-[#274b97] via-[#7a9ed4] to-transparent transition-opacity duration-500 ${scrolled ? "opacity-100" : "opacity-0"}`} />

        <div className="max-w-7xl mx-auto px-5 sm:px-8 h-20 flex items-center justify-between">

          {/* ── اللوجو ── */}
          <Link href="/" className="flex items-center gap-0 shrink-0 group">
            <div className="relative">
              <Image
                src="/logo.png"
                alt="logo"
                width={100}
                height={100}
                className="w-24 h-24 object-cover "
                priority
              />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="font-extrabold text-sm text-[#274b97] tracking-wide">
                بوابة الطائف العقارية
              </span>
              <span className="font-medium text-[10px] text-gray-400 tracking-[0.2em]">
                Taif Real Estate Portal
              </span>
            </div>
          </Link>

          {/* ── روابط الديسكتوب ── */}
          <nav className="hidden md:flex items-center">
            {navLinks.map((link, i) => {
              const active = isActive(link.href);
              return (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.07 }}
                >
                  <Link
                    href={link.href}
                    className="relative px-5 py-2 mx-0.5 text-sm font-semibold rounded-lg
                               flex items-center gap-2 group transition-colors duration-200"
                    style={{ color: active ? "#274b97" : "#374151" }}
                  >
                    {/* خلفية hover */}
                    <span className="absolute inset-0 rounded-lg bg-[#274b97]/0 group-hover:bg-[#274b97]/6 transition-colors duration-200" />

                    {/* نقطة ديكورية */}
                    <span
                      className={`relative w-1.5 h-1.5 rounded-sm rotate-45 shrink-0 transition-all duration-300
                        ${active ? "bg-[#274b97] scale-110" : "bg-gray-300 group-hover:bg-[#274b97]/60"}`}
                    />

                    <span className="relative group-hover:text-[#274b97] transition-colors duration-200">
                      {link.name}
                    </span>

                    {/* خط active متحرك */}
                    {active && (
                      <motion.span
                        layoutId="pill"
                        className="absolute bottom-1 right-5 left-5 h-0.5 rounded-full bg-linear-to-l from-[#274b97] to-[#7a9ed4]"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                </motion.div>
              );
            })}
          </nav>

          {/* ── زر الهامبرغر (موبايل) ── */}
          <button
            onClick={() => setIsOpen(true)}
            aria-label="فتح القائمة"
            className="md:hidden relative flex flex-col justify-center items-center
                       w-11 h-11 rounded-xl border border-[#274b97]/20
                       bg-white/80 backdrop-blur-sm shadow-sm
                       hover:border-[#274b97]/40 hover:bg-[#274b97]/5
                       transition-all duration-200"
          >
            <span className="block w-5 h-0.5 bg-[#274b97] rounded-full mb-1.5" />
            <span className="block w-4 h-0.5 bg-[#274b97] rounded-full mb-1.5" />
            <span className="block w-5 h-0.5 bg-[#274b97] rounded-full" />
          </button>
        </div>
      </motion.header>

      {/* Spacer */}
      <div className="h-20" />

      {/* ══ Overlay ══ */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
          />
        )}
      </AnimatePresence>

      {/* ══ Sidebar موبايل ══ */}
      <AnimatePresence>
        {isOpen && (
          <motion.aside
            key="sidebar"
            dir="rtl"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 320, damping: 34 }}
            className={`${cairo.className} fixed top-0 right-0 h-full w-72 z-50
                        bg-white shadow-2xl flex flex-col`}
          >
            {/* خط علوي ملون */}
            <div className="h-1 bg-linear-to-l from-[#274b97] via-[#7a9ed4] to-transparent shrink-0" />

            {/* Header */}
            <div className="flex items-center justify-between px-5 pt-4 pb-4 border-b border-gray-100">
              <Link href="/" onClick={() => setIsOpen(false)} className="flex items-center gap-2">
                <Image src="/logo.png" alt="logo" width={48} height={48} className="w-12 h-12 object-contain" priority />
                <div className="flex flex-col leading-tight">
                  <span className="font-extrabold text-sm text-[#274b97]">بوابة الطائف</span>
                  <span className="text-[10px] text-gray-400 tracking-wider">العقارية</span>
                </div>
              </Link>
              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 flex items-center justify-center rounded-lg bg-gray-50
                           border border-gray-100 hover:bg-[#274b97]/8 transition-colors"
              >
                <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4" stroke="#6b7280" strokeWidth={2}>
                  <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
                </svg>
              </button>
            </div>

            {/* روابط */}
            <nav className="flex-1 px-4 pt-5 overflow-y-auto">
              <p className="text-[10px] tracking-[0.35em] text-gray-400 font-bold mb-3 px-2 uppercase">
                القائمة
              </p>
              <ul className="flex flex-col gap-1">
                {navLinks.map((link, i) => {
                  const active = isActive(link.href);
                  return (
                    <motion.li
                      key={link.href}
                      initial={{ opacity: 0, x: 24 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.06 * i + 0.08, duration: 0.38 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className={`relative flex items-center gap-3 px-4 py-3 rounded-xl
                                    text-base font-semibold transition-all duration-200 group overflow-hidden
                                    ${active
                                      ? "bg-[#274b97] text-white shadow-lg shadow-[#274b97]/25"
                                      : "text-gray-700 hover:bg-[#274b97]/6 hover:text-[#274b97]"
                                    }`}
                      >
                        {/* مربع ديكوري */}
                        <span className={`w-2 h-2 rounded-sm rotate-45 shrink-0 transition-colors
                          ${active ? "bg-white/60" : "bg-[#274b97]/25 group-hover:bg-[#274b97]/50"}`} />

                        {link.name}

                        {active && (
                          <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 mr-auto opacity-60" stroke="white" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                          </svg>
                        )}
                      </Link>
                    </motion.li>
                  );
                })}
              </ul>
            </nav>

            {/* Footer */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="px-5 py-4 border-t border-gray-100"
            >
              <p className="text-[11px] text-gray-400 text-center">
                © 2025 بوابة الطائف العقارية
              </p>
            </motion.div>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
}