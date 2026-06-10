"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Cairo } from 'next/font/google';

const cairo = Cairo({
  subsets: ['arabic'],
  weight: ['400', '600', '700', '800'],
});

const offers = [
  {
    id: 1,
    type: "video",
    media: "/vid1.mp4",
    number: "٦٨٢",
    plan: "مخطط ضاحية العرفاء",
    location: "شمال الطائف",
    details: [
      { label: "المساحة", value: "٦٢٥م²" },
      { label: "الأبعاد", value: "٢٥م × ٢٥م" },
      { label: "الطبيعة", value: "ممتازة" },
    ],
    price: "٦٠٠,٠٠٠",
    status: "للبيع",
    description: "",
  },
  {
    id: 2,
    type: "image",
    media: "/img1.jpeg",
    number: "٤٥٢١",
    plan: "مخطط ضاحية العرفاء ٩٩١",
    location: "شمال الطائف",
    details: [
      { label: "المساحة", value: "٦٣٠م²" },
      { label: "الواجهة", value: "شمالية — وسط الميدان" },
      { label: "من خط ١٠٠", value: "٥٠٠م تقريباً" },
    ],
    price: "١٥٨,٠٠٠",
    status: "للبيع",
    description: "وصل السوم ١٥٨ صافي — المالك طالب زود وبياع بإذن الله",
  },
  {
  id: 3,
  type: "video",
  media: "/vid3.mp4",
  number: "استثمارية",
  plan: "مخطط ٩٩١ ضاحية العرفاء",
  location: "شمال الطائف",
  details: [
    { label: "المساحة", value: "١٠٩٤م²" },
    { label: "الشارع", value: "طريق ١٠٠ الجنوبي" },
    { label: "واجهة", value: "شارع ٢٥ شرقي" },
  ],
  price: "للبيع",
  status: "فرصة استثمارية",
  description:
    "أرض تجارية مميزة على طريق ١٠٠ الجنوبي بمساحة ١٠٩٤ متر مربع. مناسبة لإقامة محطة وقود أو مجمع تجاري أو مجموعة كافيهات أو فندق استثماري كبير، بموقع حيوي وفرصة استثمارية واعدة.",
},
  // أضف عروض مستقبلية هنا
];

const LandOne = () => {
  return (
    <section className="relative w-full min-h-screen overflow-hidden" dir="rtl">

      <Image
        src="/landone.jpg"
        alt="أراضي سكنية وتجارية في الطائف"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />

      <div className="absolute inset-0 bg-linear-to-t from-black/95 via-black/60 to-black/20" />

      <div className={`${cairo.className} relative z-10 flex flex-col justify-end min-h-[90vh] pb-12 px-6 sm:px-12 md:px-20`}>

        {/* عنوان السكشن */}
        <div className="mb-10">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-white/40 text-xs tracking-[0.4em] font-light mb-3 block"
          >
            01
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-white text-4xl sm:text-5xl md:text-6xl font-black leading-tight mb-4"
          >
            أراضي{' '}
            <span className="text-transparent bg-clip-text bg-linear-to-l from-[#7a9ed4] to-[#274b97]">
              سكنية وتجارية
            </span>
          </motion.h2>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-16 h-0.5 bg-linear-to-l from-[#7a9ed4] to-[#274b97] rounded-full mb-5 origin-right"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="text-white/75 text-base sm:text-lg leading-relaxed max-w-xl mb-6"
          >
            نوفر لك قطع أراضي سكنية وتجارية في أفضل مواقع الطائف، بمساحات متنوعة تناسب جميع
            الاحتياجات. فرص استثمارية حقيقية بموثوقية تامة وإجراءات قانونية معتمدة.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <span className="px-4 py-2 rounded-full border border-white/30 text-white/80 text-sm font-semibold backdrop-blur-sm bg-white/5">
              أراضي
            </span>
          </motion.div>
        </div>

        {/* العروض */}
        {offers.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.35 }}
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px flex-1 bg-white/10" />
              <span className="text-white/50 text-xs tracking-[0.3em] font-medium uppercase">العروض المتاحة</span>
              <div className="h-px flex-1 bg-white/10" />
            </div>

            <div className="flex flex-wrap gap-5 pb-4">
              {offers.map((offer, i) => (
                <motion.div
                  key={offer.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * i }}
                  className="w-full sm:w-85 bg-white/8 backdrop-blur-md border border-white/15 rounded-3xl overflow-hidden"
                >
                  {/* الميديا */}
                  <div className="relative aspect-video bg-black/50">
                    {offer.type === "video" ? (
                      <video
                        src={offer.media}
                        controls
                        playsInline
                        className="w-full h-full object-contain"
                      />
                    ) : (
                      <Image
                        src={offer.media}
                        alt={`قطعة رقم ${offer.number}`}
                        fill
                        className="object-contain"
                        sizes="340px"
                      />
                    )}
                  </div>

                  {/* التفاصيل */}
                  <div className="p-4">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <p className="text-white/40 text-[10px] tracking-widest uppercase font-medium">عرض حصري</p>
                        <h3 className="text-white text-base font-black">قطعة رقم {offer.number}</h3>
                        <p className="text-[#7a9ed4] text-xs font-semibold">{offer.plan} — {offer.location}</p>
                      </div>
                      <span className="px-2.5 py-1 rounded-full bg-[#274b97] text-white text-[10px] font-bold shrink-0">
                        {offer.status}
                      </span>
                    </div>

                    <div className="grid grid-cols-3 gap-2 mb-3">
                      {offer.details.map((d, j) => (
                        <div key={j} className="bg-white/8 border border-white/10 rounded-xl p-2 text-center">
                          <p className="text-white/40 text-[9px] font-medium mb-0.5">{d.label}</p>
                          <p className="text-white text-[11px] font-bold">{d.value}</p>
                        </div>
                      ))}
                    </div>

                    {offer.description && (
                      <p className="text-white/50 text-xs leading-relaxed mb-3">{offer.description}</p>
                    )}

                    <div className="flex items-center justify-between gap-3 pt-3 border-t border-white/10">
                      <div>
                        <p className="text-white/40 text-[10px]">المطلوب</p>
                        <p className="text-white text-lg font-black">{offer.price} ﷼</p>
                      </div>
                      <a
                        href="https://wa.me/966559002060"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 px-4 py-2.5 rounded-2xl bg-white text-[#274b97]
                                   text-xs font-black hover:bg-[#f0f4fb] transition-colors duration-200 shrink-0"
                      >
                        <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.967-.94 1.165-.173.199-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.447-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.5-.67-.51-.173-.01-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                        </svg>
                        استفسر
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

      </div>
    </section>
  );
};

export default LandOne;