import React from "react";
import { PhoneCall, MessageCircle } from "lucide-react";

type Props = {
  waPhone: string;
  waMsg: string;
};

export default function ContactCta({ waPhone, waMsg }: Props) {
  const waUrl = `https://wa.me/${waPhone}?text=${encodeURIComponent(waMsg)}`;

  return (
    <section className="relative overflow-hidden">
      <div
        className="
          bg-gradient-to-r from-[#ff4b2b] via-[#ff8a00] to-[#4b6cff]
          py-12 md:py-16 text-center text-white
        "
      >
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">
            ¿Necesitas una inspección hoy? Hablemos ahora.
          </h2>
          <p className="mt-3 text-sm md:text-base text-white/90">
            Respuesta inmediata por WhatsApp o agenda tu inspección técnica gratuita.
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-3 md:gap-4">
            {/* Botón WhatsApp */}
            <a
              href={waUrl}
              target="_blank"
              rel="noreferrer"
              className="
                inline-flex items-center gap-2 rounded-xl bg-white text-red-500 
                px-6 py-3 text-sm md:text-base font-semibold shadow-lg
                hover:bg-slate-50 hover:scale-[1.02] active:scale-100
                transition-transform transition-colors
              "
            >
              <PhoneCall className="size-4 md:size-5" />
              WhatsApp
            </a>

            {/* Botón cotización */}
            <a
              href="/contacto"
              className="
                inline-flex items-center gap-2 rounded-xl border-2 border-white/80 
                bg-transparent text-white px-6 py-3 text-sm md:text-base font-semibold
                hover:bg-white/10 hover:border-white transition-colors
              "
            >
              <MessageCircle className="size-4 md:size-5" />
              Solicitar cotización
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
