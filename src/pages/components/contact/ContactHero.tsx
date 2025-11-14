import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// IMPORTA LA IMAGEN CORRECTAMENTE DESDE src/
import heroBg from "../../../assets/contact.png";

const ContactHero: React.FC = () => {
  return (
    <section className="relative h-[60vh] min-h-[420px] w-full overflow-hidden text-white">
      {/* Fondo imagen + overlay */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          className="w-full h-full object-cover "
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/55 to-sky-900/50" />
      </div>

      {/* Contenido */}
      <div className="relative z-10 h-full">
        <div className="max-w-6xl mx-auto h-full px-6 flex flex-col justify-center pt-20 md:pt-16">
        {/* Breadcrumb con Link, igual que productos */}
        <motion.p
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-xs md:text-sm text-slate-200/80 mb-3 tracking-wide"
        >
          <Link
            to="/"
            className="text-slate-300/80 hover:text-slate-100 transition-colors"
          >
            Inicio
          </Link>
          <span className="mx-1 text-slate-400">/</span>
          <span className="text-orange-300 font-semibold">Contáctanos</span>
        </motion.p>

        {/* Título */}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight max-w-3xl"
        >
          Comunícate con{" "}
          <span className="text-orange-300">Sangers</span>
        </motion.h1>

        {/* Subtítulo */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-3 text-slate-100/90 max-w-xl text-sm md:text-base"
        >
          Estamos listos para ayudarte con tus necesidades de saneamiento
          ambiental, control de plagas y soluciones profesionales.
        </motion.p>

        {/* Pills */}
        <div className="mt-6 flex flex-wrap gap-3 text-xs md:text-sm">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center gap-2 bg-white/10 text-slate-100 px-4 py-2 rounded-full backdrop-blur"
          >
            <span className="text-pink-300">📞</span>
            <span>Atención rápida</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex items-center gap-2 bg-white/10 text-slate-100 px-4 py-2 rounded-full backdrop-blur"
          >
            <span className="text-sky-300">💼</span>
            <span>Asesoría profesional</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex items-center gap-2 bg-white/10 text-slate-100 px-4 py-2 rounded-full backdrop-blur"
          >
            <span className="text-emerald-300">📝</span>
            <span>Cotizaciones instantáneas</span>
          </motion.div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;