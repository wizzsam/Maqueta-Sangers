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
            <div className="max-w-7xl mx-auto px-6 py-12 grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1.1fr)] items-center">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-2xl md:text-3xl font-bold text-blue-900">
                        Nuestro Equipo
                    </h2>
                    <p className="mt-2 text-sm md:text-base text-gray-600">
                        Sangers cuenta con un equipo multidisciplinario de profesionales
                        comprometidos con la excelencia. Cada miembro aporta experiencia y
                        dedicación para garantizar servicios de calidad superior.
                    </p>

                    <div className="mt-5 space-y-3">
                        {roles.map((r, i) => (
                            <motion.div
                                key={r.id}
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.35, delay: i * 0.05 }}
                                className="rounded-2xl border border-gray-200 px-4 py-3 bg-white hover:border-red-200 hover:shadow-sm transition"
                            >
                                <p className="font-semibold text-gray-900">{r.title}</p>
                                <p className="text-sm text-gray-600">{r.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="overflow-hidden rounded-3xl shadow-lg"
                >
                    <img
                        src={image}
                        alt="Equipo de Sangers en reunión"
                        className="w-full h-full object-cover"
                    />
                </motion.div>
            </div>
        </section>
    );
}
