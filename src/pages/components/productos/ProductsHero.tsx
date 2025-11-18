import React from "react";
import { ShoppingBag, ShieldCheck, ArrowRight } from "lucide-react";
import BgProductos from "../../../assets/Desratizacion.webp";
import { Link } from 'react-router-dom';

type Props = {
  waPhone?: string; // opcional por si quieres Whatsapp
};

const ProductsHero: React.FC<Props> = ({ waPhone }) => {
  const waLink = waPhone
    ? `https://wa.me/${waPhone}?text=${encodeURIComponent(
      "Hola, deseo información sobre sus productos de saneamiento."
    )}`
    : "#";

  return (
    <section
      className="relative h-[60vh] min-h-[420px] w-full overflow-hidden text-white"
      style={{
        backgroundImage: `url(${BgProductos})`,
      }}
    >
      {/* overlay con degradado + blur ligero */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/75 to-indigo-900/85 backdrop-blur-[2px]" />

      {/* contenido */}
      <div className="relative z-10 h-full">
        <div className="max-w-6xl mx-auto h-full px-6 flex flex-col justify-center  pt-20 md:pt-16">
          {/* migas simples */}
          <p className="text-xs md:text-sm text-slate-200/80 mb-3 tracking-wide">

            {/* Este es el enlace a Inicio */}
            <Link to="/" className="text-slate-300/80 hover:text-slate-100 transition-colors">
              Inicio
            </Link>

            <span className="mx-1 text-slate-400">/</span>
            <span className="text-orange-400 font-semibold">Productos</span>
          </p>
          {/* título principal */}
          <div className="flex items-center gap-3 mb-2">
            <ShoppingBag className="hidden sm:block size-8 md:size-9 text-orange-400" />
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight">
              Conoce los productos
              <span className="block text-orange-400">
                que Sangers tiene para ti
              </span>
            </h1>
          </div>

          {/* descripción */}
          <p className="mt-3 max-w-2xl text-sm md:text-base text-slate-100/90 leading-relaxed">
            Insumos certificados para control de plagas, desinfección, limpieza
            de cisternas y más.
          </p>

          {/* pills / highlights */}
          <div className="mt-5 flex flex-wrap gap-3 text-xs md:text-sm">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 border border-white/20">
              <ShieldCheck className="size-4 text-emerald-300" />
              <span>Registro sanitario y fichas técnicas</span>
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 border border-white/20">
              <span className="size-2 rounded-full bg-orange-300" />
              <span>Uso profesional en saneamiento ambiental</span>
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 border border-white/20">
              <span className="size-2 rounded-full bg-sky-300" />
              <span>Soluciones para hogares, empresas e industria</span>
            </span>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProductsHero;
