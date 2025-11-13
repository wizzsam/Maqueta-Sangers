import React, { useEffect, useRef, useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

import logoAdidas from "../../../assets/logosHome/adidas.png";
import logoMaria from "../../../assets/logosHome/maria.png";
import logoPeter from "../../../assets/logosHome/peter_norton.jpg";
import logoTrav from "../../../assets/logosHome/travesuras.png";
import logoUCV from "../../../assets/logosHome/ucv.png";
import logoUNS from "../../../assets/logosHome/uns.png";
import logoUTP from "../../../assets/logosHome/utp.png";

type LogoItem = {
  id: string;
  name: string;
  src: string;
};

type Testimonial = {
  id: string;
  quote: string;
  name: string;
  role: string;
};

const LOGOS: LogoItem[] = [
  { id: "adidas", name: "Adidas", src: logoAdidas },
  { id: "maria", name: "Colegio María", src: logoMaria },
  { id: "peter", name: "Peter Norton", src: logoPeter },
  { id: "travesuras", name: "Travesuras", src: logoTrav },
  { id: "ucv", name: "Universidad UCV", src: logoUCV },
  { id: "uns", name: "Universidad UNS", src: logoUNS },
  { id: "utp", name: "Universidad UTP", src: logoUTP },
];

const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    quote:
      "Excelente servicio, cumplieron todos los protocolos y entregaron certificación completa.",
    name: "María González",
    role: "Administradora – Edificio Residencial",
  },
  {
    id: "2",
    quote:
      "Profesionales serios, puntuales y con todos los permisos al día. Muy recomendados.",
    name: "Carlos Ramírez",
    role: "Gerente de Operaciones – Clínica",
  },
  {
    id: "3",
    quote:
      "Personal capacitado y productos de calidad. Los padres quedaron tranquilos.",
    name: "Ana Torres",
    role: "Directora – Colegio Privado",
  },
  {
    id: "4",
    quote:
      "Respuesta rápida y atención personalizada. Mantienen nuestras instalaciones siempre seguras.",
    name: "Luis Paredes",
    role: "Administrador – Condominio",
  },
  {
    id: "5",
    quote:
      "Respuesta rápida y atención personalizada. Mantienen nuestras instalaciones siempre seguras.",
    name: "Luis Paredes",
    role: "Administrador – Condominio",
  },
  {
    id: "6",
    quote:
      "Respuesta rápida y atención personalizada. Mantienen nuestras instalaciones siempre seguras.",
    name: "Luis Paredes",
    role: "Administrador – Condominio",
  },
  {
    id: "7",
    quote:
      "Respuesta rápida y atención personalizada. Mantienen nuestras instalaciones siempre seguras.",
    name: "Luis Paredes",
    role: "Administrador – Condominio",
  },
  {
    id: "8",
    quote:
      "Respuesta rápida y atención personalizada. Mantienen nuestras instalaciones siempre seguras.",
    name: "Luis Paredes",
    role: "Administrador – Condominio",
  },
];

export default function ClientsSection() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* TÍTULO */}
        <h2 className="text-center text-2xl md:text-3xl font-extrabold text-blue-900">
          Clientes que confían en nosotros
        </h2>
        <p className="mt-2 text-center text-sm md:text-base text-slate-500">
          Empresas y organizaciones que respaldan nuestra experiencia en
          saneamiento.
        </p>

        {/* LOGOS MARQUEE */}
        <LogosMarquee />

        {/* TESTIMONIOS CARRUSEL */}
        <TestimonialsCarousel />
      </div>
    </section>
  );
}

/* ================================
   LOGOS – MARQUEE AUTO-SCROLL
   ================================ */

