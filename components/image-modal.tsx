"use client";

import { useEffect, useCallback, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

// ─── Types ────────────────────────────────────────────────────────────────────

interface ImageModalProps {
  images: string[];
  initialIndex: number;
  isOpen: boolean;
  onClose: () => void;
}

// ─── Component ────────────────────────────────────────────────────────────────

export function ImageModal({ images, initialIndex, isOpen, onClose }: ImageModalProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  // Sync internal index when a new gallery is opened
  useEffect(() => {
    if (isOpen) setCurrentIndex(initialIndex);
  }, [initialIndex, isOpen]);

  const prev = useCallback(() => {
    setCurrentIndex((i) => (i - 1 + images.length) % images.length);
  }, [images.length]);

  const next = useCallback(() => {
    setCurrentIndex((i) => (i + 1) % images.length);
  }, [images.length]);

  // Keyboard navigation + Escape to close
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, onClose, prev, next]);

  // Lock body scroll while open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const hasMultiple = images.length > 1;

  return (
    <AnimatePresence>
      {isOpen && (
        /* ── Backdrop — click outside closes ── */
        <motion.div
          key="modal-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.22 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm px-4 py-8"
          onClick={onClose}
        >
          {/* ── Modal panel ── */}
          <motion.div
            key="modal-panel"
            initial={{ opacity: 0, scale: 0.9, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 16 }}
            transition={{ duration: 0.28, ease: "easeOut" }}
            className="relative w-full max-w-2xl flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* ── Image container ── */}
            <div className="relative w-full aspect-[3/4] sm:aspect-[2/3] lg:aspect-[3/4] rounded-2xl overflow-hidden bg-gray-900 shadow-2xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.18 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={images[currentIndex]}
                    alt={`Photo ${currentIndex + 1} of ${images.length}`}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 95vw, 640px"
                    priority
                  />
                </motion.div>
              </AnimatePresence>

              {/* ── Prev / Next arrows — inside image ── */}
              {hasMultiple && (
                <>
                  <button
                    onClick={prev}
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-colors focus:outline-none focus:ring-2 focus:ring-pink-400 z-10"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="w-5 h-5 text-gray-700" />
                  </button>
                  <button
                    onClick={next}
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-colors focus:outline-none focus:ring-2 focus:ring-pink-400 z-10"
                    aria-label="Next image"
                  >
                    <ChevronRight className="w-5 h-5 text-gray-700" />
                  </button>
                </>
              )}
            </div>

            {/* ── Counter ── */}
            {hasMultiple && (
              <p className="mt-3 text-white/50 text-sm tabular-nums">
                {currentIndex + 1} / {images.length}
              </p>
            )}

            {/* ── Dot indicators ── */}
            {hasMultiple && images.length <= 15 && (
              <div className="flex gap-1.5 mt-2">
                {images.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentIndex(i)}
                    className={`w-1.5 h-1.5 rounded-full transition-all ${
                      i === currentIndex ? "bg-pink-400 w-3" : "bg-white/30 hover:bg-white/60"
                    }`}
                    aria-label={`Go to image ${i + 1}`}
                  />
                ))}
              </div>
            )}

            {/* ── Close button — top right corner of panel ── */}
            <button
              onClick={onClose}
              className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 w-9 h-9 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-pink-50 transition-colors focus:outline-none focus:ring-2 focus:ring-pink-400 z-20"
              aria-label="Close image viewer"
            >
              <X className="w-4 h-4 text-gray-700" />
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
