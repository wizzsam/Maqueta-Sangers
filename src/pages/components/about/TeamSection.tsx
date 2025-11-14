import React from "react";
import { motion } from "framer-motion";
import type { TeamRole } from "../../types/about";

type Props = {
    image: string;
    roles: TeamRole[];
};

export default function TeamSection({ image, roles }: Props) {
    return (
        <section className="bg-white">
            <div className="max-w-7xl mx-auto px-6 py-14 grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1.1fr)] items-center">
                {/* Texto + roles */}
                <motion.div
                    initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
                    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-2xl md:text-3xl font-bold text-blue-900">
                        Nuestro Equipo
                    </h2>
                    <p className="mt-2 text-sm md:text-base text-gray-600">
                        Sangers cuenta con un equipo multidisciplinario de profesionales
                        comprometidos con la excelencia. Cada miembro aporta experiencia y
                        dedicación para garantizar servicios de calidad superior.
                    </p>

                    <div className="mt-6 space-y-3">
                        {roles.map((r, i) => (
                            <motion.div
                                key={r.id}
                                initial={{ opacity: 0, y: 14, filter: "blur(6px)" }}
                                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.45, delay: 0.05 + i * 0.05 }}
                                whileHover={{ y: -4 }}
                                whileTap={{ scale: 0.98 }}
                                className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white px-4 py-3 pl-5 shadow-sm transition-all hover:border-red-300 hover:shadow-md"
                            >
                                {/* barra lateral de acento */}
                                <span className="pointer-events-none absolute left-0 top-0 h-full w-1.5 bg-gradient-to-b from-red-500 via-orange-400 to-teal-400 opacity-70" />

                                {/* glow suave al hover */}
                                <span className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <span className="absolute -right-10 -bottom-10 h-24 w-24 rounded-full bg-red-500/5 blur-2xl" />
                                </span>

                                <p className="font-semibold text-gray-900">
                                    {r.title}
                                </p>
                                <p className="text-sm text-gray-600">
                                    {r.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Imagen del equipo */}
                <motion.div
                    initial={{ opacity: 0, x: 40, filter: "blur(6px)" }}
                    whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="relative"
                >
                    {/* marco de color detrás */}
                    <div className="absolute -inset-3 rounded-3xl bg-gradient-to-tr from-red-500/10 via-orange-400/5 to-teal-400/10 blur-xl" />
                    <div className="relative overflow-hidden rounded-3xl shadow-xl border border-white/40">
                        <img
                            src={image}
                            alt="Equipo de Sangers en reunión"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
