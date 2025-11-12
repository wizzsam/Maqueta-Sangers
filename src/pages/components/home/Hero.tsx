import React, { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, MessageCircle, ShieldCheck } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import type { Slide } from "../../types/home";

type Props = {
  slides: Slide[];
  waPhone: string;
  waMsg: string;
};

export default function Hero({ slides, waPhone, waMsg }: Props) {
  const [idx, setIdx] = useState(0);
  const touchStartX = useRef<number | null>(null);

  // autoplay hero
  useEffect(() => {
    const id = setInterval(() => setIdx((i) => (i + 1) % slides.length), 5000);
    return () => clearInterval(id);
  }, [slides.length]);

  const next = () => setIdx((i) => (i + 1) % slides.length);
  const prev = () => setIdx((i) => (i - 1 + slides.length) % slides.length);

  const onTouchStart: React.TouchEventHandler = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd: React.TouchEventHandler = (e) => {
    if (touchStartX.current == null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(dx) > 40) (dx < 0 ? next : prev)();
    touchStartX.current = null;
  };

  return (
    <section
      className="relative h-[90vh] min-h-[420px] overflow-hidden"
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      {slides.map((s, i) => (
        <img
          key={s.src}
          src={s.src}
          alt={s.alt}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${i === idx ? "opacity-100" : "opacity-0"}`}
          loading={i === 0 ? "eager" : "lazy"}
        />
      ))}
      <div className="absolute inset-0 bg-black/45 backdrop-blur-[2px]" />

      <div className="relative z-10 h-full">
        <div className="max-w-7xl mx-auto px-6 h-full flex flex-col justify-center">
          <AnimatePresence mode="wait">
            <motion.span
              key={`badge-${idx}`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-white/90 text-red-600 rounded-full px-3 py-1 w-fit text-sm font-medium shadow"
            >
              <ShieldCheck className="size-4" />
              Autorizados por Autoridad Sanitaria
            </motion.span>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.h1
              key={slides[idx].title}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -25 }}
              transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
              className="mt-4 text-3xl md:text-5xl font-extrabold tracking-tight text-white drop-shadow"
            >
              {slides[idx].title}
            </motion.h1>
            <motion.p
              key={slides[idx].description}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.8 }}
              className="mt-3 max-w-2xl text-white/90 text-sm md:text-base"
            >
              {slides[idx].description}
            </motion.p>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.div
              key={`ctas-${idx}`}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 flex flex-wrap items-center gap-3"
            >
              <a
                href={`https://wa.me/${waPhone}?text=${waMsg}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-red-600 text-white px-5 py-3 font-semibold shadow hover:bg-red-700"
              >
                Agendar Inspección
              </a>
              <a
                href={`https://wa.me/${waPhone}?text=${waMsg}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-white/95 text-red-600 px-5 py-3 font-semibold shadow border border-white/60 hover:bg-white"
              >
                Cotizar por WhatsApp
                <MessageCircle className="size-4" />
              </a>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <button onClick={prev} className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/80 hover:bg-white p-2 shadow">
        <ChevronLeft className="size-5" />
      </button>
      <button onClick={next} className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/80 hover:bg-white p-2 shadow">
        <ChevronRight className="size-5" />
      </button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIdx(i)}
            className={`h-2.5 rounded-full transition-all ${i === idx ? "w-6 bg-white" : "w-2.5 bg-white/60 hover:bg-white/80"}`}
          />
        ))}
      </div>
    </section>
  );
}
