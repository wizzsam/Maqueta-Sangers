import React from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

const ContactServicesBanner: React.FC = () => {
  return (
    <section className="px-6 pb-12">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="rounded-3xl bg-gradient-to-r from-red-500 via-orange-400 to-teal-400
                     text-white px-8 py-10 md:px-12 md:py-12 shadow-lg"
        >
          <h2 className="text-xl md:text-2xl font-extrabold text-center">
            ¿Aún no sabes qué servicios necesitas?
          </h2>

          <p className="mt-3 text-sm md:text-base font-bold text-center opacity-150 max-w-xl mx-auto">
            Conoce todos nuestros servicios especializados de saneamiento ambiental.
          </p>

          <div className="mt-6 flex justify-center">
            <NavLink
              to="/servicios" // cambia esta ruta si usas otra
              className="inline-flex items-center px-6 py-3 bg-white text-red-500
                         font-semibold rounded-full shadow-md text-sm md:text-base
                         hover:-translate-y-[1px] hover:shadow-lg transition-transform duration-150"
            >
              Ver servicios
              <span className="ml-2 text-base">➜</span>
            </NavLink>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactServicesBanner;