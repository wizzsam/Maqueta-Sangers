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

export default function ContactStrip({ highlights }: Props) {
  return (
    <section className="bg-gray-50 pb-14">
      <div className="max-w-7xl mx-auto px-6 pt-8">
        {/* Highlights */}
        <div className="grid gap-4 md:grid-cols-3">
          {highlights.map((h, i) => {
            const Icon = iconMap[h.icon];
            return (
              <motion.article
                key={h.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="rounded-3xl border border-gray-200 bg-white px-5 py-4 flex flex-col gap-2"
              >
                <div className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-red-50 text-red-600">
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
          className="mt-10 rounded-3xl bg-red-600 text-white px-6 py-10 md:px-10 flex flex-col md:flex-row items-center justify-between gap-6"
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
