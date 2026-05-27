"use client";

import React from 'react';
import { Cairo } from "next/font/google";

const cairo = Cairo({
  subsets: ["arabic"],
  weight: ["400", "600", "700"],
});

const Footer = () => {
  return (
    <footer className="py-4 px-4 sm:px-6 md:px-8 border-t border-[#274b97]/30 bg-white" dir="rtl">
      <div className="max-w-6xl mx-auto">
        <div className="text-center">
          <p className={`${cairo.className} text-gray-900 text-sm sm:text-base`}>
            جميع الحقوق محفوظة © {new Date().getFullYear()} 
            <span className="text-[#274b97] font-semibold mx-1"> بوابة الطائف العقارية</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;