function LogosMarquee() {
  const sequence = [...LOGOS, ...LOGOS]; // duplicamos para loop infinito

  return (
    <div className="mt-8 group relative">
      {/* sombritas a los lados */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white to-transparent" />

      <div className="overflow-hidden">
        <div className="logos-track flex gap-4 md:gap-6 w-[200%] items-center">
          {sequence.map((logo, index) => (
            <div
              key={`${logo.id}-${index}`}
              className="h-20 min-w-[140px] md:min-w-[160px] rounded-2xl border border-slate-200 bg-white/70 backdrop-blur-sm flex flex-col items-center justify-center text-xs md:text-sm text-slate-400 shadow-sm px-4 py-2"
            >
              <img
                src={logo.src}
                alt={logo.name}
                className="h-10 md:h-12 w-auto object-contain opacity-80 group-hover:opacity-100 transition"
                draggable="false"
              />
              <span className="mt-2 text-[11px] text-slate-500 font-medium text-center leading-tight">
                {logo.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* CSS del marquee */}
      <style>
        {`
          .logos-track {
            animation: logos-scroll 22s linear infinite;
          }
          .group:hover .logos-track {
            animation-play-state: paused;
          }
          @keyframes logos-scroll {
            from { transform: translateX(0); }
            to   { transform: translateX(-50%); }
          }
        `}
      </style>
    </div>
  );
}

/* =======================================
   TESTIMONIOS – CARRUSEL CON FLECHAS
   ======================================= */

function TestimonialsCarousel() {
  const ref = useRef<HTMLDivElement>(null);
  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);

  const goTo = (i: number) => {
    const el = ref.current;
    if (!el) return;
    const items = Array.from(el.children) as HTMLElement[];
    if (!items.length) return;

    const next = (i + items.length) % items.length;
    const target = items[next];
    el.scrollTo({ left: target.offsetLeft, behavior: "smooth" });
    setIdx(next);
  };

  const next = () => goTo(idx + 1);
  const prev = () => goTo(idx - 1);

  const onScroll = () => {
    const el = ref.current;
    if (!el) return;
    const items = Array.from(el.children) as HTMLElement[];
    if (!items.length) return;

    const near = items.reduce(
      (best, it, i) => {
        const dist = Math.abs(it.offsetLeft - el.scrollLeft);
        return dist < best.dist ? { i, dist } : best;
      },
      { i: 0, dist: Number.POSITIVE_INFINITY }
    );
    setIdx(near.i);
  };

  // autoplay un poco más rápido (5s en vez de 7s)
  useEffect(() => {
    const prefersReduce =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (paused || prefersReduce || document.hidden) return;

    const id = setInterval(next, 3000); // ← antes 7000
    const onVis = () => clearInterval(id);

    document.addEventListener("visibilitychange", onVis);
    return () => {
      clearInterval(id);
      document.removeEventListener("visibilitychange", onVis);
    };
  }, [paused, idx]);

  return (
    <>
      <div className="relative mt-10">
        <div
          ref={ref}
          onScroll={onScroll}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onTouchStart={() => setPaused(true)}
          onTouchEnd={() => setTimeout(() => setPaused(false), 600)}
          className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4 no-scrollbar"
        >
          {TESTIMONIALS.map((t) => (
            <article
              key={t.id}
              className="snap-start shrink-0 w-[95%] sm:w-[80%] md:w-[60%] lg:w-[45%] xl:w-[32%]
                       relative rounded-3xl bg-gradient-to-br from-orange-50/90 via-white to-sky-50/90 
                       border border-slate-100 shadow-md shadow-orange-100/60 px-6 py-6 md:px-7 md:py-7
                       hover:shadow-xl hover:-translate-y-1 transition-all duration-200"
            >
              {/* icono comillas */}
              <div className="absolute -top-4 left-6 inline-flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-md">
                <span className="text-sm font-semibold text-orange-400">”</span>
              </div>

              {/* estrellas */}
              <div className="flex items-center gap-1 text-orange-400 mb-3 mt-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-4 fill-orange-400" />
                ))}
              </div>

              {/* texto */}
              <p className="text-sm md:text-[0.95rem] text-slate-700 italic leading-relaxed">
                “{t.quote}”
              </p>

              <hr className="my-4 border-slate-200" />

              {/* nombre y rol */}
              <div>
                <p className="text-sm font-semibold text-slate-900">{t.name}</p>
                <p className="text-xs md:text-[0.8rem] text-slate-500">{t.role}</p>
              </div>
            </article>
          ))}
        </div>

        {/* Flechas (solo desktop para no tapar swipe en móvil) */}
        <button
          onClick={prev}
          aria-label="Anterior testimonio"
          className="hidden md:flex absolute -left-4 top-1/2 -translate-y-1/2 rounded-full bg-white shadow p-2 border border-slate-200 hover:bg-slate-50"
        >
          <ChevronLeft className="size-5 text-slate-600" />
        </button>
        <button
          onClick={next}
          aria-label="Siguiente testimonio"
          className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 rounded-full bg-white shadow p-2 border border-slate-200 hover:bg-slate-50"
        >
          <ChevronRight className="size-5 text-slate-600" />
        </button>

        {/* Puntos */}
        <div className="mt-3 flex justify-center gap-2">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Ir al testimonio ${i + 1}`}
              className={`h-2.5 rounded-full transition-all ${
                i === idx
                  ? "w-6 bg-orange-500"
                  : "w-2.5 bg-slate-300 hover:bg-slate-400"
              }`}
            />
          ))}
        </div>
      </div>

      {/* CSS para ocultar la barra de scroll horizontal */}
      <style>
        {`
          .no-scrollbar::-webkit-scrollbar {
            display: none;
          }
          .no-scrollbar {
            -ms-overflow-style: none;  /* IE y Edge */
            scrollbar-width: none;     /* Firefox */
          }
        `}
      </style>
    </>
  );
}
