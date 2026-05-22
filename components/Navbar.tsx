"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation"; 
import { motion, AnimatePresence } from "framer-motion";
import { Cairo } from "next/font/google";
import Image from "next/image";


const cairo = Cairo({
  subsets: ["arabic"],
  weight: ["400","600","700"],
});

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname(); 
  const navLinks = [
    { name: "الرئيسية", href: "/" },         
    { name: "من نحن", href: "/" },
    { name: "خدماتنا", href: "/" },
    { name: "تواصل معنا", href: "/" }
  ];

  // دالة للتحقق إذا كان الرابط نشطاً
  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href;
  };

  return (
    <nav
      dir="rtl"
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-white/5 
                  shadow-lg"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">

          {/* logo - مكبر 3 أضعاف */}
          <Link href="/" className="flex items-center justify-center">

            {/* image - مكبر 3 أضعاف */}
           <Image
  src="/logo.png"
  alt="logo"
  width={200}
  height={200}
  className="w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-32 lg:w-32 lg:h-32 object-cover"
  priority
/>

            {/* text - مكبر 3 أضعاف مع مسافة سالبة متجاوبة */}
            <div className="flex flex-col justify-center items-center leading-tight -mr-6 sm:-mr-7 md:-mr-8 lg:-mr-7">
              <span className={`${cairo.className} font-bold text-lg sm:text-xl md:text-2xl text-[#3c63ac]`}>
                بوابة الطائف العقارية
              </span>
              <span className={`${cairo.className} font-semibold text-xs sm:text-sm md:text-base tracking-[0.2em]`}>
                Taif Real Estate Portal 
              </span>
            </div>

          </Link>

          {/* desktop menu - centered */}
          <div className="hidden lg:flex items-center justify-center flex-1">
            <div className="flex gap-10 text-lg font-semibold text-gray-900">
              {navLinks.map((link, index) => {
                const active = isActive(link.href);
                return (
                  <Link
                    key={index}
                    href={link.href}
                    className={`transition ${
                      active ? "text-[#0e1d3d]" : "hover:text-[#3c63ac]"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* mobile button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-2xl"
          >
            ☰
          </button>

        </div>
      </div>

      {/* mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden "
          >
            <div className="flex flex-col items-center py-4 gap-5 text-lg font-semibold ">
              {navLinks.map((link, index) => {
                const active = isActive(link.href);
                return (
                  <Link
                    key={index}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`transition ${
                      active ? "text-[#0e1d3d]" : "hover:text-[#3c63ac]"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}