import React from "react";
import { CheckCircle2 } from "lucide-react";
import BgCompliance from "../../../assets/Insectos.webp";

const CERT_ITEMS = [
  "Autorización sanitaria vigente emitida por DIGESA.",
  "Cumplimiento de normas técnicas peruanas.",
  "Registro Nacional de Proveedores (RNP).",
  "Certificados ISO en gestión de calidad.",
];

const HSE_TAGS = [
  "PETS",
  "MSDS",
  "Inducción HSE",
  "SCTR",
  "EPPs Certificados",
  "Matriz IPERC",
  "Certificados Técnicos",
  "Fichas Toxicológicas",
];

export default function ComplianceSection() {
  return (
    <section
      className="
        relative py-16 md:py-20 text-white overflow-hidden
        bg-fixed bg-cover bg-center  /* 👈 AQUÍ ESTÁ EL PARALLAX */
      "
      style={{
        backgroundImage: `url(${BgCompliance})`,
      }}
    >
      {/* Overlay gradiente encima del fondo */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#4b0007]/95 via-[#301d4f]/90 to-[#001d4f]/95 mix-blend-multiply" />
      {/* Capa para oscurecer un poquito más */}
      <div className="absolute inset-0 bg-black/20" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Título */}
        <h2 className="text-center text-2xl md:text-3xl font-extrabold">
          Cumplimiento y Garantías
        </h2>
        <p className="mt-2 text-center text-sm md:text-base text-amber-300 font-medium">
          Autorización sanitaria • Cumplimiento de normas técnicas • Registro de
          proveedores
        </p>

        <div className="mt-10 space-y-8 md:space-y-10">
          {/* CARD: CERTIFICACIONES */}
          <article className="rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 px-5 md:px-10 py-7 md:py-8 shadow-lg shadow-black/25">
            <h3 className="text-sm md:text-base font-semibold tracking-[0.18em] uppercase text-white/80">
              CERTIFICACIONES
            </h3>

            <ul className="mt-4 space-y-3 md:space-y-3.5 text-sm md:text-base text-white/90">
              {CERT_ITEMS.map((text) => (
                <li key={text} className="flex items-start gap-2.5">
                  <CheckCircle2 className="mt-0.5 size-4 md:size-5 text-emerald-300 shrink-0" />
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </article>

          {/* CARD: GESTIÓN HSE */}
          <article className="rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 px-5 md:px-10 py-7 md:py-8 shadow-lg shadow-black/25">
            <h3 className="text-sm md:text-base font-semibold tracking-[0.18em] uppercase text-white/80">
              GESTIÓN HSE
            </h3>

            <div className="mt-5">
              <div className="flex flex-wrap gap-3 md:gap-4">
                {HSE_TAGS.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center justify-center rounded-full bg-slate-900/70 px-4 py-2 text-xs md:text-sm font-semibold text-slate-50 border border-white/15 shadow-sm shadow-black/30"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
