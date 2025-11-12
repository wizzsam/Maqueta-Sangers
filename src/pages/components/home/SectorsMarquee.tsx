import React from "react";

export type SectorItem = {
  id: string;
  name: string;
  image: string;
  href?: string;
};

type Props = {
  title?: string;
  subtitle?: string;
  items: SectorItem[];
  speedMs?: number; // menor = más rápido
  bgImage?: string;
};

export default function SectorsMarquee({
  title = "Sectores que atendemos",
  subtitle = "Atendemos hogares y también operaciones comerciales e industriales.",
  items,
  speedMs = 18000,
}: Props) {
  // Para un bucle perfecto: duplicamos el contenido 2 veces
  const seq = [...items, ...items];

  return (
    <section
      className="relative py-10 w-full overflow-hidden"
      style={{
        // FONDO NARANJA
        background:
          "linear-gradient(90deg, #FF8A00 0%, #FF6A00 100%)",
      }}
    >
      {/* Overlay MUY sutil para legibilidad (sin franjas laterales) */}
      <div className="absolute inset-0 bg-black/5 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <h2 className="text-center text-2xl md:text-3xl font-bold text-white drop-shadow-sm">
          {title}
        </h2>
        {subtitle && (
          <p className="mt-2 text-center text-white/90">{subtitle}</p>
        )}

        {/* Marquee */}
        <div className="mt-6">
          <div className="marquee overflow-hidden">
            <ul
              className="marquee-track flex items-center"
              style={
                {
                  ["--speed" as any]: `${speedMs}ms`,
                } as React.CSSProperties
              }
            >
              {seq.map((s, i) => (
                <li key={`${s.id}-${i}`} className="shrink-0 px-2 md:px-3">
                  <SectorCard item={s} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* CSS local */}
      <style>{`
        .marquee { width: 100%; }
        .marquee-track {
          width: max-content;              /* el ancho se ajusta al contenido real */
          gap: 12px;                       /* separar tarjetas sin crear "huecos" */
          animation: scroll var(--speed, 18000ms) linear infinite;
          will-change: transform;
        }
        @keyframes scroll {
          from { transform: translateX(0); }
          /* -50% EXACTO para que la segunda mitad encaje con la primera sin "corte" */
          to   { transform: translateX(-50%); }
        }
        /* Accesibilidad: respeta preferencias del usuario */
        @media (prefers-reduced-motion: reduce) {
          .marquee-track { animation: none; }
        }
      `}</style>
    </section>
  );
}

function SectorCard({ item }: { item: SectorItem }) {
  const Card = (
    <div className="rounded-full bg-white/95 backdrop-blur-sm shadow-md hover:shadow-lg transition-all px-6 py-2.5 flex items-center gap-3 whitespace-nowrap">
      <div className="h-10 w-10 overflow-hidden rounded-full shrink-0">
        <img src={item.image} alt={item.name} className="h-full w-full object-cover" />
      </div>
      <span className="text-sm md:text-base font-semibold text-gray-900">
        {item.name}
      </span>
    </div>
  );
  return item.href ? <a href={item.href}>{Card}</a> : Card;
}
