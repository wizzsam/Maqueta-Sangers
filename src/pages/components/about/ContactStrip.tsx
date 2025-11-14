import React from "react";
import { motion } from "framer-motion";
import { MapPin, Clock, BadgeCheck, Zap, Phone } from "lucide-react";
import type { HighlightItem } from "../../types/about";

type Props = {
  highlights: HighlightItem[];
};

const iconMap = {
  map: MapPin,
  clock: Clock,
  badge: BadgeCheck,
} as const;

// estilos por tarjeta (ubicación, disponibilidad, certificación)
const accentClasses = [
  {
    chip: "bg-red-50 text-red-600 ring-red-100",
    border: "border-red-100 hover:border-red-300",
    shadow: "hover:shadow-md",
  },
  {
    chip: "bg-teal-50 text-teal-600 ring-teal-100",
    border: "border-teal-100 hover:border-teal-300",
    shadow: "hover:shadow-md",
  },
  {
    chip: "bg-orange-50 text-orange-600 ring-orange-100",
    border: "border-orange-100 hover:border-orange-300",
    shadow: "hover:shadow-md",
  },
];

export default function ContactStrip({ highlights }: Props) {
  return (
    <section className="bg-gray-50 pb-14">
      <div className="max-w-7xl mx-auto px-6 pt-8">
        {/* Highlights */}
        <div className="grid gap-4 md:grid-cols-3">
          {highlights.map((h, i) => {
            const Icon = iconMap[h.icon];
            const accent = accentClasses[i % accentClasses.length];

            return (
              <motion.article
                key={h.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                whileHover={{ y: -6, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`group relative rounded-3xl bg-white px-5 py-4 flex flex-col gap-2 border ${accent.border} ${accent.shadow} transition-all`}
              >
                {/* glow suave al hover */}
                <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute -right-6 -top-6 h-16 w-16 rounded-full bg-red-500/5 blur-xl" />
                </div>

                <div
                  className={`inline-flex h-9 w-9 items-center justify-center rounded-full ring-1 ${accent.chip} transition-all group-hover:scale-110`}
                >
                  <Icon size={18} />
                </div>
                <h3 className="font-semibold text-gray-900">{h.title}</h3>
                <p className="text-sm text-gray-600">{h.description}</p>
              </motion.article>
            );
          })}
        </div>

        {/* CTA rojo */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-10 rounded-3xl bg-gradient-to-r from-red-600 via-red-500 to-orange-500 text-white px-6 py-10 md:px-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-md"
        >
          <div className="flex items-start gap-4">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/10">
              <Zap size={26} />
            </span>
            <div>
              <h2 className="text-xl md:text-2xl font-bold">
                Contacta con Sangers Hoy
              </h2>
              <p className="mt-1 text-sm md:text-base text-white/90 max-w-xl">
                Déjanos proteger tu salud y la de tu comunidad. Nuestro equipo
                está listo para responder a tus necesidades sanitarias.
              </p>
            </div>
          </div>

          <a
            href="tel:+51999999999"
            className="inline-flex items-center gap-2 rounded-full bg-white text-red-600 px-6 py-3 text-sm md:text-base font-semibold shadow hover:bg-gray-50"
          >
            <Phone size={18} />
            Solicitar servicio ahora
          </a>
        </motion.div>
      </div>
    </section>
  );
}
