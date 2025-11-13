import React from "react";
import { motion } from "framer-motion";
import { Zap, Phone } from "lucide-react";

export default function ServicesCTA() {
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
                                ¿Necesitas un servicio especial?
                            </h2>
                            <p className="mt-1 text-sm md:text-base text-white/90 max-w-xl">
                                Contáctanos para diseñar un plan de saneamiento ambiental a la
                                medida de tu empresa o proyecto.
                            </p>
                        </div>
                    </div>

                    <a
                        href="tel:+51999999999"
                        className="inline-flex items-center gap-2 rounded-full bg-white text-red-600 px-6 py-3 text-sm md:text-base font-semibold shadow hover:bg-gray-50"
                    >
                        <Phone size={18} />
                        Consultar ahora
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
