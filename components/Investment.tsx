"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Cairo } from 'next/font/google';
import { Property } from '@/app/actions/properties';

const cairo = Cairo({
  subsets: ['arabic'],
  weight: ['400', '600', '700', '800'],
});

type Props = {
  offers: Property[];
};

const Invest = ({ offers }: Props) => {
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);

  return (
    <>
      <section className="relative w-full min-h-screen overflow-hidden" dir="rtl">

        <Image
          src="/invest.jpg"
          alt="فرص عقارية متنوعة في الطائف"
          fill
          priority
          quality={100}
          className="object-cover object-center"
          sizes="100vw"
        />

        <div className="absolute inset-0 bg-linear-to-t from-black/95 via-black/60 to-black/20" />

        <div className={`${cairo.className} relative z-10 flex flex-col justify-end min-h-screen pb-12 px-6 sm:px-12 md:px-20`}>

          {/* عنوان السكشن */}
          <div className="mb-10">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-white/40 text-xs tracking-[0.4em] font-light mb-3 block"
            >
              06
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-white text-4xl sm:text-5xl md:text-6xl font-black leading-tight mb-4"
            >
              فرص{' '}
              <span className="text-transparent bg-clip-text bg-linear-to-l from-[#7a9ed4] to-[#274b97]">
                عقارية متنوعة
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
              عروض وفرص عقارية متنوعة تناسب جميع الاحتياجات والميزانيات، من السكن
              العائلي إلى الاستثمار التجاري، كل ما تحتاجه تحت سقف واحد بضمانات موثوقة.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <span className="px-4 py-2 rounded-full border border-white/30 text-white/80 text-sm font-semibold backdrop-blur-sm bg-white/5">
                فرص استثمارية
              </span>
            </motion.div>
          </div>

          {/* العروض من Sanity */}
          {offers && offers.length > 0 && (
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
                {offers.map((offer) => {
                  const imageUrl = offer.image?.asset?.url;
                  const videoUrl = offer.video?.asset?.url;
                  const isVideo = offer.mediaType === "video";

                  return (
                    <motion.div
                      key={offer._id}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5 }}
                      className="w-full sm:w-85 bg-white/8 backdrop-blur-md border border-white/15 rounded-3xl overflow-hidden"
                    >
                      {/* الميديا */}
                      <div
                        className={`relative aspect-video bg-black ${!isVideo ? "cursor-zoom-in group" : ""}`}
                        onClick={() => !isVideo && imageUrl && setLightboxImg(imageUrl)}
                      >
                        {isVideo && videoUrl ? (
                          <video src={videoUrl} controls playsInline className="w-full h-full object-contain" />
                        ) : imageUrl ? (
                          <>
                            <Image
                              src={imageUrl}
                              alt={offer.title || "عرض عقاري"}
                              fill
                              className="object-contain transition-transform duration-300 group-hover:scale-105"
                              sizes="340px"
                            />
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                              <div className="w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center">
                                <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-white" stroke="currentColor" strokeWidth={2}>
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6" />
                                </svg>
                              </div>
                            </div>
                          </>
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-white/20 text-xs">لا توجد صورة</div>
                        )}
                      </div>

                      {/* التفاصيل */}
                      <div className="p-4">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <p className="text-white/40 text-[10px] tracking-widest uppercase font-medium">عرض حصري</p>
                            <h3 className="text-white text-base font-black">{offer.title}</h3>
                            {offer.location && (
                              <p className="text-[#7a9ed4] text-xs font-semibold">{offer.location}</p>
                            )}
                          </div>
                          {offer.status && (
                            <span className="px-2.5 py-1 rounded-full bg-[#274b97] text-white text-[10px] font-bold shrink-0">
                              {offer.status}
                            </span>
                          )}
                        </div>

                        {offer.details && offer.details.length > 0 && (
                          <div className="grid grid-cols-1 gap-2 mb-3">
                            {offer.details.map((d, j) => (
                              <div key={j} className="bg-white/8 border border-white/10 rounded-xl p-2 flex justify-between items-center px-3">
                                <p className="text-white/40 text-[9px] font-medium">{d.label}</p>
                                <p className="text-white text-[11px] font-bold">{d.value}</p>
                              </div>
                            ))}
                          </div>
                        )}

                        {offer.description && (
                          <p className="text-white/50 text-xs leading-relaxed mb-3">{offer.description}</p>
                        )}

                        <div className="flex items-center justify-between gap-3 pt-3 border-t border-white/10">
                          <div>
                            <p className="text-white/40 text-[10px]">السعر</p>
                            <p className="text-white text-base font-black">
                              {offer.price && offer.price !== "للتفاوض" ? `${offer.price} ﷼` : (offer.price || "حسب الطلب")}
                            </p>
                          </div>
                          <a
                            href={offer.whatsappLink || "https://wa.me/966559002060"}
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
                  );
                })}
              </div>
            </motion.div>
          )}

        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxImg && (
          <>
            <motion.div
              key="lb-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setLightboxImg(null)}
              className="fixed inset-0 z-100 bg-black/90 backdrop-blur-sm cursor-zoom-out"
            />
            <motion.div
              key="lb-img"
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.85 }}
              transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="fixed inset-4 sm:inset-10 md:inset-16 z-101"
              onClick={() => setLightboxImg(null)}
            >
              <div className="relative w-full h-full">
                <Image src={lightboxImg} alt="عرض مكبّر" fill className="object-contain" sizes="100vw" quality={100} />
              </div>
              <button
                onClick={() => setLightboxImg(null)}
                className="absolute top-0 left-0 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-colors"
              >
                <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
                </svg>
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Invest;