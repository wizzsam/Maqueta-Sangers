import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

const FAQ_ITEMS: FaqItem[] = [
  {
    id: "productos",
    question: "¿Qué productos y protocolos utilizan?",
    answer:
      "Trabajamos con productos aprobados por la autoridad sanitaria y fichas toxicológicas actualizadas. Los protocolos siguen normas técnicas peruanas y lineamientos HSE para saneamiento ambiental.",
  },
  {
    id: "tiempo-espera",
    question: "¿Cuánto tiempo debo esperar después del servicio?",
    answer:
      "Depende del tipo de tratamiento. En la mayoría de casos recomendamos esperar entre 2 y 4 horas antes de reingresar al ambiente, ventilando adecuadamente los espacios.",
  },
  {
    id: "garantias",
    question: "¿Qué garantías ofrecen?",
    answer:
      "Ofrecemos garantías por escrito según el tipo de servicio: control de plagas, desinfección o limpieza de cisternas. Incluye seguimiento, visitas de verificación y atención a cualquier incidencia dentro del periodo acordado.",
  },
  {
    id: "cobertura",
    question: "¿Qué cobertura geográfica tienen?",
    answer:
      "Atendemos hogares, empresas y operaciones industriales en la ciudad y zonas aledañas. Para proyectos especiales o provincias podemos coordinar visitas programadas.",
  },
  {
    id: "certificados",
    question: "¿Qué certificados entregan?",
    answer:
      "Emitimos certificados de saneamiento ambiental, informes fotográficos y documentación de respaldo para municipalidades, auditorías, DIGESA y áreas de HSE.",
  },
];

export default function FaqSection() {
  const [openId, setOpenId] = useState<string | null>(FAQ_ITEMS[0]?.id ?? null);

  const toggle = (id: string) => {
    setOpenId((current) => (current === id ? null : id));
  };

  return (
    <section className="bg-slate-50 py-16 md:py-20">
      <div className="max-w-4xl mx-auto px-6">
        {/* título */}
        <h2 className="text-center text-2xl md:text-3xl font-extrabold text-blue-900">
          Preguntas Frecuentes
        </h2>
        <p className="mt-2 text-center text-sm md:text-base text-slate-500">
          Resolviendo las dudas más comunes sobre nuestros servicios de
          saneamiento ambiental.
        </p>

        <div className="mt-8 space-y-3">
          {FAQ_ITEMS.map((item) => {
            const isOpen = item.id === openId;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => toggle(item.id)}
                className="w-full text-left"
              >
                <div
                  className={`w-full rounded-2xl bg-white shadow-sm border border-slate-100 px-4 md:px-6 py-3 md:py-4 transition-colors
                  ${isOpen ? "border-red-200 shadow-md" : "hover:bg-slate-50"}`}
                >
                  {/* fila pregunta + icono */}
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-sm md:text-[0.95rem] font-medium text-slate-800">
                      {item.question}
                    </span>
                    <span
                      className={`shrink-0 inline-flex h-7 w-7 items-center justify-center rounded-full border border-red-100 
                        text-red-500 bg-red-50 transition-transform duration-200
                        ${isOpen ? "rotate-180" : ""}`}
                    >
                      <ChevronDown className="size-4" />
                    </span>
                  </div>

                  {/* respuesta */}
                  <div
                    className={`grid transition-all duration-200 ease-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100 mt-3"
                        : "grid-rows-[0fr] opacity-0 mt-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
