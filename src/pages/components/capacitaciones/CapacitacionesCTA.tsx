import React from "react";
import { motion } from "framer-motion";
import { Zap, Phone } from "lucide-react";

export default function CapacitacionesCTA() {
    return (
        <section className="bg-gray-50 pb-14">
            <div className="max-w-7xl mx-auto px-6 pt-8">
                <motion.div
                    initial={{ opacity: 0, y: 28 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="rounded-3xl bg-red-600 text-white px-6 py-10 md:px-10 flex flex-col md:flex-row items-center justify-between gap-6"
                >
                    <div className="flex items-start gap-4">
                        <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/10">
                            <Zap size={26} />
                        </span>
                        <div>
                            <h2 className="text-xl md:text-2xl font-bold">
                                ¿Necesitas una Capacitacion Personalizada?
                            </h2>
                            <p className="mt-1 text-sm md:text-base text-white/90 max-w-xl">
                                Contáctanos para diseñar un plan de capacitacion a la
                                medida de tu empresa o proyecto.
                            </p>
                        </div>
                    </div>

                    <a
                    href="https://wa.me/51999999999?text=Hola,%20quiero%20más%20información%20sobre%20las%20capacitaciones."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-white text-red-600 px-6 py-3 text-sm md:text-base font-semibold shadow hover:bg-gray-50"
                    >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        className="w-5 h-5"
                    >
                        <path d="M20.52 3.48A11.86 11.86 0 0 0 12.04 0C5.63 0 .44 5.2.44 11.61c0 2.05.54 4.04 1.57 5.81L0 24l6.74-1.96a12.13 12.13 0 0 0 5.3 1.23h.01c6.41 0 11.6-5.19 11.6-11.6 0-3.1-1.2-6.01-3.39-8.2ZM12.05 21.3h-.01a9.65 9.65 0 0 1-4.92-1.34l-.35-.2-4 1.16 1.15-3.9-.22-.4A9.61 9.61 0 1 1 21.67 8.9a9.57 9.57 0 0 1-9.62 12.4Zm5.39-7.22c-.3-.15-1.77-.87-2.05-.97-.28-.1-.48-.15-.68.15-.2.29-.78.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.88-.78-1.47-1.74-1.64-2.04-.17-.29-.02-.45.13-.6.13-.13.3-.35.45-.52.15-.17.2-.29.3-.48.1-.2.05-.36-.02-.51-.07-.15-.68-1.63-.93-2.23-.24-.57-.49-.5-.68-.51-.17-.01-.36-.01-.55-.01-.2 0-.52.08-.79.36-.27.29-1.04 1.02-1.04 2.48 0 1.46 1.07 2.87 1.22 3.07.15.2 2.1 3.2 5.1 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.08-.12-.27-.2-.57-.35Z" />
                    </svg>

                    Enviar Mensaje
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
