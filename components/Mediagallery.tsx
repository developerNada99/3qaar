"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { MediaItem } from '@/app/actions/properties';

type Props = {
  media: MediaItem[];
};

export default function MediaGallery({ media }: Props) {
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);

  if (!media || media.length === 0) return null;

  const isSingle = media.length === 1;

  return (
    <>
      {/* ── Grid الميديا ── */}
      <div className={`grid gap-2 ${isSingle ? "grid-cols-1" : "grid-cols-1"}`}>
        {media.map((item, i) => {
          const imgUrl = item.image?.asset?.url;
          const vidUrl = item.video?.asset?.url;
          const isVideo = item.type === "video";

          return (
            <div
              key={i}
              className="relative w-full bg-black rounded-xl overflow-hidden"
              style={{ height: isSingle ? "220px" : "200px" }}
            >
              {isVideo && vidUrl ? (
                <video
                  src={vidUrl}
                  controls
                  playsInline
                  className="w-full h-full object-contain"
                />
              ) : imgUrl ? (
                <div
                  className="relative w-full h-full cursor-zoom-in group"
                  onClick={() => setLightboxImg(imgUrl)}
                >
                  <Image
                    src={imgUrl}
                    alt="صورة العرض"
                    fill
                    className="object-contain transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, 340px"
                  />
                  {/* أيقونة تكبير */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <div className="w-9 h-9 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center">
                      <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 text-white" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6" />
                      </svg>
                    </div>
                  </div>
                </div>
              ) : null}
            </div>
          );
        })}
      </div>

      {/* ── Lightbox ── */}
      <AnimatePresence>
        {lightboxImg && (
          <>
            <motion.div
              key="lb-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setLightboxImg(null)}
              className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm cursor-zoom-out"
            />
            <motion.div
              key="lb-img"
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.85 }}
              transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="fixed inset-4 sm:inset-10 md:inset-16 z-[101]"
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
}