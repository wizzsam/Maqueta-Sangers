import React from "react";
import { motion } from "framer-motion";

export default function ContactHero() {
  return (
    <section className="pt-30 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 py-10 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl lg:text-[2.6rem] font-extrabold text-blue-900"
        >
          Contáctanos
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-3 max-w-2x lg:text-[1.5rem] mx-auto text-gray-600"
        >
          Estamos listos para atenderte y resolver tus necesidades.
        </motion.p>
      </div>
    </section>
  );
}