"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Cairo } from "next/font/google";
import { 
  
  MapPin, 
  Ruler, 
  TrendingUp,
  Video,
  Image as ImageIcon,
  ExternalLink
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const cairo = Cairo({
  subsets: ["arabic"],
  weight: ["400", "600", "700"],
});

const OurOffers = () => {
  const whatsappNumber = "966559002060";
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  const offers = [
    {
      id: 1,
      type: "video",
      title: "📍 قطعة أرض سكنية - ضاحية العرفاء",
      videoSrc: "/vid1.mp4",
      details: {
        "رقم القطعة": "٦٨٢",
        "المخطط": "ضاحية العرفاء شمال الطائف",
        "المساحة": "٦٢٥م² (٢٥م × ٢٥م)",
        "الطبيعة": "ممتازة للبيع"
      },
      badge: "للبيع"
    },
    {
      id: 2,
      type: "video",
      title: "🏢 عمارة دورين وملحق - حي السداد",
      videoSrc: "/vid2.mp4",
      details: {
        "الموقع": "حي السداد - الطائف",
        "التفاصيل": "موجودة في الفيديو",
        "السعر المطلوب": "١,٣٠٠,٠٠٠ ﷼ صافي",
        "عرض خاص": "٦٠٠,٠٠٠ ﷼"
      },
      badge: "عرض خاص"
    },
    {
      id: 3,
      type: "image",
      title: "📍 قطعة رقم ٤٥٢١ - ضاحية العرفاء ٩٩١",
      imageSrc: "/img1.jpeg",
      details: {
        "المساحة": "٦٣٠م²",
        "الواجهة": "شمالية في نص الميدان",
        "الطبيعة": "ممتازة - تبعد عن خط ال١٠٠ الشمالي ٥٠٠م",
        "السوم": "١٥٨,٠٠٠ ﷼ صافي",
        "ملاحظة": "المالك طالب زيادة - بياع بإذن الله"
      },
      badge: "مطلوب زيادة"
    },
    {
      id: 4,
      type: "image",
      title: "🌟 قطعة رقم ٢٦٢٠ - ضاحية العرفاء ٩٩١",
      imageSrc: "/img2.jpeg",
      details: {
        "المساحة": "٧٣٧م²",
        "الموقع": "واجهتين - زاوية",
        "الشوارع": "ميدان ٣٠متر شمالي + شارع ٢٥متر شرقي",
        "القرب من": "شارع ال٦٠",
        "الطبيعة": "ممتازة",
        "السعر": "٢٣٠,٠٠٠ ﷼ صافي"
      },
      twitterLink: "https://x.com/0559002060/status/2019023161954594978",
      badge: "🌟 واجهتين"
    },
    {
      id: 5,
      type: "image",
      title: "🏭 ٣ قطع تجارية بصك واحد - العرفاء ٢",
      imageSrc: "/img3.jpeg",
      details: {
        "الموقع": "العرفاء ٢ شمال الطائف",
        "المساحة الإجمالية": "٤٥,٠٠٠م²",
        "الشارع الشرقي": "عرض ٥٠م × طول ٢٢٥م",
        "الشارع الجنوبي": "عرض ١٠٠م × طول ٢٠٠م",
        "الحالة": "للبيع"
      },
      badge: "استثماري"
    }
  ];

  return (
    <section className={`${cairo.className} py-24 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 bg-gradient-to-b from-gray-50 to-white`} dir="rtl">
      <div className="max-w-6xl mx-auto">
        
        {/* العنوان */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <p className="text-sm text-[#274b97] font-semibold">
            عروضنا المميزة
          </p>

          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mt-2 mb-4">
            <span className="text-[#274b97]">أحدث</span> العروض العقارية
          </h2>

          <div className="w-20 h-0.5 bg-gradient-to-r from-[#7a9ed4] to-transparent mx-auto mt-4 rounded-full"></div>

          <p className="text-gray-500 mt-4 text-sm max-w-2xl mx-auto">
            اكتشف مجموعة من أفضل الفرص الاستثمارية والعقارية في الطائف
          </p>
        </motion.div>

        {/* العروض */}
        <div className="space-y-8">
          {offers.map((offer, index) => (
            <motion.div
              key={offer.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="grid md:grid-cols-2 gap-0">
                
                {/* الوسائط (فيديو أو صورة) */}
                <div className="relative bg-gray-100 min-h-[300px]">
                  {offer.type === "video" ? (
                    <>
                      <video 
                        src={offer.videoSrc} 
                        controls 
                        className="w-full h-full object-cover absolute inset-0"
                        poster="/thumbnail-placeholder.jpg"
                      >
                        متصفحك لا يدعم تشغيل الفيديو.
                      </video>
                      <div className="absolute bottom-3 left-3 bg-black/70 text-white text-xs px-2 py-1 rounded-full flex items-center gap-1 z-10">
                        <Video className="w-3 h-3" />
                        <span>فيديو توضيحي</span>
                      </div>
                    </>
                  ) : (
                    <div className="relative w-full h-full min-h-[300px]">
                     {offer.type === "image" && offer.imageSrc && (
  <Image
    src={offer.imageSrc}
    alt={offer.title}
    fill
    className="object-cover"
    sizes="(max-width: 768px) 100vw, 50vw"
    priority={index < 2}
  />
)}
                      <div className="absolute bottom-3 left-3 bg-black/70 text-white text-xs px-2 py-1 rounded-full flex items-center gap-1 z-10">
                        <ImageIcon className="w-3 h-3" />
                        <span>صورة</span>
                      </div>
                    </div>
                  )}
                  
                  {/* بادج */}
                  <div className="absolute top-4 right-4 z-10">
                    <span className={`text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg ${
                      offer.badge === "عرض خاص" ? "bg-red-500" :
                      offer.badge === "🌟 واجهتين" ? "bg-purple-500" :
                      offer.badge === "مطلوب زيادة" ? "bg-amber-500" :
                      offer.badge === "استثماري" ? "bg-emerald-500" :
                      "bg-[#274b97]"
                    }`}>
                      {offer.badge}
                    </span>
                  </div>
                </div>

                {/* التفاصيل */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
                    {offer.title}
                  </h3>
                  
                  <div className="space-y-3">
                    {Object.entries(offer.details).map(([key, value]) => (
                      <div key={key} className="flex items-start gap-3">
                        <div className="mt-0.5">
                          {key.includes("مساحة") ? (
                            <Ruler className="w-4 h-4 text-[#274b97]" />
                          ) : key.includes("سعر") || key.includes("السوم") ? (
                            <TrendingUp className="w-4 h-4 text-green-600" />
                          ) : (
                            <MapPin className="w-4 h-4 text-[#274b97]" />
                          )}
                        </div>
                        <div>
                          <span className="text-gray-500 text-sm ml-2">{key}:</span>
                          <span className={`font-semibold text-gray-800 ${
                            key.includes("السعر") || key.includes("سعر") ? "text-green-700 text-lg" : ""
                          }`}>
                            {value}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* روابط إضافية للعرض الرابع */}
                  {offer.twitterLink && (
                    <a 
                      href={offer.twitterLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 mt-4 text-[#274b97] hover:underline text-sm"
                    >
                      <ExternalLink className="w-4 h-4" />
                      عرض التفاصيل كاملة والطبيعة
                    </a>
                  )}

                  
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* زر التواصل الإضافي */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <FaWhatsapp className="w-6 h-6" />
            تواصل معنا الآن    
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default OurOffers;