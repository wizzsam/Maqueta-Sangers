import React from "react";
import { FiMapPin, FiClock, FiMessageCircle } from "react-icons/fi";
import { motion } from "framer-motion";


const ContactLocationSection: React.FC = () => {
  return (
    <section className="relative px-6 pt-16 pb-20">
      <div className="max-w-6xl mx-auto">
        {/* Título */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.4 }}
          className="text-2xl md:text-3xl font-extrabold text-center text-gray-900 mb-10"
        >
          Encuéntranos
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Columna izquierda: tarjetas de info */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55 }}
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-4"
          >
            {/* Ubicación */}
            <div className="flex gap-3 rounded-2xl bg-cyan-100 border border-cyan-100 px-4 py-4 shadow-sm">
              <div className="mt-1 flex h-13 w-14 items-center justify-center rounded-full bg-cyan-100">
                <FiMapPin className="w-8 h-8 text-black" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-gray-900">Ubicación</h3>
                <p className="mt-1 text-sm font-semibold text-gray-900">
                  Av. Pacífico Mz. I Lt. 08 Frente a METRO – Al costado de la
                  Herradura | STAND N° 52, Nuevo Chimbote, Áncash.
                </p>
              </div>
            </div>

            {/* Horario de atención */}
            <div className="flex gap-3 rounded-2xl bg-amber-100 border border-amber-100 px-4 py-4 shadow-sm">
              <div className="mt-1 flex h-20 w-10 items-center justify-center rounded-full bg-amber-100">
                <FiClock className="w-8 h-8 text-black" />
              </div>
              <div className="w-full">
                <h3 className="text-sm font-bold text-gray-900">
                  Horario de Atención
                </h3>
                <div className="mt-1 grid grid-cols-2 text-sm font-semibold text-gray-900 gap-y-1">
                  <span>Lunes – Viernes:</span>
                  <span className="text-right md:text-left">
                    8:00 AM – 6:00 PM
                  </span>
                  <span>Sábados:</span>
                  <span className="text-right md:text-left">
                    9:00 AM – 2:00 PM
                  </span>
                  <span>Domingos:</span>
                  <span className="text-right md:text-left">Cerrado</span>
                </div>
              </div>
            </div>

            {/* Contacto */}
            <div className="flex gap-3 rounded-2xl bg-rose-100 border border-rose-100 px-4 py-4 shadow-sm">
              <div className="mt-1 flex h-14 w-10 items-center justify-center rounded-full bg-rose-100">
                <FiMessageCircle className="w-8 h-8 text-black" />
              </div>

              <div>
                <h3 className="text-sm font-bold text-gray-900">Contacto</h3>
                <p className="mt-1 text-sm font-semibold text-gray-900">
                  WhatsApp:{" "}
                  <span className="font-medium">+51 999 999 999</span>
                  <br />
                  Email:{" "}
                  <span className="font-medium">contacto@sangers.com</span>
                </p>
              </div>
            </div>
          </motion.div>

          {/* Columna derecha: mapa */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            viewport={{ once: true, amount: 0.3 }}
            className="h-72 md:h-full rounded-2xl overflow-hidden shadow-md border border-gray-200 bg-white"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d868.2290280429854!2d-78.53346101509545!3d-9.120839275482487!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91ab858fd515efdf%3A0x9f41a468f8ff59ab!2sCENTRO%20FERRETERO%20NUEVO%20CHIMBOTE!5e0!3m2!1ses!2spe!4v1763026182681!5m2!1ses!2spe"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactLocationSection;